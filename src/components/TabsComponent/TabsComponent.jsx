import React from "react";
import { Box, Tab } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: red[500],
      },
    },
  });


function TabsComponent({summary}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
        <ThemeProvider theme={theme}>
        <TabContext value={value} >
         <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%"}}>
            <TabList 
            onChange={handleChange} 
            aria-label="tabs description"  
            textColor="secondary"
            indicatorColor="secondary" 
            centered
             >
            <Tab label="Description" value="1" sx={{ color: "#fff" }} />
            <Tab label="Rate&Review" value="2" sx={{ color: "#fff" }} />
            
            </TabList>
            </Box>
            <TabPanel value="1" >
            <div dangerouslySetInnerHTML={{__html: summary}} />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
        
        </TabContext>
        </ThemeProvider>
        </>
    );
}

export default TabsComponent;