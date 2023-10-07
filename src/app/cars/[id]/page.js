"use client";
import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Typography, Paper, Box, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import styles from "./cars.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import CallIcon from "@mui/icons-material/Call";

const page = ({ params, searchParams }) => {
  const carId = params.id;
  const { year, state, brand } = searchParams;
  const [carData, setCarData] = React.useState([]);
  const [activeSlide, setActiveSlide] = React.useState(null);

  const fetchData = async (page) => {
    const response = await fetch(
      `https://carautong.pythonanywhere.com/api/adverts`
    );

    const data = await response.json();
    return data;
  };

  React.useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData(1);
      setCarData(
        data?.adverts?.find(
          (car) => JSON.stringify(car.id) === JSON.stringify(carId)
        )
      );
    };

    fetchDataAndSetState();
  }, []);

  console.log(`data: ${carData}`);

  const imgUrl = "https://carautong.pythonanywhere.com";

  const toggleActive = (slide) => {
    setActiveSlide(slide);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#D9D9D9",
    border: "2px solid #000",
    borderRadius: ".5rem",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container
      sx={{
        width: "100%",
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <Box
        sx={{
          marginBottom: "-2.5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.3125rem" },
            letterSpacing: "0.65",
            fontWeight: 500,
            fontFamily: "DM Sans",
          }}
        >{`${year} ${carData?.title}`}</Typography>
        <Typography
          sx={{
            backgroundColor: `${
              carData?.is_active ? "rgba(35, 55, 2, 0.49)" : "#DD0808"
            }`,
            color: "#fff",
            padding: "3px",
            borderRadius: "0.8125rem",
            fontSize: "0.875rem",
            fontWeight: 300,
            p: 1,
          }}
        >
          {carData?.is_active ? "Available" : "Sold"}
        </Typography>
      </Box>
      <Card
        sx={{
          maxWidth: "100%",
        }}
      >
        <Box
          // component="img"
          // alt="green iguana"
          // height="400"
          // image={`${imgUrl}${carData?.thumbnail}`}
          sx={{
            position: "relative",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(47, 68, 13, 0.14)",
          }}
        >
          <img
            src={`${imgUrl}${activeSlide?.image || carData?.thumbnail}`}
            style={{
              position: "absolute",
              top: "0",
              width: { xs: "80%", md: "60%" },
              height: "100%",
              padding: "1rem",
              borderRadius: "1.8rem",
            }}
          />
          <ul className={styles.slider_nav}>
            {carData?.images?.map((slide, index) => (
              <li
                className={`${styles.nav_btn} ${
                  activeSlide === slide ? `${styles.active}` : ""
                }`}
                onClick={() => {
                  toggleActive(slide);
                }}
              ></li>
            ))}
          </ul>
        </Box>
        <Box className>
          <Rating
            name="customized-10"
            defaultValue={0}
            max={1}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            sx={{
              position: "absolute",
              right: { xs: "8%", md: "12%" },
              top: "19%",
              backgroundColor: "#D9D9D9",
              p: 1,
              filter: "drop-shadow(0px 4px 4px rgba(237, 237, 237, 0.25))",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Card>

      <Box>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              backgroundColor: `${carData?.is_active ? "#6B6B6B" : "#DD0808"}`,
              color: "#fff",
              padding: "3px",
              borderRadius: "0.5125rem",
              fontSize: "0.875rem",
              fontWeight: 300,
              p: 1,
              marginBottom: "2rem",
              width: "100px",
              textAlign: "center",
            }}
          >
            {brand}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#6B6B6B",
              fontFamily: "Poppins",
              fontSize: "0.875rem",
              fontWeight: 300,
              letterSpacing: "0.04375rem",
            }}
          >
            {carData?.description}
          </Typography>
        </Box>

        {/* car details */}

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ marginY: "2rem" }}
        >
          Details
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "4rem",
            marginBottom: "1.2rem",
            flexWrap: { xs: "wrap" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ".8rem",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              <LocationOnIcon sx={{ fontSize: "2rem" }} />
              <Typography>{state}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ".7rem",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              <DirectionsCarIcon />
              <Typography>No accidents</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ".7rem",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              <LocalGasStationIcon />
              <Typography>{carData?.fuel_type}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ".8rem",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              <EmojiTransportationIcon />
              <Typography>{brand}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ".8rem",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              <DirectionsCarIcon />
              <Typography>No accidents</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ".8rem",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              <DirectionsCarIcon />
              <Typography>No accidents</Typography>
            </Box>
          </Box>
          <Box sx={{ marginLeft: "auto", marginRight: "24rem" }}>
            <Typography sx={{ fontSize: "1.4rem", color: "grey" }}>
              List price
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: ".3rem",
                justifyContent: "start",
                alignItems: "center",
                marginBottom: "2rem",
                marginTop: "1rem",
              }}
            >
              <Image
                src={"/nigeria-naira-currency-symbol-svgrepo-com.svg"}
                width={18}
                height={18}
              />
              <Typography>{carData?.price}</Typography>
            </Box>
            <div style={{ width: "100%" }}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  width: "20rem",
                  borderRadius: ".6rem",
                  backgroundColor: "#233702",
                }}
                onClick={handleOpen}
              >
                Get Seller Details
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Contact Seller
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: ".3rem",
                    }}
                  >
                    <CallIcon />
                    09066954221
                  </Typography>
                </Box>
              </Modal>
            </div>
          </Box>
        </Box>
        <Box sx={{ marginTop: "2rem" }}>
          <Button
            size="small"
            variant="contained"
            sx={{ color: "#000", textTransform: "capitalize" }}
          >
            Share
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default page;
