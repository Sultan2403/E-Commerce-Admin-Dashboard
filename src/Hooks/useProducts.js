import { useEffect, useState } from "react";
import getProducts from "../Components/Api/api.config";

// Custom hook to fetch and manage products
export default function useProducts() {
  // State to store the list of products

  const [products, setProducts] = useState([]);

  // State to track if an error occurred

  const [error, setError] = useState(false);

  // State to track loading status

  const [loading, setLoading] = useState(true);

  // Fetch products when the hook is used
  useEffect(() => {
    async function awaitProducts() {
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

    awaitProducts();
  }, []);

  // Return state values for the component to use
  return { products, error, loading };
}
