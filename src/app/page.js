"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import { Box, Container, Button, Typography, Divider } from "@mui/material";
import Adverts from "./components/Adverts";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Footer from "./components/Footer";

// const getData = async () => {
//   const response = await fetch(
//     "https://carautong.pythonanywhere.com/api/adverts"
//   );
//   const data = await response.json();
//   console.log(data);
// };

export default function Home({}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  // getData();

  const fetchData = async (page) => {
    const response = await fetch(
      `https://carautong.pythonanywhere.com/api/adverts?page=${page}&page-size=9`
    );

    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      setLoading(true);
      const data = await fetchData(1);
      setPageData(data?.adverts);
      setLoading(false);
    };

    fetchDataAndSetState();
  }, []);

  useEffect(() => {
    console.log("Page rendered");
    setLoading(false);
  }, [pageData]);

  const handleChange = async (value) => {
    setLoading(true);
    const data = await fetchData(value);
    setPageData(data?.adverts);
    setCurrentPage(value);
    console.log(pageData);
    // setCurrentPage(value);
    setLoading(false);
  };

  console.log(pageData.length);

  return (
    <div className={styles.main}>
      <Box sx={{ width: "100%", mx: 0 }}>
        {loading === false ? (
          <Divider
            sx={{
              backgroundColor: `${pageData.length === 0 ? "red" : "#ecf3e7"}`,
              height: "4px",
            }}
          />
        ) : (
          <LinearProgress color="inherit" />
        )}

        <Hero
          setPageData={setPageData}
          setSearch={setSearch}
          setLoading={setLoading}
        />
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
                fontSize: { xs: "1.7rem", md: "1.7875rem" },
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
              width: { xs: "100%", lg: "35%" },
              height: "2.8rem",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) ",
              backgroundColor: "rgba(220, 171, 47, 0.84)",
            }}
            href="/#"
          >
            Get Started
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "4rem",
          }}
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

          <Divider className={styles.under_stroke} sx={{ mx: "auto" }} />

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
