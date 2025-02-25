import React from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import GrassIcon from "@mui/icons-material/Grass";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HiveIcon from "@mui/icons-material/Hive";
const Testimonial = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "70vh",
          backgroundColor: "#F5F1EC",
          marginTop: "5rem",
          marginBottom: "3rem",
          textAlign: "center",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Why Choose Us
        </Typography>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Our products are expertly formulated with the finest natural
          <br />
          ingredients and backed by scientific research.
        </Typography>

        <Grid container spacing={4} justifyContent="center" marginTop={4}>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{ p: 3, display: "flex", alignItems: "start" }}
              elevation={3}
            >
              <IconButton sx={{ color: "#5CA153", mr: 2, display: "block" }}>
                <GrassIcon sx={{ fontSize: "4rem" }} />
              </IconButton>
              <Box textAlign="left">
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ marginBottom: "0.5rem" }}
                >
                  Premium Natural Ingredients
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ display: "block", marginTop: "0.5rem" }}
                >
                  From powerful botanical extracts to nourishing oils, each
                  ingredient is carefully selected for its quality and
                  effectiveness.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{ p: 3, display: "flex", alignItems: "start" }}
              elevation={3}
            >
              <IconButton sx={{ color: "#5CA153", mr: 2, display: "block" }}>
                <AcUnitIcon sx={{ fontSize: "4rem" }} />
              </IconButton>
              <Box textAlign="left">
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ marginBottom: "0.5rem" }}
                >
                  Lorem ipsum dolor sjt consectetur.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ display: "block", marginTop: "0.5rem" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Porro dicta repellat inventore pariatur commodi repellendus!
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{ p: 3, display: "flex", alignItems: "start" }}
              elevation={3}
            >
              <IconButton sx={{ color: "#5CA153", mr: 2, display: "block" }}>
                <HiveIcon sx={{ fontSize: "4rem" }} />
              </IconButton>
              <Box textAlign="left">
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ marginBottom: "0.5rem" }}
                >
                  Lorem ipsum dolor sit consectetur
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ display: "block", marginTop: "0.5rem" }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt quisquam nisi saepe tempora nam magnam expedita .
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Testimonial;
