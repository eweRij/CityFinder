import AddCity from "../../city-finder/AddCity/AddCity";
import EditCity from "../../city-finder/EditCity/EditCity";
import Search from "../../city-finder/Search/Search";

const handleRouting = (actionType) => {
  switch (actionType) {
    case "add": {
      return <AddCity />;
    }
    case "edit": {
      return <EditCity />;
    }
    default: {
      return <Search />;
    }
  }
};
export default handleRouting;
