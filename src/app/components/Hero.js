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
  Link,
  TextField
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
        position: "relative",
      }}
      data-aos="zoom-in"
    >
      <Box className={styles.hero_bg}>
      <Box>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: { xs: "1.78156rem", md: "2.1875rem" },
            textAlign: "left",
            letterSpacing: {xs: '0.29394rem', lg: '4.3px'},
            fontStyle: "italic",
            zIndex: '999',
            maxWidth: '350px',
            color: "#1C1915",
          }}
        >
          Lets find your perfect car
        </Typography>
        </Box>
        <Box sx={{position: "absolute", right: '-10%', top: '15%'}}>
          <Image src={'/honda.png'} width={339} height={145} alt="honda"/>
        </Box>
        </Box>
      {/* <Box style={bgImageStyle} sx={{height: 'auto'}}></Box> */}
      {/* <Image src={`${Slides[currentSlide].url}`} width={300} height={300} alt="Car slides" 
      style={{
        position: "absolute", left: 0, 
      zIndex: 0, width: "100%", height: "100%", 
      objectFit: "cover",
      backgroundColor: "linear-gradient(rgba(47, 68, 13, 0.5), rgba(47, 68, 13, 0.5))",
      opacity: .9}} /> */}
      <Box className={styles.hero_content} >
        

        <form  onSubmit={(e) => {e.preventDefault(); handleSearch(e)}} style={{width: "100%"}} >
        <TextField label="Find your next car..." variant="standard" name="search_query" id="search_query" sx={{width: "100%"}}/>
          {/* <InputBase
            sx={{ flex: 1 }}
            fullWidth
            placeholder="Find your next car..."
            inputProps={{ "aria-label": "search google maps" }}
            name="search_query"
            id="search_query"
          /> */}
          {/* <IconButton
            type="Submit"
            sx={{ p: "8px", alignSelf: "flex-end" }}
            aria-label="search"
            value="Submit"
          >
            <SearchIcon />
          </IconButton> */}
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
              <Grid container spacing={1} sx={{width: '100%', maxWidth: '400px', justifyContent: 'center'}}>
                <Grid item xs={12} md={6}>
                  <FormControl
                    sx={{
                      maxWidth: {xs: '100%', md: 200},
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
                    <InputLabel  id="search-brand" sx={{fontFamily: "Inter", fontSize: "0.76719rem", letterSpacing: "0.09356rem"}}>Brand</InputLabel>
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
                <Grid item xs={12} md={6}>
                  <FormControl
                    sx={{
                      maxWidth: {xs: '100%', md: 200},
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
                    <InputLabel id="search-model" sx={{fontFamily: "Inter", fontSize: "0.76719rem", letterSpacing: "0.09356rem"}}>Model</InputLabel>
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
                <Grid item xs={12} md={6}>
                  <FormControl
                    sx={{
                      maxWidth: {xs: '100%', md: 200},
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
                    <InputLabel id="search-location" sx={{fontFamily: "Inter", fontSize: "0.76719rem", letterSpacing: "0.09356rem"}}>Location</InputLabel>
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
                <Grid item xs={12} md={6}>
                  <FormControl
                    sx={{
                      maxWidth: {xs: '100%', md: 200},
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
                    <InputLabel id="search-year" sx={{fontFamily: "Inter", fontSize: "0.76719rem", letterSpacing: "0.09356rem"}}>Year</InputLabel>
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
                <Grid item xs={6} md={6}>
                  <Button
                    type="submit"
                    value="Submit"
                    variant="contained"
                    color="success"
                    sx={{
                      width: "5.3125rem", height: '1.8125rem', fontSize: '.5rem', paddingX: '4px',
                      fontStyle: "italic",
                      borderRadius: "0.3125rem", backgroundColor: "#947119",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                      fontFamily: "Inter",  fontWeight: 500, letterSpacing: "0.04906rem",
                      textTransform: "capitalize",
                      color: "#F4F4F4"
                  }}
                  className={styles.btn}
                  >
                    Shop New
                  </Button>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Button
                    type="submit"
                    value="Submit"
                    variant="contained"
                    sx={{
                      width: "5.3125rem", height: '1.8125rem', fontSize: '.5rem', paddingX: '4px',
                      fontStyle: "italic",
                      borderRadius: "0.3125rem", backgroundColor: "#1C1915",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                      fontFamily: "Inter",  fontWeight: 500, letterSpacing: "0.04906rem",
                      textTransform: "capitalize",
                      color: "#F4F4F4"
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

        {/* <Box sx={{display: 'flex', gap: '2rem', textAlign: 'left', alignContent: 'flex-end', mt: 2, mb: 0, zIndex: '999'}}>
          <Link href='/#' sx={{fontSize: '14px', fontFamily: "Poppins", fontWeight: 300, letterSpacing: "0.7px", color: "#fff", textDecorationColor: '#D9D9D9'}}>Contact Us</Link>
          <Link href='/#'sx={{fontSize: '14px', fontFamily: "Poppins", fontWeight: 300, letterSpacing: "0.7px", color: "#fff", textDecorationColor: '#D9D9D9'}}>Cars for Rent</Link>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Hero;
