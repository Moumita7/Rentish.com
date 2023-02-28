// import { Box, Heading, Input, Tabs } from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-router-dom';
// import Sidebar from '../components/sidebar/Sidebar'
// import AdminRoutes from '../AdminRoutes'
// import Users from '../components/User/User'
import { Box, Center, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Users from '../components/User/User'
import Cars from '../components/Cars/Cars'
import Booking from '../components/Booking/Booking'


const Admin = () => {
    return (
     <Box>
      <Center><Heading as='h2'>Admin Page</Heading></Center>
        <Tabs isFitted size='md' align='center' variant='enclosed' textAlign={"center"}>
          <TabList alignItems={"center"}>
            <Tab><Heading color={"#00BE2D"}>Cars</Heading></Tab>
            <Tab><Heading color={"#00BE2D"}>Users</Heading></Tab>
            <Tab><Heading color={"#00BE2D"}>Booking</Heading></Tab>
          </TabList>

          <TabPanels>
          <TabPanel>
      
      <Cars/>

    </TabPanel>
            <TabPanel>

              <Users/>

            </TabPanel>
          
            <TabPanel>

              <Booking/>
            </TabPanel>
          </TabPanels>
        </Tabs>

      
    </Box>
     )
}

export default Admin