import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material";

import "./App.css";
import Layout from "./shared/components/Layout";
import NavBar from "./city-finder/NavBar/NavBar";
import Search from "./city-finder/Search/Search";
import CityContext from "./shared/context/CityContext";
import handleRouting from "./shared/utils/handleRouting";
import Toast from "./shared/components/Toast";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter"],
    color: "#0F172A",
  },
  palette: {
    primary: {
      main: "#0F172A",
    },
    secondary: {
      main: "#1E293B",
    },
    transparent: {
      main: "rgba(0,0,0,0.3)",
    },
  },
});
const App = () => {
  const [city, setCity] = useState(null);
  const [actionType, setActionType] = useState("");

  console.log(actionType);
  return (
    <CityContext.Provider value={{ city, setCity, actionType, setActionType }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toast />
        <BrowserRouter>
          <Layout>
            <NavBar />
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/action" element={handleRouting(actionType)} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </CityContext.Provider>
  );
};

export default App;
