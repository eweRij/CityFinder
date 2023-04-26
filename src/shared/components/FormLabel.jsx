import { Typography } from "@mui/material";

const FormLabel = ({ title }) => {
  return (
    <Typography
      style={{
        fontWeight: 600,
        fontSize: 14,
        color: "#0F172A",
        marginBottom: 12,
      }}
      component="h6"
    >
      {title}
    </Typography>
  );
};

export default FormLabel;
