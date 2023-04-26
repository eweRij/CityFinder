import { Button } from "@mui/material";

const ActionButton = ({
  content,
  action,
  justify,
  color,
  bgColor,
  type,
  disabled = false,
}) => {
  return (
    <Button
      disabled={disabled}
      sx={{
        justifyContent: `${justify ? "center" : "flex-start"}`,
        width: "90%",
        fontSize: 14,
        height: 40,
        padding: `${justify ? "8px 16px" : "8px 56px 8px 12px"}`,
        backgroundColor: bgColor,
        radius: 6,
        color: color,
        textTransform: "none",
        "&:hover": {
          backgroundColor: "rgb(229, 231, 235)",
          borderColor: "black",
          boxShadow: "none",
        },
        "&:active": {
          boxShadow: "none",
          backgroundColor: "black",
          borderColor: "black",
        },
        "&:focus": {
          boxShadow: "none",
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "black",
        },
      }}
      variant="contained"
      onClick={action}
      type={type}
    >
      {content}
    </Button>
  );
};

export default ActionButton;
