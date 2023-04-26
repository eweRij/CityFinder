import {
  handleErrorToast,
  handleSuccessToast,
} from "../shared/utils/handleToast";
import axios from "./axios";

const findCityByName = async (query) => {
  return await axios.get(`?name=${query}`).then(({ data }) => data[0]);
};

const findCityByProvince = async (province) => {
  return await axios.get(`?voivodeship=${province}`).then(({ data }) => data);
};

const addCity = async (city) => {
  const { name, voivodeship, picture_url, description, known_places, links } =
    city;
  return await axios
    .post("", {
      name,
      voivodeship,
      picture_url,
      description,
      known_places: known_places.split(","),
      links: links.split(","),
    })
    .then(() => handleSuccessToast())
    .catch(() => handleErrorToast());
};

const editCity = async (id, city) => {
  const { name, voivodeship, picture_url, description, known_places, links } =
    city;
  return await axios
    .put(`/${id}`, {
      id,
      name,
      voivodeship,
      picture_url,
      description,
      known_places: known_places.split(","),
      links: links.split(","),
    })
    .then(() => handleSuccessToast())
    .catch(() => handleErrorToast());
};

const deleteCity = async (id) => {
  return await axios.delete(`/${id}`);
};

export { findCityByName, findCityByProvince, addCity, editCity, deleteCity };
