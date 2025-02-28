// eslint-disable-next-line import/no-namespace
import * as nodemailer from 'nodemailer'

import { env } from './env'
import { createServer } from './server'

// Mock nodemailer
jest.mock('nodemailer')

const mockCreateTransport = nodemailer.createTransport as unknown as jest.Mock

const mockSendMail = jest.fn()

mockCreateTransport.mockReturnValue({
  sendMail: mockSendMail,
})

const server = createServer(env)

describe('HTTP Server', () => {
  test('GET / should return 404', async () => {
    jest.clearAllMocks()
    const response = await server.inject({
      method: 'GET',
      url: '/',
    })

    expect(response.statusCode).toBe(404)
  })

  test('POST /mail without body should return 400 Bad Request', async () => {
    jest.clearAllMocks()
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

  test('POST /mail with body should return 200 Success', async () => {
    jest.clearAllMocks()
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
    jest.clearAllMocks()
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
    jest.clearAllMocks()
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
