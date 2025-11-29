import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function EmptySection() {
  return (
    <Box
      className="w-full h-[300px] flex flex-col items-center justify-center backdrop-blur-sm"
    >
      {/* Spinner */}
      <i className="fa-regular fa-folder-open text-4xl text-slate-400"></i>

      {/* Loading text */}
      <p className="mt-4 text-lg font-medium text-slate-400">
        No Data
      </p>
    </Box>
  );
}
