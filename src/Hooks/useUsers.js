import getUsers from "../Apis/users";
import { useState, useEffect } from "react";

export default function useUsers() {
  // State to store the list of products

  const [users, setUsers] = useState([]);

  // State to track if an error occurred

  const [users_error, setError] = useState(false);

  // State to track loading status

  const [users_loading, setLoading] = useState(true);
  async function awaitUsers() {
    setLoading(true);
    setError(false);
    try {
      const data = await getUsers();
      !data[0] ? setError(true) : null; // Chks if data contains smth useful
      setUsers(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  // Fetch products when the hook is used
  useEffect(() => {
    awaitUsers();
  }, []);

  // Return state values for the component to use
  return { users, users_error, users_loading, awaitUsers };
}
