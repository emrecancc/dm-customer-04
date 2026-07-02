import { api } from '../src/api';

test('API responds within 500ms', async () => {
  const start = Date.now();
  await api();
  const elapsed = Date.now() - start;
  expect(elapsed).toBeLessThan(500);
});