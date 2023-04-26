import { Typography } from "@mui/material";

const Subtitle = ({ title }) => {
  return (
    <Typography
      as="h4"
      style={{ fontSize: 20, fontWeight: 600, marginBottom: 18 }}
    >
      {title}
    </Typography>
  );
};

export default Subtitle;
