import http from './http';
export async function getCart() {
  return http.get('/api/basket/me');
}
