import React from "react";
import { Box, Tab } from "@mui/material";
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';




function TabsComponent({summary}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
    
        
        <TabContext value={value}>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="tabs description">
            <Tab label="Description" value="1" />
            <Tab label="Rate&Review" value="2" />
            
            </TabList>
            </Box>
            <TabPanel value="1">
            <div dangerouslySetInnerHTML={{__html: summary}} />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
        
        </TabContext>
       
    
    );
}

export default TabsComponent;