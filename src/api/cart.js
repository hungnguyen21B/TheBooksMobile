import http from './http';
export async function getCart() {
  return http.get('/api/basket/me');
}

export async function addToCart(data) {
  return http.post('/api/basket', data);
}

export async function deleteItemInCart(data) {
  return http.deleteItem('/api/basket', data);
}
