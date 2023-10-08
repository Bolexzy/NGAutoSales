"use client";
import { Container, Box, Typography, Divider } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "2.4rem",
        px: "3rem",
        gap: "3rem",
      }}
    >
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", lg: "2.1875rem" },
            fontFamily: "DM Sans",
            letterSpacing: "0.21875rem",
            fontWeight: 500,
          }}
        >
          FAQs
        </Typography>
        <Divider
          sx={{
            mx: "auto",
            backgroundColor: "#6b6b6b",
            width: "50%",
            height: "3px",
            borderRadius: "1rem",
            my: ".7rem",
          }}
          data-aos="zoom-in-up"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
        data-aos="fade-left"
      >
        <Typography
          sx={{
            fontSize: ".9125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >
          Q: What is NGAutoSales?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.575rem", lg: "0.775rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          A: ngautosales is a pioneering online marketplace for automotive
          transactions in Nigeria. We connect consumers with Certified Dealers,
          offering a comprehensive inventory of new, used, and certified
          pre-owned vehicles. Our platform empowers users with research and
          tools to confidently make informed decisions.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
        data-aos="fade-left"
      >
        <Typography
          sx={{
            fontSize: ".9125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >
          Q: How is ngautosales different from other platforms?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.575rem", lg: "0.775rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          A: ngautosales stands out by providing a modern-day marketplace that
          makes car buying and selling easy, convenient, and transparent. We are
          committed to bringing more of the transaction online, offering a
          personalized shopping experience customized to individual preferences.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
        data-aos="fade-left"
      >
        <Typography
          sx={{
            fontSize: ".9125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >
          Q: What types of vehicles are available on ngautosales?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.575rem", lg: "0.775rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          A: ngautosales features a diverse inventory, including new, used, and
          certified pre-owned vehicles. Whether you're looking for a
          budget-friendly option at $6,000 or a premium vehicle at $60,000, we
          cater to a wide range of preferences and budgets.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
        data-aos="fade-left"
      >
        <Typography
          sx={{
            fontSize: ".9125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >
          Q: Can I trust the Certified Dealers on ngautosales?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.575rem", lg: "0.775rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          A: Yes, ngautosales partners with Certified Dealers to ensure a
          reliable and trustworthy experience for our users. Our network of
          Certified Dealers undergoes a rigorous selection process, offering
          peace of mind to buyers and sellers alike.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
        data-aos="fade-left"
      >
        <Typography
          sx={{
            fontSize: ".9125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >
          Q: How does ngautosales use technology to enhance the car buying
          experience?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.575rem", lg: "0.775rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          A: We leverage a world-class technology platform that provides more
          access, more choice, and more control to users. From initial discovery
          to final delivery, our platform offers a seamless and user-friendly
          experience, redefining the car buying journey.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
        data-aos="fade-left"
      >
        <Typography
          sx={{
            fontSize: ".9125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >
          Q: Is there a one-size-fits-all solution on ngautosales?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.575rem", lg: "0.775rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          A: No, ngautosales understands that car buying is a personal
          experience. Whether it's your first or fourteenth time purchasing a
          car, we tailor the shopping experience to individual preferences. Our
          platform accommodates diverse budgets and preferences.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
        data-aos="fade-left"
      >
        <Typography
          sx={{
            fontSize: ".9125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >
          Q: How does ngautosales prioritize customer experience?{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.575rem", lg: "0.775rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          A: Customer experience is a top priority at ngautosales. We have a
          dedicated team focused on ensuring a positive and seamless journey for
          both buyers and dealers. Our commitment to customer satisfaction sets
          us apart in the automotive industry.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
        data-aos="fade-left"
      >
        <Typography
          sx={{
            fontSize: ".9125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >
          Q: Can I sell my car on ngautosales?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.575rem", lg: "0.775rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          A: Yes, ngautosales provides a platform for individuals to sell their
          cars. Our user-friendly interface and extensive network of buyers make
          the selling process convenient and transparent.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
        data-aos="fade-left"
      >
        <Typography
          sx={{
            fontSize: ".9125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >
          Q: What sets ngautosales apart in the Nigerian automotive market?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.575rem", lg: "0.775rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          A: ngautosales is at the forefront of transforming the automotive
          landscape in Nigeria. Our commitment to innovation, transparency, and
          a personalized experience distinguishes us as a leader in the
          industry.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
        data-aos="fade-left"
      >
        <Typography
          sx={{
            fontSize: ".9125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >
          How can I get started on ngautosales?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.575rem", lg: "0.775rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          A: To get started, simply visit our platform and explore our extensive
          inventory. Whether you're buying or selling, ngautosales offers a
          straightforward and user-friendly process to meet your automotive
          needs.
        </Typography>
      </Box>
    </Container>
  );
};

export default Faq;
