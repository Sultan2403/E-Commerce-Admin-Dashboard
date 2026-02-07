// Fetches product data from the DummyJSON API
import axios from "axios";
export default async function getProducts() {
  try {
    const data = await axios.get("https://dummyjson.com/products");
    console.log(data);

    return data.data.products;
  } catch (error) {
    // Log any errors that occur during fetching or parsing
    console.error(error);
    return [];
  }
}

// Call the function to fetch products when the module loads
getProducts();
