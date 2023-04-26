import { Grid } from "@mui/material";

import Sidebar from "../../shared/components/Sidebar";
import CityForm from "../CityForm/CityForm";

const AddCity = () => {
  return (
    <Grid container sx={{height:"100vh"}}>
      <Grid item xs={4} sm={4} md={4}>
        <Sidebar />
      </Grid>
      <Grid item xs={8} sm={8} md={8}>
        <CityForm
          title="Dodaj nowe miasto"
          buttonTitle="Dodaj nowe miasto"
          city={{
            id:"",
            name: "",
            voivodeship: 0,
            description: "",
            links: "",
            picture_url: "",
            known_places: "",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AddCity;
