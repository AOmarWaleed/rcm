
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0 ,
        backgroundColor: "loadingBg"  ,
        display:"flex" ,
        justifyContent: "center" ,
        alignItems : "center",
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
