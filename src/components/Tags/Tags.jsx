import React from "react";
import { Box, Typography } from "@mui/material";

function Tags({genres}) {
    return (
        <Box sx={{
            width: "100%",
            padding: "20px",
            }}>
        <Typography sx={{ color: "#fff", fontSize: "20px" }}>
          <Box component="span" 
          sx={{ 
            color: "#D12E27",
            fontWeight: "900",
            fontSize: "20px"
            }}>
            TAGS :
          </Box>{" "}
          {genres && genres.join(" • ")}
        </Typography>
      </Box>

    );
}


export default Tags;