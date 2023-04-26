import { deleteCity } from "../../services/api";
import {
  handleErrorToast,
  handleSuccessToast,
} from "../../shared/utils/handleToast";

const handleEditButton = (setActionType, navigate) => {
  setActionType("edit");
  navigate("/action");
};

const handleDeleteButton = (id, navigate) => {
  deleteCity(id)
    .then(() => {
      handleSuccessToast();
      window.location.reload();
    })
    .catch(() => handleErrorToast());
  // deleteCity(id).then(() => navigate("/"));
};

export { handleEditButton, handleDeleteButton };
