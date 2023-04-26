import { toast } from "react-toastify";

const handleSuccessToast = () => {
  toast.success("Zakończono pomyślnie", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const handleErrorToast = () => {
  toast.error("Zakończono niepowodzeniem", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export { handleErrorToast, handleSuccessToast };
