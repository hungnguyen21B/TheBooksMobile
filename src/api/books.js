import http from './http';
export async function getBooksApi() {
  return http.get('/api/books');
}
