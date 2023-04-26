import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const NoContent=()=> {
  const theme = useTheme();
  return (<Typography variant="h4" style={{color:theme.palette.transparent.main}}>Brak wyników wyszukiwania</Typography>  );
}

export default NoContent;