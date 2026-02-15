const baseURL = "https://dummyjson.com/products";

async function fetchItemImages(query = "sports-accessories", amount = 15) {
  const URL = `${baseURL}/category/${query}?limit=${amount}`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data.products);
  return data.products;
}

export default fetchItemImages;
