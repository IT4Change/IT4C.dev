import { env } from './env'
import { createServer } from './server'

const server = createServer(env)

describe('HTTP Server', () => {
  test.skip('GET / should return 404', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/',
    })

    expect(response.statusCode).toBe(404)
  })

  test.skip('POST /mail without body should return 400 Bad Request', async () => {
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

  test('POST /mail should with body return 200 Success', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/mail',
      body: {
        name: 'Peter Lustig',
        email: 'peter@lustig.de',
        text: 'This is my request',
        telephone: '+420 55555 55555',
      },
      /* headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      }, */
    })

    expect(response.statusCode).toBe(200)
    expect(JSON.parse(response.body)).toEqual({
      success: true,
    })
  })
})
