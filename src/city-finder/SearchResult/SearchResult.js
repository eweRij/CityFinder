import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Grid, IconButton } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import Subtitle from "../../shared/components/Subtitle";
import Title from "../../shared/components/Title";
import NoContent from "../NoContent/NoContent";
import CityContext from "../../shared/context/CityContext";
import SectionHeader from "../../shared/components/SectionHeader";
import { handleEditButton } from "./SearchResult.helper";
import OnDeleteDialog from "../OnDeleteDialog/OnDeleteDialog";

const SearchResult = () => {
  const { city, setActionType } = useContext(CityContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={{ padding: "32px 24px" }}>
      {city ? (
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6} md={8}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <OnDeleteDialog open={open} setOpen={setOpen} city={city} />
              <SectionHeader title={city.name} />
              <Box style={{ marginRight: "-16px" }}>
                <IconButton
                  onClick={() => handleEditButton(setActionType, navigate)}
                  style={{ paddingRight: 0 }}
                >
                  <EditOutlinedIcon style={{ height: 15, color: "black" }} />
                </IconButton>
                <IconButton
                  onClick={() => handleClickOpen(true)}
                  style={{ paddingLeft: 0 }}
                >
                  <DeleteOutlinedIcon style={{ height: 15, color: "black" }} />
                </IconButton>
              </Box>
            </Box>
            <img
              style={{
                maxWidth: 600,
                maxHeight: 400,
                borderRadius: "8px",
                marginBottom: 24,
              }}
              src={city.picture_url}
              alt="city"
            />
            <Subtitle title="Opis" type={"h4"} size={20} weight={600} />
            <Box
              style={{
                color: "#1E293B",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "28px",
                marginTop: 11,
                maxHeight: 300,
                overflow: "scroll",
              }}
            >
              {city.description}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Subtitle title="Znane miejsca" />
            {city.known_places.map((place, id) => (
              <Title key={id} title={place} />
            ))}
            <Subtitle
              title="Interesujące linki"
              type={"h4"}
              size={20}
              weight={600}
            />
            {city.links.map((link, id) => (
              <div key={id}>
                <a
                  style={{
                    outline: "none",
                    color: "#334155",
                  }}
                  href={link}
                >
                  {link.split("/", 3)}
                </a>
              </div>
            ))}
          </Grid>
        </Grid>
      ) : (
        <NoContent />
      )}
    </Box>
  );
};

export default SearchResult;
