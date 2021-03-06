import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "./constants";

const Content = () => {
  const getCoffeeMakerCard = coffeeMakerObj => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {coffeeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
    </Grid>
  );
};

export default Content;