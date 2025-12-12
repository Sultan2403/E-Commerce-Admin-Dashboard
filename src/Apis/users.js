// Fetches product data from the DummyJSON API
import axios from "axios";
export default async function getUsers() {
  try {
    const data = await axios.get("https://dummyjson.com/users");
    console.log(data);
    return data.data.users;
  } catch (error) {
    // Log any errors that occur during fetching or parsing
    console.error(error);
    return [];
  }
}

// Call the function to fetch products when the module loads
getUsers();
