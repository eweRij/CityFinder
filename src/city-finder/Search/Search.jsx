import { Grid } from "@mui/material";

import SidebarSearch from "../SidebarSearch/SidebarSearch";
import SearchResult from "../SearchResult/SearchResult";

const Search = ({handleActionType}) => {
  return (
    <Grid container>
      <Grid item xs={4} sm={4} md={4}>
        <SidebarSearch />
      </Grid>
      <Grid item xs={8} sm={8} md={8}>
        <SearchResult  />
      </Grid>
    </Grid>
  );
};

export default Search;
