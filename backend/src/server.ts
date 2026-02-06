import util from 'node:util'

import { Format, Type, TypeBoxValidatorCompiler } from '@fastify/type-provider-typebox'
import Fastify from 'fastify'
import { createTransport } from 'nodemailer'

import { IsEmail } from './formats'

import type { Env } from './env'
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import type { FastifyInstance } from 'fastify'

function createServer(env: Env): FastifyInstance {
  // Register EMail format
  Format.Set('email', (value) => IsEmail(value))

  // Nodemailer
  const mailService = createTransport({
    host: env.MAIL_HOST,
    port: 465,
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  })

  // Fatify
  const fastify = Fastify({
    logger: true,
  }).setValidatorCompiler(TypeBoxValidatorCompiler)

  // Mail
  const schema = {
    body: Type.Object({
      name: Type.String({ minLength: 2, maxLength: 35 }),
      email: Type.String({ format: 'email' }),
      telephone: Type.Optional(Type.String({ minLength: 8 })),
      text: Type.String({ minLength: 5 }),
    }),
    response: {
      200: Type.Object({ success: Type.Boolean({ default: true }) }),
      400: Type.Object({
        success: Type.Boolean({ default: false }),
        error: Type.String(),
      }),
    },
  }

  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .post('/mail', { schema }, async (request, reply) => {
      try {
        await mailService.sendMail({
          to: env.EMAIL_RECEIVER,
          from: `"${request.body.name}" <${request.body.email}>`,
          subject: util.format(env.EMAIL_SUBJECT, request.body.name),
          text: `${request.body.text}${request.body.telephone ? `\n\nTelephone: ${request.body.telephone}` : ''}`,
        })
        return await reply.status(200).send({ success: true })
        // eslint-disable-next-line no-catch-all/no-catch-all
      } catch (error) {
        return reply.status(400).send({ success: false, error: error as string })
      }
    })
  return fastify
}

export { createServer }
