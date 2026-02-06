// eslint-disable-next-line n/no-unpublished-import
import { jest, describe, test, expect, beforeEach } from '@jest/globals'

import type { Env } from './env'
import type { FastifyInstance } from 'fastify'

const mockSendMail = jest.fn()

// Mock nodemailer BEFORE importing modules that use it
jest.unstable_mockModule('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: mockSendMail,
  })),
}))

// Dynamic imports after mock setup
const { env } = (await import('./env')) as { env: Env }
const { createServer } = (await import('./server')) as {
  createServer: (env: Env) => FastifyInstance
}

const server = createServer(env)

describe('HTTP Server', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('GET / should return 404', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/',
    })

    expect(response.statusCode).toBe(404)
  })

  test('POST /mail without body should return 400 Bad Request', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/mail',
    })

    expect(response.statusCode).toBe(400)
    expect(JSON.parse(response.body)).toEqual({
      success: false,
      error: 'Bad Request',
    })
  })

  test('POST /mail with invalid email should return 400 Bad Request', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/mail',
      body: {
        name: 'Peter Lustig',
        email: 'invalid-email',
        text: 'This is my request',
      },
    })

    expect(response.statusCode).toBe(400)
    expect(mockSendMail).not.toHaveBeenCalled()
  })

  test('POST /mail with body should return 200 Success', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/mail',
      body: {
        name: 'Peter Lustig',
        email: 'peter@lustig.de',
        text: 'This is my request',
        telephone: '+420 55555 55555',
      },
    })

    expect(mockSendMail).toHaveBeenCalledWith({
      from: '"Peter Lustig" <peter@lustig.de>',
      subject: '[IT4C] Received EMail from Peter Lustig',
      text: 'This is my request\n\nTelephone: +420 55555 55555',
      to: 'admin@it4c.dev',
    })
    expect(response.statusCode).toBe(200)
    expect(JSON.parse(response.body)).toEqual({
      success: true,
    })
  })

  test('POST /mail without telephone should return 200 Success', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/mail',
      body: {
        name: 'Peter Lustig',
        email: 'peter@lustig.de',
        text: 'This is my request',
      },
    })

    expect(mockSendMail).toHaveBeenCalledWith({
      from: '"Peter Lustig" <peter@lustig.de>',
      subject: '[IT4C] Received EMail from Peter Lustig',
      text: 'This is my request',
      to: 'admin@it4c.dev',
    })
    expect(response.statusCode).toBe(200)
    expect(JSON.parse(response.body)).toEqual({
      success: true,
    })
  })

  test('POST /mail with body and mail delivery failure should return 400', async () => {
    mockSendMail.mockImplementationOnce(() => {
      throw new Error('Mail Failure')
    })
    const response = await server.inject({
      method: 'POST',
      url: '/mail',
      body: {
        name: 'Peter Lustig',
        email: 'peter@lustig.de',
        text: 'This is my request',
        telephone: '+420 55555 55555',
      },
    })

    expect(mockSendMail).toHaveBeenCalledWith({
      from: '"Peter Lustig" <peter@lustig.de>',
      subject: '[IT4C] Received EMail from Peter Lustig',
      text: 'This is my request\n\nTelephone: +420 55555 55555',
      to: 'admin@it4c.dev',
    })
    expect(response.statusCode).toBe(400)
    expect(JSON.parse(response.body)).toEqual({
      error: 'Error: Mail Failure',
      success: false,
    })
  })
})
