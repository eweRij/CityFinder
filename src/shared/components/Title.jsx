import { Typography } from "@mui/material";

const Title = ({ title }) => {
  return (
    <Typography
      as="p"
      style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}
    >
      {title}
    </Typography>
  );
};

export default Title;
