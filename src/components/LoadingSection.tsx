import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LoadingSection() {
  return (
    <Box
      className="w-full h-[300px] flex flex-col items-center justify-center backdrop-blur-sm"
    >
      {/* Spinner */}
      <CircularProgress size={20} />

      {/* Loading text */}
      <p className="mt-4 text-lg font-medium">
        Loading...
      </p>
    </Box>
  );
}
