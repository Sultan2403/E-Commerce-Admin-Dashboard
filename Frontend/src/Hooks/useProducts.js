import { useEffect, useState } from "react";
import getProducts from "../Apis/products";

// Custom hook to fetch and manage products
export default function useProducts() {
  // State to store the list of products

  const [products, setProducts] = useState([]);

  // State to track if an error occurred

  const [products_error, setError] = useState(false);

  // State to track loading status

  const [products_loading, setLoading] = useState(true);
  async function awaitProducts() {
    setLoading(true);
    setError(false);
    try {
      const data = await getProducts();
      !data[0] ? setError(true) : null; // Chks if data contains smth useful
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  // Fetch products when the hook is used
  useEffect(() => {
    awaitProducts();
  }, []);

  // Return state values for the component to use
  return { products, products_error, products_loading, awaitProducts };
}
