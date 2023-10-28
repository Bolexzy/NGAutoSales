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
          backgroundColor: "#E1E5E1",
          justifyContent: "center",
          alignItems: "center",
          height: "49px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            gap: { xs: "1rem", sm: "3rem", lg: "8rem" },
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
              fontSize: { xs: "1.0625rem", sm: "1.3rem", md: "1.6rem" },
              my: 4,
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

          <Box
            sx={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                color: "#596B5B",
                fontFamily: "DM Sans",
                fontSize: { xs: "1.0475rem", md: "1.8rem" },
                fontWeight: 600,
                letterSpacing: ".17281rem",
              }}
            >
              NGAutoSales
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: ".53763rem",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              Nigeria’s Best Online Car Dealer
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: ".8rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                order: { xs: "2", sm: "0" },
                marginBottom: "1.5rem",
              }}
            >
              <Box sx={{ display: "flex", gap: ".4rem", marginTop: "1.5rem" }}>
                <Image src={"/dot.svg"} width={12} height={12} />
                <Typography
                  sx={{
                    color: "1C1915",
                    fontFamily: "Poppins",
                    fontSize: { xs: ".48875rem", md: ".7rem" },
                    fontWeight: 400,
                    letterSpacing: ".08063rem",
                  }}
                >
                  Personalized Recommendations
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: ".4rem", marginTop: "1rem" }}>
                <Image src={"/dot.svg"} width={12} height={12} />
                <Typography
                  sx={{
                    color: "1C1915",
                    fontFamily: "Poppins",
                    fontSize: { xs: ".48875rem", md: ".7rem" },
                    fontWeight: 400,
                    letterSpacing: ".08063rem",
                  }}
                >
                  Real-time Inventory Updates
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: ".4rem", marginTop: "1rem" }}>
                <Image src={"/dot.svg"} width={12} height={12} />
                <Typography
                  sx={{
                    color: "1C1915",
                    fontFamily: "Poppins",
                    fontSize: { xs: ".48875rem", md: ".7rem" },
                    fontWeight: 400,
                    letterSpacing: ".08063rem",
                  }}
                >
                  Mobile Test Drive Scheduling
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: ".4rem", marginTop: "1rem" }}>
                <Image src={"/dot.svg"} width={12} height={12} />
                <Typography
                  sx={{
                    color: "1C1915",
                    fontFamily: "Poppins",
                    fontSize: { xs: ".48875rem", md: ".7rem" },
                    fontWeight: 400,
                    letterSpacing: ".08063rem",
                  }}
                >
                  AI-Powered Vehicle Recommendations
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "300px", sm: "350px", md: "550px" },
                height: { xs: "200px", sm: "200px", md: "341px" },
              }}
            >
              <Image
                src={"/jeep.png"}
                width={100}
                height={100}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "1.0625rem", sm: "1.3rem", md: "1.6rem" },
              my: 4,
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: 500,
              letterSpacing: "0.15938rem",
              fontStyle: "italic",
            }}
          >
            Why Choose Us?
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "351px",
                height: "50px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "8px",
                backgroundColor: "#E1E5E1",
                m: 1,
              }}
            >
              <Image src={"/dollar.svg"} width={28} height={28} alt="dollar" />
              <Typography
                sx={{
                  color: "#596B5B",
                  fontFamily: "DM Sans",
                  fontSize: "12.078px",
                  fontWeight: 500,
                  letterSpacing: "0.862px",
                }}
              >
                Best Prices In Town
              </Typography>
            </Box>
            <Box
              sx={{
                width: "351px",
                height: "50px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "8px",
                backgroundColor: "#E1E5E1",
                m: 1,
              }}
            >
              <Image src={"/quality.svg"} width={28} height={28} alt="dollar" />
              <Typography
                sx={{
                  color: "#596B5B",
                  fontFamily: "DM Sans",
                  fontSize: "12.078px",
                  fontWeight: 500,
                  letterSpacing: "0.862px",
                }}
              >
                Quality Assurance
              </Typography>
            </Box>
            <Box
              sx={{
                width: "351px",
                height: "50px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "8px",
                backgroundColor: "#E1E5E1",
                m: 1,
              }}
            >
              <Image src={"/offer.svg"} width={28} height={28} alt="dollar" />
              <Typography
                sx={{
                  color: "#596B5B",
                  fontFamily: "DM Sans",
                  fontSize: "12.078px",
                  fontWeight: 500,
                  letterSpacing: "0.862px",
                }}
              >
                Great Offers
              </Typography>
            </Box>
            <Box
              sx={{
                width: "351px",
                height: "50px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "8px",
                backgroundColor: "#E1E5E1",
                m: 1,
              }}
            >
              <Image src={"/trust.svg"} width={28} height={28} alt="dollar" />
              <Typography
                sx={{
                  color: "#596B5B",
                  fontFamily: "DM Sans",
                  fontSize: "12.078px",
                  fontWeight: 500,
                  letterSpacing: "0.862px",
                }}
              >
                Trusted By Thousands
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Typography
              sx={{
                color: "#596B5B",
                fontFamily: "DM Sans",
                fontSize: "15.038px",
                fontWeight: 500,
                letterSpacing: "1.239px",
                mt: 1,
              }}
            >
              Get Instant Offer - List for Free
            </Typography>
            <button
              style={{
                width: "40%",
                height: "40.043px",
                borderRadius: "7.391px",
                backgroundColor: "#947119",
                color: "#F4F4F4",
                fontSize: "10.732px",
                letterSpacing: "1.16px",
              }}
            >
              Get Started
            </button>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "1.0625rem", sm: "1.3rem", md: "1.6rem" },
              my: 8,
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: 500,
              letterSpacing: "0.15938rem",
              fontStyle: "italic",
            }}
          >
            Our Latest News
          </Typography>
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            coming soon....
          </p>
        </Box>
      </Container>
    </div>
  );
}
