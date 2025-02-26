import { loadEnv, env} from './env';
loadEnv(); // Executed synchronously before the rest of your app loads

import { Static, Type } from '@fastify/type-provider-typebox'
import Fastify from 'fastify'
import Mailer from 'nodemailer'

// Nodemailer
const mailService = Mailer.createTransport({
	sendmail: true,
	newline: 'unix',
	path: '/usr/sbin/sendmail',
})

// Fatify
const fastify = Fastify({
  logger: true
})

// Mail
const schema = Type.Object({
  name: Type.String({ minLength: 2}),
  email: Type.String({ format: 'email' }),
  telephone: Type.Optional(Type.String({ minLength: 8})),
  text: Type.String({ minLength: 5}),
})

type Body = Static<typeof schema>

interface Reply {
  200: { success:boolean };
  '4xx': { success: false, error: string };
}

fastify.post<{Body: Body, Reply: Reply}>('/mail', {schema},  async (request, reply) => {
  mailService.sendMail({
    to: env.EMAIL_RECEIVER,
    from: `"${request.body.name}" <${request.body.email}>`,
    subject: env.EMAIL_SUBJECT,
    text: `${request.body.text}${request.body.telephone ? `\n\nTelephone: ${request.body.telephone}` : ''}`,
  })

  reply.status(200).send({success: true})
})

// Run the server!
try {
  await fastify.listen({ port: env.PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}