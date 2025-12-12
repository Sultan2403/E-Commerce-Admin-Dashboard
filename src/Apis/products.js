// Fetches product data from the DummyJSON API
export default async function getProducts() {
  try {
    // Make an async request to the products endpoint
    const res = await fetch("https://dummyjson.com/products");

    // Check if the response status is OK (200-299 range)
    if (!res.ok) throw new Error("Bad Response!");

    // Parse the JSON response body
    const data = await res.json();
    console.log(data);
    // Return only the products array from the response
    return data.products;
  } catch (error) {
    // Log any errors that occur during fetching or parsing
    console.error(error);
    return [];
  }
}

// Call the function to fetch products when the module loads
getProducts();
