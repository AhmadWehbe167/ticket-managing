import CircularProgress from "@mui/material/CircularProgress";

export default function FPSpinner() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <CircularProgress color="inherit" />
    </div>
  );
}
