import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";

const About = () => {
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
      <Box sx={{ marginBottom: "5rem" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", lg: "2.1875rem" },
            fontFamily: "DM Sans",
            letterSpacing: "0.21875rem",
            fontWeight: 500,
          }}
        >
          Revolutionizing Car Buying in Nigeria with NGAutoSales
        </Typography>
        <Divider
          sx={{
            mx: "auto",
            backgroundColor: "#333",
            width: "50%",
            height: "5px",
            borderRadius: "1rem",
            my: ".7rem",
          }}
        />
        <Image
          src={"/Assets/bugatti.jpeg"}
          width={300}
          height={300}
          style={{
            width: { xs: "100%", lg: "85%" },
            marginTop: "2rem",
            borderRadius: "2rem",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
          }}
        >
          Who We Are
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.675rem", lg: "0.875rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "6B6B6B",
          }}
        >
          With a rich history spanning almost two decades, ngautosales has been
          at the forefront of revolutionizing the way consumers engage in
          automotive transactions in Nigeria. As the premier online marketplace
          for new, used, and certified pre-owned vehicles, we have been
          connecting consumers with Certified Dealers, offering an extensive
          inventory and empowering individuals with the research and tools
          needed to confidently make vehicle purchase or lease decisions.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.675rem", lg: "0.875rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "6B6B6B",
          }}
        >
          In collaboration with our network of Certified Dealers, ngautosales
          stands as a pioneer in the industry, providing one of the most
          expansive inventories available. Now, we are taking the next step by
          building a contemporary marketplace that aims to simplify and enhance
          the car buying and selling process. Our goal is to make transactions
          more seamless, convenient, and transparent, ushering in a new era
          where more of the car buying experience happens online. We are
          committed to tailoring the shopping experience to individual
          preferences, recognizing that there is no universal solution when it
          comes to purchasing a car. Whether your budget is $6,000 or $60,000,
          and whether it's your first or fourteenth car purchase, ngautosales
          ensures that car buying is a true and personalized experience for you.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5125rem",
            letterSpacing: "0.06563rem",
            fontWeight: 500,
          }}
        >
          What We Do
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.675rem", lg: "0.875rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "6B6B6B",
          }}
        >
          At ngautosales, we are redefining the car buying experience to align
          with the desires of our users—flexible, convenient, and tailored to
          their unique lifestyles. Our approach involves facilitating
          connections between consumers and dealers through a cutting-edge
          technology platform. This platform provides unprecedented access,
          choice, and control throughout the entire car buying journey, from
          initial discovery to the final delivery. By leveraging technology, we
          aim to create a transformative experience that empowers individuals
          and dealers alike, setting a new standard for the automotive industry
          in Nigeria.
        </Typography>
      </Box>

      <Divider
        sx={{
          width: "100%",
          height: "10px",
          marginBottom: "3rem",
          borderRadius: "1rem",
        }}
      />

      <Box sx={{ marginBottom: "3rem" }}>
        <Typography
          sx={{
            fontSize: "1.8875rem",
            fontFamily: "DM Sans",
            letterSpacing: "0.21875rem",
            fontWeight: 500,
          }}
        >
          Meet The Team
        </Typography>
        <Divider
          sx={{
            mx: "auto",
            backgroundColor: "#333",
            width: "10%",
            height: "5px",
            borderRadius: "1rem",
            my: ".7rem",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", lg: "row" },
          alignContent: "center",
          textAlign: "center",
          gap: { xs: "3rem", lg: "5rem" },
          alignItems: "center",
        }}
      >
        <Image
          src={"/Assets/boluwatife.PNG"}
          width={300}
          height={300}
          style={{ borderRadius: "3rem" }}
        />
        <Typography
          sx={{
            fontSize: { xs: "0.675rem", lg: "0.875rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          Boluwatife Oyewumi is the creative force behind ngautosales' user
          interface and experience. His design prowess and attention to detail
          result in an aesthetically pleasing and intuitive platform. Boluwatife
          is dedicated to creating a visually appealing and user-friendly
          environment that enhances the overall experience for our users.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: { xs: "3rem", lg: "5rem" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", lg: "row" },
          alignContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={"/Assets/stanley.jpeg"}
          width={300}
          height={300}
          style={{ borderRadius: "3rem" }}
        />
        <Typography
          sx={{
            fontSize: { xs: "0.675rem", lg: "0.875rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          Stanley Ezechukwu is one of the mastermind behind the ngautosales
          technology stack. As the Lead Developer, he oversees the development
          team, ensuring that our platform remains robust, secure, and
          user-friendly. Stanley's technical expertise and commitment to
          excellence contribute to the success of ngautosales.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: { xs: "3rem", lg: "5rem" },
          justifyContent: "space-between",
          alignContent: "center",
          textAlign: "center",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
        }}
      >
        <Image
          src={"/Assets/eze.jpeg"}
          width={300}
          height={300}
          style={{ borderRadius: "3rem" }}
        />
        <Typography
          sx={{
            fontSize: { xs: "0.675rem", lg: "0.875rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          Taslim Eze is also one of the mastermind behind the ngautosales
          technology stack. As the Lead Developer, he oversees the development
          team, ensuring that our platform remains robust, secure, and
          user-friendly. Eze's technical expertise and commitment to excellence
          contribute to the success of ngautosales.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: { xs: "3rem", lg: "5rem" },
          justifyContent: "space-between",
          alignContent: "center",
          textAlign: "center",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
        }}
      >
        <Image
          src={"/Assets/paschal.jpeg"}
          width={300}
          height={300}
          style={{ borderRadius: "3rem" }}
        />
        <Typography
          sx={{
            fontSize: { xs: "0.675rem", lg: "0.875rem" },
            letterSpacing: "0.04375rem",
            fontWeight: 400,
            color: "#6B6B6B",
            alignSelf: "center",
          }}
        >
          Paschal Okafor as the visionary behind ngautosales, Paschal Okafor
          brings decades of experience in the automotive industry. His
          entrepreneurial spirit and commitment to innovation have been the
          driving force behind the platform's success. Paschal is passionate
          about transforming the car buying experience in Nigeria and creating a
          platform that resonates with users.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
