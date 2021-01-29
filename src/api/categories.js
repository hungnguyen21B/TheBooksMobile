import http from './http';
export async function getCategoriesApi() {
  return http.get('/api/categories');
}
