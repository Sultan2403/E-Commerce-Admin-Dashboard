export default async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) throw new Error("Bad Response!");

    const data = await res.json();
    console.log(data);

    return data.products;
  } catch (error) {
    console.error(error);
  }
}

getProducts();
