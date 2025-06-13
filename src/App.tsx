import { Box } from "@mui/material";
import QuoteBox from "./components/QuoteBox";
import { Suspense } from "react";
import CardLoad from "./Loading/CardLoad";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: "100px",
      }}
    >
      <Suspense fallback={<CardLoad/>}>

      <QuoteBox />
      </Suspense>
    </Box>
  );
}

export default App;
