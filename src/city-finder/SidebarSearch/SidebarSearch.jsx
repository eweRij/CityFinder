import { useContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Divider } from "@mui/material";
import { debounce } from "lodash";

import ActionButton from "../../shared/components/ActionButton";
import TextInput from "../../shared/components/TextInput";
import Sidebar from "../../shared/components/Sidebar";
import CityContext from "../../shared/context/CityContext";
import { findCityByName, findCityByProvince } from "../../services/api";
import ProvinceSelect from "../ProvinceSelect/ProvinceSelect";

const SidebarSearch = () => {
  const navigate = useNavigate();
  const {  setCity,setActionType  } = useContext(CityContext);
  const [searchedCityByName, setSearchedCityByName] = useState("");
  const [selectedProvince, setSelectedProvince] = useState(0);
  const [searchedCitiesByProvince, setSearchedCitiesByProvince] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useMemo(() => debounce(handleDebounceFn, 2000), []);

  function handleDebounceFn(searchedCityByName) {
    findCityByName(searchedCityByName).then((resp) => setCity(resp));
  }
  const handleChange = (event) => {
    setSearchedCityByName(event.target.value);
    debounceFn(event.target.value);
  };
const handleProvinceChange=(event)=>{
  setSelectedProvince(event.target.value)
}
const handleActionButton=()=>{
  setActionType("add")
  navigate("/action")
}
  useEffect(() => {
    findCityByProvince(selectedProvince).then((resp) =>
      setSearchedCitiesByProvince(resp)
    );
  }, [selectedProvince, setSearchedCitiesByProvince]);

  return (
    <Sidebar>
        <Box>
          <TextInput
            variant="standard"
            value={searchedCityByName}
            setValue={handleChange}
            title="Wyszukaj"
            placeholder="Wpisz nazwę miasta"
          />
          <ProvinceSelect
            value={selectedProvince}
            handleChange={handleProvinceChange}
          />
          <Divider style={{ marginTop: 24, marginBottom: 32}} />
          <Box
            sx={{
              display: "flex",
              minHeight: "30%",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {searchedCitiesByProvince.length > 0 &&
              searchedCitiesByProvince.map((city) => (
                <ActionButton
                  key={city.name}
                  type="button"
                  content={city.name}
                  justify={false}
                  color="black"
                  bgColor="white"
                  action={() => setCity(city)}
                />
              ))}
          </Box>
        </Box>

        <Box>
          <ActionButton
            type="button"
            content="Dodaj nowe miasto"
            action={() => handleActionButton()}
            justify={true}
            color="white"
            bgColor="black"
          />
        </Box>
    </Sidebar>
  );
};

export default SidebarSearch;
