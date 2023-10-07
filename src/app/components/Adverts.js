"use client";
import Pagination from "@mui/material/Pagination";
import React from "react";
import CarMediaCard from "./CarMediaCard";
import { Box, Container, Button, Typography } from "@mui/material";

const Adverts = ({ pageData, handleChange, currentPage }) => {
  // const [allData, setAllData] = React.useState([]);

  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://carautong.pythonanywhere.com/api/adverts"
  //   );
  //   const data = await response.json();
  //   return data;
  // };

  // const paginateData = (data, page, itemsPerPage) => {
  //   const startIndex = (page - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   return data.slice(startIndex, endIndex);
  // };

  // const displayPage = () => {
  //   const paginatedData = paginateData(allData, currentPage, itemsPerPage);
  //   console.log(paginatedData);
  //   // Render the data on your webpage or perform any desired actions
  // };

  // Handle next page button
  // const nextPage = () => {
  //   if (currentPage < Math.ceil(allData.length / itemsPerPage)) {
  //     setCurrentPage(currentPage + 1);
  //     displayPage();
  //   }
  // };

  // // Handle previous page button click
  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //     displayPage();
  //   }
  // };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* <CarMediaCard data={pageData[0]} /> */}
        {pageData?.map((carData) => {
          return <CarMediaCard data={carData} key={carData.id} />;
        })}
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Pagination
          count={10}
          page={currentPage}
          onChange={(e, value) => handleChange(value)}
        />
      </Box>
    </div>
  );
};

export default Adverts;
