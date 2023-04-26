import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import { handleDeleteButton } from "../SearchResult/SearchResult.helper";


const OnDeleteDialog = ({ city,setOpen,open }) => {
const navigate=useNavigate()
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={()=>handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Czy na pewno chcesz usunąć miasto {city.name}
        </DialogTitle>
        <DialogActions>
          <Button onClick={()=>handleClose}>Anuluj</Button>
          <Button onClick={()=>handleDeleteButton(city.id,navigate)} autoFocus>
            Potwierdź
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OnDeleteDialog;
