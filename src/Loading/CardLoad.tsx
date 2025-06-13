import { Box, Button, Skeleton, Stack } from "@mui/material";

function CardLoad() {
  return (
    <Box
      sx={{ width: "40%", p: "25px", height: "400px", position: "relative" }}
    >
      <Stack>
        {/* Category */}
        <Skeleton
          variant="text"
          sx={{
            fontSize: "12px",
            lineHeight: "20px",
            width: "50px",
            mb: "40px",
          }}
        />
        {/* Quote */}
        <Skeleton
          variant="rounded"
          width={558}
          height={250}
          sx={{ mb: "40px" }}
        />
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "18px" }}>
          <Skeleton variant="circular" width={45} height={45} />
          <Skeleton
            variant="text"
            sx={{ fontSize: "14px", lineHeight: "20px", width: "50px" }}
          />
        </Box>
      </Stack>
      <Button
        variant="contained"
        color="success"
        sx={{
          position: "absolute",
          bottom: "0",
          right: "-150px",
          letterSpacing: "1px",
        }}
      >
        Loading...
      </Button>
    </Box>
  );
}

export default CardLoad;
