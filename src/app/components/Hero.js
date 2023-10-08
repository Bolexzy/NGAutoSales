"use client";
import {useEffect, useState} from "react";
import {
  Box,
  FormControl,
  Typography,
  InputBase,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Grid,
  Link
} from "@mui/material";
import styles from "./Hero.module.css";
import Slides from "../../data";
import SearchIcon from "@mui/icons-material/Search";
import { Margin, SelectAllRounded } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {Search} from "./Search";
import Image from "next/image";



const FormWrapper = styled("div")(
  ({ theme }) => `
  margin: auto;
  maxwidth: 500px;
  padding: ${theme.spacing(3)};
`
);

const Hero = ({setPageData, setSearch, setLoading}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [locations, setLocations] = useState([]);
  const [years, setYears] = useState([]);
  const [brand, setBrand] = useState("");
  // const [model, setModel] = React.useState("");
  // const [location, setLocation] = React.useState("");
  // const [year, setYear] = React.useState("");



  const apiUrl = "https://carautong.pythonanywhere.com/api/years";


  useEffect(() => {
    fetchProp("brands");
    fetchProp("states");
    fetchProp("years");
}, []);

useEffect(() => {
  console.log('Component re-rendered');
}, [models]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide === 7) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentSlide]);



  const fetchProp = async (prop, Brand=brands[0]) => {
    try {
      const response = await fetch(
        `https://carautong.pythonanywhere.com/api/${prop}`
      );
      const data = await response.json();

      if (prop === "brands") {
        setBrands(data);
       } else if (prop === "models" && Brand) {
        const result =  data?.filter(mod =>  {
          return mod.brand === Brand?.id
        });
        setModels(result);
      } else if (prop === "years") {
        setYears(data);
      } else if (prop === "states") {
        setLocations(data);
      }

      return data;
    } catch (err) {
      console.log(`Hero Property fetch error: ${err}`);
    }
  };

  // const bgImageStyle = {
  //   width: "100%",
  //   height: "100%",
  //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Slides[currentSlide].url})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   position: 'absolute',
  //   top: '0',
  //   left: '0',
  //   zIndex: '000',
  //   transition: '0.3s ease'
  // };

  const initialValues = {
    Brand: "",
    Model: "",
    Location: "",
    Year: ""
  };

  const handleSubmit = async (values) => {
      setLoading(true);
    setSearch(true);
    const pageData = await Search(values.Model, values.Location, values.Year, values.search_query);
    setPageData(pageData?.adverts)
  };

  const handleBrandChange =  async (Brand) => {
    if (brand.id !== Brand.id) {
      setBrand(Brand);
      const mods = await fetchProp("models", Brand);
    }
  }

  const handleSearch = (e) => {
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    handleSubmit(form_values)
    e.target.reset();
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        textAlign: "center",
      }}
      className={styles.hero}
      data-aos="zoom-in"
    >
      {/* <Box style={bgImageStyle} sx={{height: 'auto'}}></Box> */}
      <Image src={`${Slides[currentSlide].url}`} width={300} height={300} alt="Car slides" 
      style={{
        position: "absolute", left: 0, 
      zIndex: 0, width: "100%", height: "100%", 
      objectFit: "cover",
      backgroundColor: "linear-gradient(rgba(47, 68, 13, 0.5), rgba(47, 68, 13, 0.5))",
      opacity: .9}} />
      <Box className={styles.hero_content} >
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontWeight: 700,
            fontSize: { xs: "1.4rem", md: "2.1875rem" },
            textAlign: "center",
            letterSpacing: {xs: '.3rem', lg: '4.3px'},
            zIndex: '999',
            maxWidth: '350px'
          }}
        >
          Lets find your perfect car
        </Typography>

        <form className={styles.search_box} onSubmit={(e) => {e.preventDefault(); handleSearch(e)}}>
          <InputBase
            sx={{ flex: 1 }}
            fullWidth
            placeholder="Search Car Makes"
            inputProps={{ "aria-label": "search google maps" }}
            name="search_query"
            id="search_query"
          />
          <IconButton
            type="Submit"
            sx={{ p: "8px", alignSelf: "flex-end" }}
            aria-label="search"
            value="Submit"
          >
            <SearchIcon />
          </IconButton>
        </form>

        <Formik initialValues={...initialValues} onSubmit={(values) => {handleSubmit(values)}}>
        {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
          <Form>
            <FormWrapper>
              <Grid container spacing={1} sx={{width: '100%', maxWidth: '300px', justifyContent: 'center'}}>
                <Grid item xs={6} md={6}>
                  <FormControl
                    sx={{
                      m: 1,
                      maxWidth: {xs: 100, md: 200},
                      //   display: "flex",
                      //   flexWrap: "no-wrap",
                      //   flexDirection: "row",
                      //   gap: "4rem",
                      //   justifyContent: "space-between",
                      flexGrow: 1,
                    }}
                    onSubmit={handleSubmit}
                    fullWidth
                  >
                    <InputLabel  id="search-brand">Brand</InputLabel>
                    <Field name='Brand' as={Select} labelId="search-brand"  label="Brand" className={styles.select_field} >
                      <MenuItem value="Brand">
                        <em>Brands</em>
                      </MenuItem>
                      {
                      brands?.map((brand, index) => (
                        <MenuItem key={index} value={brand} onChange={handleBrandChange(values.Brand)}>
                            {brand.name}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControl
                    sx={{
                      m: 1,
                      maxWidth: {xs: 100, md: 200},
                      //   display: "flex",
                      //   flexWrap: "no-wrap",
                      //   flexDirection: "row",
                      //   gap: "4rem",
                      //   justifyContent: "space-between",
                      flexGrow: 1,
                    }}
                    onSubmit={handleSubmit}
                    fullWidth
                  >
                    <InputLabel id="search-model">Model</InputLabel>
                    <Field name='Model' as={Select} labelId="search-model"  label="Model" className={styles.select_field}>
                      <MenuItem value="all">
                        <em>Models</em>
                      </MenuItem>
                      {
                      models?.map((model) => (
                        <MenuItem value={model.name} onChange={handleChange} key={model.id}>{model.name}</MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControl
                    sx={{
                      m: 1,
                      maxWidth: {xs: 100, md: 200},
                      //   display: "flex",
                      //   flexWrap: "no-wrap",
                      //   flexDirection: "row",
                      //   gap: "4rem",
                      //   justifyContent: "space-between",
                      flexGrow: 1,
                    }}
                    onSubmit={handleSubmit}
                    fullWidth
                  >
                    <InputLabel id="search-location">Location</InputLabel>
                    <Field name='Location' as={Select} labelId="search-location"  label="Location" className={styles.select_field}>
                      <MenuItem value="all">
                        <em>Locations</em>
                      </MenuItem>
                      {
                      locations.map((location) => (
                        <MenuItem value={location.name} key={location.id} onChange={handleChange}>{location.name}</MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControl
                    sx={{
                      m: 1,
                      maxWidth: {xs: 100, md: 200},
                      //   display: "flex",
                      //   flexWrap: "no-wrap",
                      //   flexDirection: "row",
                      //   gap: "4rem",
                      //   justifyContent: "space-between",
                      flexGrow: 1,
                    }}
                    onSubmit={handleSubmit}
                    fullWidth
                  >
                    <InputLabel id="search-year">Year</InputLabel>
                    <Field name='Year' as={Select} labelId="search-year"  label="Year" className={styles.select_field}>
                      <MenuItem value="all">
                        <em>Models</em>
                      </MenuItem>
                      {
                      years.map((year) => (
                        <MenuItem value={year.year} key={year.id} onChange={handleChange}>{year.year}</MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    type="submit"
                    value="Submit"
                    variant="contained"
                    color="success"
                    sx={{
                      width: "125px", height: '40px', fontSize: '14px', paddingX: '4px',
                      borderRadius: "8px", backgroundColor: "rgba(220, 171, 47, 0.84)",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                      fontFamily: "Poppins",  fontWeight: 500, letterSpacing: "1px",
                      textTransform: "capitalize", color: "#fff"
                  }}
                  className={styles.btn}
                  >
                    Shop New
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    type="submit"
                    value="Submit"
                    variant="contained"
                    sx={{
                      width: "125px", height: '40px', fontSize: '14px', paddingX: '4px',
                      borderRadius: "8px", backgroundColor: "rgba(255, 255, 255, 0.84)",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                      fontFamily: "Poppins",  fontWeight: 500, letterSpacing: "1px",
                      textTransform: "capitalize",
                      color: "#9F750B"
                  }}
                  className={styles.btn}
                  >
                    Shop Used
                  </Button>
                </Grid>
              </Grid>
             
            </FormWrapper>
          </Form>
      )}
        </Formik>

        <Box sx={{display: 'flex', gap: '2rem', textAlign: 'left', alignContent: 'flex-end', mt: 2, mb: 0, zIndex: '999'}}>
          <Link href='/#' sx={{fontSize: '14px', fontFamily: "Poppins", fontWeight: 300, letterSpacing: "0.7px", color: "#fff", textDecorationColor: '#D9D9D9'}}>Contact Us</Link>
          <Link href='/#'sx={{fontSize: '14px', fontFamily: "Poppins", fontWeight: 300, letterSpacing: "0.7px", color: "#fff", textDecorationColor: '#D9D9D9'}}>Cars for Rent</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
