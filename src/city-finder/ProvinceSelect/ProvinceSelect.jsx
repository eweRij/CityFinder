import { FormControl,FormLabel,MenuItem,Select } from "@mui/material";

import { districts } from "../SidebarSearch/SidebarSearch.const";

const ProvinceSelect=({value,handleChange})=> {
  return (   <FormControl sx={{ width: "90%",marginTop:"16px" }}>
  <FormLabel title="Województwo" />
  <Select
    name="voivodeship"
    onChange={handleChange}
    value={value}
    style={{ color: "#94A3B8" }}
    defaultValue={0}
  >
    <MenuItem style={{ color: "#94A3B8" }} value={0}>
      Wybierz województwo
    </MenuItem>
    {districts.map(({ name},id) => (
      <MenuItem key={id} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
</FormControl> );
}

export default ProvinceSelect;