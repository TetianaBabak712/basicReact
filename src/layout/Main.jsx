import Navigation from "../components/Menu/Menu";
import Grid from "@mui/material/Grid";
import { Outlet} from "react-router-dom";


function Main() {
    return (
        <div className="App">
          <Navigation />
          <Grid container>
            <Outlet />
          </Grid>
        </div>
      );
    }



    export default Main;