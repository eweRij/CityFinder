import { FormControl, TextField } from "@mui/material";

import FormLabel from "./FormLabel";

const TextInput = ({ title, placeholder, setValue,value }) => {

  return (
    <FormControl sx={{ width: "90%", marginBottom: "16px" }}>
      <FormLabel title={title} />
      <TextField
        value={value}
        onChange={setValue}
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
      />
    </FormControl>
  );
};

export default TextInput;
