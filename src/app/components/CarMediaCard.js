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
      sx={{
        maxWidth: 250,
        height: "auto",
        mineHeight: "200px",
        borderRadius: "0.5rem",
        backgroundColor: "#F4F4F4",
      }}
      className={styles.paper}
    >
      <Link
        sx={{ textDecoration: "none", color: "inherit" }}
        href={`/cars/${data?.id}?year=${year}&state=${state}&brand=${brand}&city=${city}`}
        as={`/cars/${data?.id}?year=${year}&state=${state}&brand=${brand}&city=${city}`}
      >
        <Card
          sx={{
            borderRadius: "inherit",
            backgroundColor: "#F4F4F4",
            padding: ".4rem",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            src={`${imgUrl}${data?.thumbnail}`}
            sx={{ position: "relative", borderRadius: "8px 8px 0px 0px" }}
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
                gap: "10px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "0.75rem",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  letterSpacing: "0.12375rem",
                }}
              >
                {data?.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".3rem",
                  width: "6rem",
                  height: "auto",
                  padding: ".1rem",
                  fontWeight: 500,
                  backgroundColor: "#615647",
                  fontFamily: "Inter",
                  color: "#E1E5E1",
                  letterSpacing: "0.07988rem",
                  border: "1px solid #891C04",
                  borderRadius: "0.125rem",
                }}
              >
                {/* {year} */}
                <Image
                  src={"/nigeria-naira-currency-symbol-svgrepo-com.svg"}
                  width={8}
                  height={8}
                  style={{ marginRight: "" }}
                />
                <Typography
                  sx={{
                    fontSize: "0.48413rem",
                    fontWeight: 500,
                    fontFamily: "Inter",
                    color: "#E1E5E1",
                    letterSpacing: "0.07988rem",
                  }}
                >
                  {parseFloat(data?.price).toLocaleString("en-US")}
                </Typography>
              </Box>
            </div>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "0.5rem",
                fontWeight: 400,
                letterSpacing: "0.0825rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                color: "#94A195",
                fontFamily: "DM Sans",
                marginTop: ".5rem",
              }}
              className={styles.description}
            >
              {data?.description}
            </Typography>

            <Divider sx={{ backgroundColor: "#615647", my: "0.5rem" }} />

            <Box
              sx={{
                display: "flex",
                gap: ".4rem",
                alignItems: "center",
                overflow: "scroll",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".2rem",
                  alignItems: "center",
                  // marginTop: "1rem",
                  color: "#94A195",
                }}
              >
                {/* <LocalOfferIcon sx={{ marginRight: ".2rem" }} /> */}
                <EmojiTransportationIcon sx={{ fontSize: "0.88119rem" }} />
                <Typography
                  sx={{
                    fontFamily: "DM Sans",
                    fontSize: "0.38119rem",
                    fontWeight: 400,
                    letterSpacing: "0.06288rem",
                    color: "#94A195",
                  }}
                >
                  {brand}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".2rem",
                  alignItems: "center",
                  // marginTop: "1rem",
                  fontSize: "0.38119rem",
                  color: "#94A195",
                }}
              >
                <LocationOnIcon sx={{ fontSize: "0.88119rem" }} />
                <Typography
                  sx={{
                    fontFamily: "DM Sans",
                    fontSize: "0.38119rem",
                    fontWeight: 400,
                    letterSpacing: "0.06288rem",
                    color: "#94A195",
                  }}
                >
                  {state}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".2rem",
                  alignItems: "center",
                  // marginTop: "1rem",
                  fontSize: "0.38119rem",
                  color: "#94A195",
                }}
              >
                <DirectionsCarIcon sx={{ fontSize: ".88119rem" }} />
                <Typography
                  sx={{
                    fontFamily: "DM Sans",
                    fontSize: "0.38119rem",
                    fontWeight: 400,
                    letterSpacing: "0.06288rem",
                    color: "#94A195",
                  }}
                >
                  Automatic
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".2rem",
                  alignItems: "center",
                  // marginTop: "1rem",
                  color: "#94A195",
                }}
              >
                <LocalGasStationIcon sx={{ fontSize: ".88119rem" }} />
                <Typography
                  sx={{
                    fontFamily: "DM Sans",
                    fontSize: "0.38119rem",
                    fontWeight: 400,
                    letterSpacing: "0.06288rem",
                    color: "#94A195",
                  }}
                >
                  {data?.fuel_type}
                </Typography>
              </Box>
            </Box>
          </CardContent>

          <CardActions
            sx={{ marginTop: "auto", justifySelf: "flex-end" }}
            className={styles.actions}
          >
            <Button
              size="small"
              sx={{
                color: "#13591A",
                fontSize: "0.35938rem",
                letterSpacing: "0.01256rem",
                fontFamily: "Inter",
                width: "3rem",
              }}
            >
              Show Details
            </Button>
          </CardActions>
        </Card>
      </Link>
    </Paper>
  );
};

export default CarMediaCard;
