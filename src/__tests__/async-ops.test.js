const asyncOperation = require('../async-ops');

describe('batch processing', () => {
  test('processes all items', async () => {
    const results = await Promise.all(
      Array.from({ length: 10 }, (_, i) => asyncOperation(i))
    );
    expect(results).toHaveLength(10);
  });
});