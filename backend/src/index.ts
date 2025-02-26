import { loadEnv, env} from './env';
loadEnv(); // Executed synchronously before the rest of your app loads

import { FormatRegistry, Static, Type, TypeBoxTypeProvider, TypeBoxValidatorCompiler } from '@fastify/type-provider-typebox'
import Fastify from 'fastify'
import Mailer from 'nodemailer'
import { IsEmail } from './formats';

// Register EMail format
FormatRegistry.Set('email', (value) => IsEmail(value))

// Nodemailer
const mailService = Mailer.createTransport({
	sendmail: true,
	newline: 'unix',
	path: '/usr/sbin/sendmail -S 192.168.16.102',
})

// Fatify
const fastify = Fastify({
  logger: true
}).setValidatorCompiler(TypeBoxValidatorCompiler)

// Mail
const schema = {
  body: Type.Object({
    name: Type.String({ minLength: 2}),
    email: Type.String({ format: 'email' }),
    telephone: Type.Optional(Type.String({ minLength: 8})),
    text: Type.String({ minLength: 5}),
  }),
  response: {
    200: Type.Object({ success: Type.Boolean({default: true}) }),
    400: Type.Object({ success: Type.Boolean({default: false}), error: Type.String() })
  }
}

fastify.withTypeProvider<TypeBoxTypeProvider>().post('/mail', {schema},  async (request, reply) => {
  try {
    await mailService.sendMail({
      to: env.EMAIL_RECEIVER,
      from: `"${request.body.name}" <${request.body.email}>`,
      subject: env.EMAIL_SUBJECT,
      text: `${request.body.text}${request.body.telephone ? `\n\nTelephone: ${request.body.telephone}` : ''}`,
    })
    reply.status(200).send({success: true})
  } catch (error){
    reply.status(400).send({success: false, error: error as string})
  }
})

// Run the server!
try {
  fastify.listen({ port: env.PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

