import { useState } from "react";

import { Box, AppBar, Typography } from "@mui/material";

import handleNavBarButton from "./NavBar.helper";

import NavButton from "../../shared/components/NavButton";
import NAV_BUTTON_DATA from "./NavBar.const";
import InfoModal from "../InfoModal/InfoModal";

const NavBar = () => {
  const [modalData, setModalData] = useState({ title: "", content: "" });
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "4rem",
        fontSize: "16px",
        padding: "20px 80px",
        color: "#0F172A",
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        borderBottom: "1px solid #E5E7EB",
      }}
      position="static"
    >
      <InfoModal
        title={modalData.title}
        content={modalData.content}
        setOpen={setOpen}
        open={open}
      />
      <Typography style={{ fontWeight: 700 }} component="div">
        Przeglądarka miast
      </Typography>
      <Box>
        {NAV_BUTTON_DATA.map((data,id) => (
          <NavButton
            key={id}
            onClick={() => handleNavBarButton(setOpen, setModalData, data)}
          >
            {data.title}
          </NavButton>
        ))}
      </Box>
    </AppBar>
  );
};

export default NavBar;
