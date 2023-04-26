import { addCity, editCity } from "../../services/api";

export const handleButtonAction = (buttonTitle, city, navigate) => {
  buttonTitle === "Zapisz"
    ? // ? editCity(city.id, city).then(() => window.location.reload())
      // : addCity(city).then(() => window.location.reload());
      editCity(city.id, city).then(() => navigate("/"))
    : addCity(city).then(() => navigate("/"));
};

export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (/a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ/.test(values.name.trim())) {
    errors.name = "Użyto złych znaków (tylko litery)";
  }

  if (!values.voivodeship || values.voivodeship === 0) {
    errors.voivodeship = "Required";
  }

  if (!values.picture_url) {
    errors.picture_url = "Required";
  } else if (
    !/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      values.picture_url
    )
  ) {
    errors.picture_url = "Podany url jest niepoprawny";
  } else if (!values.picture_url.match(/\.(jpeg|jpg|gif|png)$/)) {
    errors.picture_url = "URL nie zwróci obrazka ";
  }

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length < 25) {
    errors.description = "Minimalna ilość znaków  to 25";
  } else if (values.description.length > 2000) {
    errors.description = "Maksymalna ilość znaków  to 2000";
  }

  if (!values.links) {
    errors.description = "Required";
  } else if (
    values.links.includes(",") &&
    values.links
      .split(",")
      .some(
        (el) =>
          !/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
            el
          )
      )
  ) {
    errors.links = "Podany url jest niepoprawny";
  }

  if (!values.known_places) {
    errors.known_places = "Required";
  } else if (
    values.known_places.includes(",") &&
    values.known_places.split(",").some((el) => el.length < 10)
  ) {
    errors.links = "minimalna ilość znaków to 10";
  } else if (
    values.known_places.includes(",") &&
    values.known_places.split(",").some((el) => el.length > 38)
  ) {
    errors.links = "maksymalna ilość znaków to 38";
  }

  return errors;
};
