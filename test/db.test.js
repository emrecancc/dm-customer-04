const { User } = require('../models');

describe('User model', () => {
  beforeEach(() => User.destroy({ where: {}, truncate: true }));

  test('creates a user', async () => {
    // existing test implementation
  });

  test('starts with empty database', async () => {
    // existing test implementation
  });
});