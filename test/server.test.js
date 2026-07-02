const request = require('supertest');
const app = require('../src/app');
const server = app.listen(3099);

afterAll(() => {
  server.close();
});

describe('Server', () => {
  it('should respond with 200', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});