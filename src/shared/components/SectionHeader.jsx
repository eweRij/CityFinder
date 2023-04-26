import { Typography } from "@mui/material";

const SectionHeader = ({ title }) => {
  return (
    <Typography
      style={{
        fontSize: "32px",
        fontWeight: 600,
        color: "#0F172A",
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;
