import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        gap: "6rem",
        fontFamily: "Poppins",
        backgroundColor: "#071502",
        justifyContent: "center",
        alignItems: "start",
        minWidth: "100vw",
        py: "4rem",
        marginTop: "4rem",
        paddingX: "26rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "1.675rem",
            fontWeight: 500,
            letterSpacing: "0.04375rem",
          }}
        >
          NGAutoSales
        </Typography>
        © 2023 All rights reserved.
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Link
          style={{
            color: "#6B6B6B",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.04375rem",
            textDecoration: "underline",
          }}
          href="/About"
        >
          About Us
        </Link>

        <Link
          style={{
            color: "#6B6B6B",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.04375rem",
            textDecoration: "underline",
          }}
          href="/#"
        >
          Terms Of Use
        </Link>
        <Link
          style={{
            color: "#6B6B6B",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.04375rem",
            textDecoration: "underline",
          }}
          href="/#"
        >
          Privacy Policy
        </Link>
        <Link
          style={{
            color: "#6B6B6B",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.04375rem",
            textDecoration: "underline",
          }}
          href="/#"
        >
          Latest News
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Link
          style={{
            color: "#6B6B6B",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.04375rem",
            textDecoration: "underline",
          }}
          href="/Faq"
        >
          FAQs
        </Link>
        <Link
          style={{
            color: "#6B6B6B",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.04375rem",
            textDecoration: "underline",
          }}
          href="/Faq"
        >
          Contact Us
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Link
          style={{
            color: "#6B6B6B",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.04375rem",
            textDecoration: "underline",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
          href="/Faq"
        >
          <TwitterIcon />
          twitter
        </Link>
        <Link
          style={{
            color: "#6B6B6B",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.04375rem",
            textDecoration: "underline",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
          href="/Faq"
        >
          <InstagramIcon />
          Instagram
        </Link>
        <Link
          style={{
            color: "#6B6B6B",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.04375rem",
            textDecoration: "underline",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
          href="/Faq"
        >
          <LinkedInIcon />
          LinkedIn
        </Link>
      </Box>
    </Container>
  );
};

export default Footer;
