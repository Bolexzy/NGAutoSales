"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Paper, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import styles from "./CardMediaCard.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import ImageSlides from "../../data";
import { styled } from "@mui/system";
import Divider from "@mui/material/Divider";
import Image from "next/image";

const CarMediaCard = ({ data }) => {
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [state, setState] = useState("");
  const [brand, setBrand] = useState("");
  const [city, setCity] = useState("");

  const imgUrl = "https://carautong.pythonanywhere.com";

  const fetchProp = async (prop, id) => {
    try {
      const response = await fetch(
        `https://carautong.pythonanywhere.com/api/${prop}`
      );
      const data = await response.json();
      const result = data?.find(
        (data) => JSON.stringify(data.id) === JSON.stringify(id)
      );

      if (prop === "models") {
        setModel(result.name);
      } else if (prop === "years") {
        setYear(result.year);
      } else if (prop === "states") {
        setState(result.name);
      } else if (prop === "brands") {
        setBrand(result.name);
      } else if (prop === "cities") {
        setCity(result.name);
      }

      return result;
    } catch (err) {
      console.log(`Property fetch error: ${err}`);
    }
  };

  fetchProp("years", data?.year);
  fetchProp("models", data?.model);
  fetchProp("states", data?.state);
  fetchProp("brands", data?.brand);
  fetchProp("cities", data?.city);

  return (
    <Paper
      elevation={4}
      sx={{ maxWidth: 300, height: "auto" }}
      className={styles.paper}
    >
      <Link
        sx={{ textDecoration: "none", color: "inherit" }}
        href={`/cars/${data?.id}?year=${year}&state=${state}&brand=${brand}&city=${city}`}
        as={`/cars/${data?.id}?year=${year}&state=${state}&brand=${brand}&city=${city}`}
      >
        <Card sx={{ width: 300, height: "100%" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            src={`${imgUrl}${data?.thumbnail}`}
            sx={{ position: "relative" }}
            className={styles.image_thumbnail}
          />
          <Box>
            <Rating
              name="customized-10"
              defaultValue={0}
              max={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              className={styles.rating_icon}
            />
          </Box>

          <CardContent className={styles.content}>
            <div
              style={{
                display: "flex",
                gap: "50px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "1.2rem",
                  fontFamily: "Dm Sans",
                  fontSize: "1.3125rem",
                  fontWeight: 500,
                  letterSpacing: "0.06563rem",
                }}
              >
                {data?.title}
              </Typography>
              <Typography
                sx={{
                  width: "59px",
                  height: "auto",
                  padding: ".3rem",
                  fontSize: ".8rem",
                  fontWeight: 300,
                  backgroundColor: "#D9D9D9",
                  fontFamily: "Poppins",
                  color: "#000",
                  letterSpacing: "0.04375rem",
                  borderRadius: "0.8125rem",
                  textAlign: "center",
                }}
              >
                {year}
              </Typography>
            </div>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: ".875rem",
                fontWeight: 400,
                letterSpacing: "0.04375rem;",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                color: "#6B6B6B",
                fontFamily: "Poppins",
                marginTop: ".5rem",
              }}
              className={styles.description}
            >
              {data?.description}
            </Typography>
            <ul className={styles.ul}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".3rem",
                  alignItems: "center",
                  marginTop: "1rem",
                  fontFamily: "Poppins",
                  fontSize: "0.775rem",
                }}
              >
                {/* <LocalOfferIcon sx={{ marginRight: ".2rem" }} /> */}
                <Image
                  src={"/nigeria-naira-currency-symbol-svgrepo-com.svg"}
                  width={15}
                  height={15}
                  style={{ marginRight: "" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "0.775rem",
                    fontWeight: 400,
                    letterSpacing: "0.04375rem",
                  }}
                >
                  {parseFloat(data?.price).toLocaleString("en-US")}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".3rem",
                  alignItems: "center",
                  marginTop: "1rem",
                  fontFamily: "Poppins",
                  fontSize: "0.775rem",
                }}
              >
                <EmojiTransportationIcon sx={{ marginRight: ".2rem" }} />{" "}
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "0.775rem",
                    fontWeight: 400,
                    letterSpacing: "0.04375rem",
                  }}
                >
                  {brand}
                </Typography>
              </Box>
            </ul>

            <Divider sx={{ marginTop: "1rem" }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ".5rem",
                alignItems: "center",
                marginTop: "1rem",
                fontSize: "0.675rem",
                color: "#6B6B6B",
              }}
            >
              <LocationOnIcon sx={{ fontSize: ".9rem" }} />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "0.675rem",
                  fontWeight: 400,
                  letterSpacing: "0.04375rem",
                }}
              >
                {state}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ".5rem",
                alignItems: "center",
                marginTop: ".4rem",
                fontFamily: "Poppins",
                fontSize: "0.775rem",
                color: "#6B6B6B",
              }}
            >
              <DirectionsCarIcon sx={{ fontSize: ".9rem" }} />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "0.775rem",
                  fontWeight: 400,
                  letterSpacing: "0.04375rem",
                }}
              >
                No accidents
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: ".5rem",
                alignItems: "center",
                marginTop: ".4rem",
                fontFamily: "Poppins",
                fontSize: "0.775rem",
                color: "#6B6B6B",
              }}
            >
              <LocalGasStationIcon sx={{ fontSize: ".9rem" }} />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "0.775rem",
                  fontWeight: 400,
                  letterSpacing: "0.04375rem",
                }}
              >
                {data?.fuel_type}
              </Typography>
            </Box>
          </CardContent>

          <CardActions
            sx={{ marginTop: "auto", justifySelf: "flex-end" }}
            className={styles.actions}
          >
            <Button size="small">Show Details</Button>
          </CardActions>
        </Card>
      </Link>
    </Paper>
  );
};

export default CarMediaCard;
