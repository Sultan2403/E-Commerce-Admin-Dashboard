// Utility function to capitalize the first letter of a string
export default function capitalize(str) {
  // Return empty string if input is falsy
  if (!str) return "";
  // Uppercase the first character and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}
