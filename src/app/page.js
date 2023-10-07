"use client";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import { Box, Container, Button, Typography, Divider } from "@mui/material";
import Adverts from "./components/Adverts";
import Stack from "@mui/material/Stack";

// const getData = async () => {
//   const response = await fetch(
//     "https://carautong.pythonanywhere.com/api/adverts"
//   );
//   const data = await response.json();
//   console.log(data);
// };

export default function Home() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageData, setPageData] = React.useState([]);
  const [search, setSearch] = React.useState(false);
  // getData();

  const fetchData = async (page) => {
    const response = await fetch(
      `https://carautong.pythonanywhere.com/api/adverts?page=${page}&page-size=9`
    );

    const data = await response.json();
    return data;
  };

  React.useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData(1);
      setPageData(data?.adverts);
    };

    fetchDataAndSetState();
  }, []);

  React.useEffect(() => {
    console.log("Page rendered");
  }, [pageData]);

  const handleChange = async (value) => {
    const data = await fetchData(value);
    setPageData(data?.adverts);
    setCurrentPage(value);
    console.log(pageData);
    // setCurrentPage(value);
  };

  return (
    <div className={styles.main}>
      <Box sx={{ width: "100%", mx: 0 }}>
        <Hero setPageData={setPageData} setSearch={setSearch} />
      </Box>
      <Container
        sx={{ my: 4, display: "flex", flexDirection: "column", gap: "100px" }}
      >
        <Box
          className={styles.box_wrapper}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "1rem", lg: "24rem" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "1.7rem", md: "2.1875rem" },
                fontFamily: "DM Sans",
                fontWeight: 500,
                letterSpacing: " 0.06rem",
              }}
            >
              Sell Your Car
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontFamily: "DM Sans",
                fontSize: "0.875rem",
                letterSpacing: "0.05313rem",
                color: "#6B6B6B",
              }}
            >
              Get instant offer - List for Free
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="success"
            sx={{
              width: { xs: "100%", lg: "20rem" },
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) ",
              backgroundColor: "rgba(220, 171, 47, 0.84)",
            }}
            href="/#"
          >
            Get Started
          </Button>
        </Box>

        <Box
          className={styles.featured_cars}
          sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "2.1875rem" },
              mb: 4,
              textAlign: "center",
              fontFamily: "DM Sans",
              fontWeight: 500,
              letterSpacing: "0.21875rem",
            }}
          >
            {search === true ? "Featured Cars" : "Search Data"}
          </Typography>

          <Divider className={styles.under_stroke} />

          <Adverts
            pageData={pageData}
            handleChange={handleChange}
            currentPage={currentPage}
          />
        </Box>
      </Container>
    </div>
  );
}
