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
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  // getData();

  const fetchData = async (page) => {
    const response = await fetch(
      `https://carautong.pythonanywhere.com/api/adverts?page=${page}&page-size=4`
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
    // console.log(pageData);
    // setCurrentPage(value);
    setLoading(false);
  };

  // console.log(pageData.length);

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

      <Box
        className={styles.box_wrapper}
        sx={{
          marginTop: "40px",
          backgroundColor: "#596B5B",
          justifyContent: "center",
          alignItems: "center",
          height: "49px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            gap: { xs: "1rem", lg: "24rem" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={"/toyota.svg"} width={60} height={10} alt="toyota" />
          <Image src={"/ford.svg"} width={60} height={20} alt="ford" />
          <Image src={"/kia.svg"} width={35} height={15} alt="kia" />
          <Image src={"/lexus.svg"} width={60} height={10} alt="lexus" />
          <Image src={"/hyundai.svg"} width={32} height={19} alt="hyundai" />
        </Box>
      </Box>
      <Container
        sx={{ my: 4, display: "flex", flexDirection: "column", gap: "100px" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "4rem",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.0625rem", md: "2.1875rem" },
              mb: 4,
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: 500,
              letterSpacing: "0.15938rem",
              fontStyle: "italic",
            }}
          >
            {search === false ? "Recently Added" : "Search Result"}
          </Typography>

          <Divider
            className={styles.under_stroke}
            sx={{ mx: "auto" }}
            data-aos="zoom-in-up"
          />
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
