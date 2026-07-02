import { fetchData } from './service';

export async function getData() {
  const data = await fetchData();
  return data;
}
