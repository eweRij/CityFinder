import { useContext } from "react";

import { Grid } from "@mui/material";

import Sidebar from "../../shared/components/Sidebar";
import CityForm from "../CityForm/CityForm";
import CityContext from "../../shared/context/CityContext";

const EditCity = () => {
  const { city } = useContext(CityContext);
  console.log(city);
  return (
    <Grid container>
      <Grid item xs={4} sm={4} md={4}>
        <Sidebar />
      </Grid>
      <Grid item xs={8} sm={8} md={8}>
        <CityForm
          title="Edytuj miasto"
          buttonTitle="Zapisz"
          city={{
            ...city,
            links: city.links ? city.links.join(",") : "",
            known_places: city.known_places ? city.known_places.join(",") : "",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default EditCity;
