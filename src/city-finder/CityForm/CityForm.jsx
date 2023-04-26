import { useNavigate } from "react-router-dom";

import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";

import SectionHeader from "../../shared/components/SectionHeader";
import ProvinceSelect from "../ProvinceSelect/ProvinceSelect";
import FormLabel from "../../shared/components/FormLabel";
import ActionButton from "../../shared/components/ActionButton";
import { handleButtonAction } from "./CityForm.helper";
import { validate } from "./CityForm.helper";
import ErrorLabel from "../../shared/components/ErrorLabel";

const CityForm = ({ title, city, buttonTitle }) => {
  const navigate=useNavigate()
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    errors,
  } = useFormik({
    initialValues: {
      id: city.id,
      name: city.name,
      voivodeship: city.voivodeship,
      description: city.description,
      links: city.links,
      picture_url: city.picture_url,
      known_places: city.known_places,
    },
    validate,
    onSubmit: (values) => {
      handleButtonAction(buttonTitle, values,navigate)
    },
  });

  return (
    <Box
      sx={{
        padding: "32px 24px",
        minHeight: "100%",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          justifyContent:"space-between",
          width:"100%",
        }}
      >
        <Box sx={{width:"100%"}}></Box>
        <SectionHeader title={title} />
        <FormLabel title="Nazwa miasta" />
        <TextField
          name="name"
          value={values.name}
          hiddenLabel
          variant="outlined"
          type="text"
          placeholder="Wpisz nazwę miasta"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? <ErrorLabel name={errors.name} /> : null}
        <FormLabel title="Województwo" />
        <ProvinceSelect
          value={values.voivodeship}
          handleChange={handleChange}
        />
        {errors.voivodeship && touched.voivodeship ? <ErrorLabel name={errors.voivodeship} /> : null}
        <FormLabel title="Zdjęcie" />
        <TextField
          name="picture_url"
          value={values.picture_url}
          id="filled-basic"
          hiddenLabel
          variant="outlined"
          type="url"
          placeholder="Wprowadź URL do zdjęcia miasta"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.picture_url && touched.picture_url ? (
          <ErrorLabel name={errors.picture_url} />
        ) : null}
        <FormLabel title="Opis miasta" />
        <TextField
          name="description"
          value={values.description}
          sx={{ minWidth: "50%" }}
          hiddenLabel
          variant="outlined"
          multiline
          minRows={2}
          maxRows={4}
          placeholder="Wpisz opis miasta"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.description && touched.description ? (
          <ErrorLabel name={errors.description} />
        ) : null}
        <FormLabel title="Interesujące linki" />
        <TextField
          name="links"
          value={values.links}
          variant="outlined"
          type="url"
          multiline
          minRows={2}
          maxRows={3}
          placeholder="Wpisz interesujące linki oddzielone przecinkami"
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{ minWidth: "50%" }}
        />
        {errors.links && touched.links ? (
          <ErrorLabel name={errors.links} />
        ) : null}
        <FormLabel title="Znane miejsca" />
        <TextField
          name="known_places"
          value={values.known_places}
          variant="outlined"
          type="text"
          sx={{ minWidth: "50%" }}
          multiline
          minRows={2}
          maxRows={3}
          placeholder="Wpisz znane miejsca oddzielone przecinkami"
          onChange={handleChange}
          onBlur={handleBlur}
        />
              {errors.known_places && touched.known_places ? (
          <ErrorLabel name={errors.known_places} />
        ) : null}
      <Box sx={{ maxWidth: "30%" }}>
      <ActionButton
          type="submit"
          content={buttonTitle}
          justify={true}
          color="white"
          bgColor="black"
        />
      </Box>
      </Box>
    </Box>
  );
};

export default CityForm;
