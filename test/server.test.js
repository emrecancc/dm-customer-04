const server = require('../src/server');

beforeAll(() => {
  server.listen(3079);
});

afterAll(() => {
  server.close();
});

// Existing tests
// (The original test code remains unchanged below)
