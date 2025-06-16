// https://api.api-ninjas.com/v1/quotes
import { Box, Button, Typography } from "@mui/material";
import {  useEffect, useState } from "react";
import CardLoad from "../Loading/CardLoad";

function QuoteBox() {
  const apiKey: string = import.meta.env.VITE_QUOTES_API_KEY;
  let url = "https://api.api-ninjas.com/v1/quotes";
  // states
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getQuote() {
    try {
      setIsLoading(true);
      const response: Response = await fetch(url, {
        headers: {
          "X-Api-Key": apiKey,
        },
      });
      const data = await response.json(); // author, category, quote
      let shortQuote =
        data[0].quote.split(" ").length > 50
          ? data[0].quote.split(" ").slice(0, 50).join("") + "..."
          : data[0].quote;
      setQuote(shortQuote);
      setAuthor(data[0].author);
      setCategory(data[0].category);
    } catch (error) {
      console.error("Error fetching quote: ", error);
      setQuote("Failed to load quote :(");
      setAuthor("Developer");
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      {isLoading ? (
        <CardLoad />
      ) : (
        <Box
          sx={{
            width: "40%",
            height: "400px",
            bgcolor: "#FFD980",
            p: "25px",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              font: "600",
              lineHeight: "15px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              mb: "40px",
            }}
          >
            {category ? "#" + category : ""}
          </Typography>
          <Typography
            sx={{
              color: "#262D33",
              minWidth: "220px",
              fontSize: "25px",
              font: "900",
              lineHeight: "30px",
              mb: "40px",
            }}
          >
            {quote}
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "18px" }}
          >
            <img
              className="w-[45px] h-[45px]"
              src="https://avatar.iran.liara.run/public"
              alt="avatar"
            />
            <Typography
              sx={{ color: "#F78316", fontSize: "14px", lineHeight: "15px" }}
            >
              {author}
            </Typography>
          </Box>
          <Button
            onClick={getQuote}
            variant="contained"
            color="success"
            sx={{ position: "absolute", bottom: "0", right: "-150px" }}
          >
            New Quote
          </Button>
        </Box>
      )}
    </>
  );
}

export default QuoteBox;
