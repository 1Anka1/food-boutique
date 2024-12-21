import axios from 'axios';

const getData = axios.create({
  baseURL: 'https://food-boutique.b.goit.study/api',
});

async function fetchProducts(endpoint) {
  try {
    const { data } = await getData(endpoint);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function getAllProducts() {
  return fetchProducts('/products');
}

export function getProductById(id) {
  return fetchProducts(`/products/${id}`);
}

export async function getDiscountProducts() {
  const dataArr = await fetchProducts('/products/discount');
  const res = dataArr.sort(() => Math.random() - 0.5).slice(0, 2);
  return res;
}

getAllProducts().then(console.log);
