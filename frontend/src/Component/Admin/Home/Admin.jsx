// import { Box, Heading, Input, Tabs } from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-router-dom';
// import Sidebar from '../components/sidebar/Sidebar'
// import AdminRoutes from '../AdminRoutes'
// import Users from '../components/User/User'
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Users from '../components/User/User'
import Cars from '../components/Cars/Cars'
import Booking from '../components/Booking/Booking'


const Admin = () => {


     return (
     //      <Box m='auto'>
     //           <Heading textAlign={'center'} py='4'>Admin Pannel</Heading>
     //           <Box display={'flex'} h='100vh' borderTop={'1px'}  boxShadow={"box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"}>
     //                <Box w='17%' borderRight={'2px'} borderColor='gray.200'>
     //                     <Sidebar />
     //                </Box>
     //                <Box w='83%' border={'px'}>
     //                     {/* <AdminRoutes /> */}
     //                     <Users/>
     //                </Box>
     //           </Box>
     //           <Box>
     //           </Box>
     //      </Box>



     <Box>
      <Heading as='h2'>Admin Page</Heading>
        <Tabs isFitted size='md' align='center' variant='enclosed' textAlign={"center"}>
          <TabList alignItems={"center"}>
            <Tab>Users</Tab>
            <Tab>Cars</Tab>
            <Tab>Booking</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* <Products /> */}
              <Users/>

            </TabPanel>
            <TabPanel>
              {/* <Customers /> */}
              <Cars/>

            </TabPanel>
            <TabPanel>
              {/* <Orders /> */}
              <Booking/>
            </TabPanel>
          </TabPanels>
        </Tabs>

      
    </Box>
     )
}

export default Admin