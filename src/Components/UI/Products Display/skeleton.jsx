import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
export default function Variants() {
  return (
    <Stack spacing={1} sx={{ padding: "20px" }}>
      {/* Product image */}
      <Skeleton
        variant="rectangular"
        sx={{ width: "100%", height: 250, borderRadius: 2 }}
        animation="wave"
      />

      {/* Product name */}
      <Skeleton
        variant="text"
        sx={{ width: "80%", fontSize: "1rem" }}
        animation="wave"
      />

      {/* Product price */}
      <Skeleton
        variant="text"
        sx={{ width: "40%", fontSize: "0.875rem" }}
        animation="wave"
      />
    </Stack>
  );
}
