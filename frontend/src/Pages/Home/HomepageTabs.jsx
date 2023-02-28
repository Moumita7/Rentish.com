import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
} from "@chakra-ui/react";

const HomepageTabs = () => {
  return (
    <Box width="90%" margin="auto">
      <Tabs isFitted>
        <TabList>
          <Tab
            fontSize={{ lg: "26px", md: "22px", sm: "18px", base: "14px" }}
            _selected={{ color: "white", bg: "#383835" }}
          >
            ABOUT US
          </Tab>
          <Tab
            fontSize={{ lg: "26px", md: "22px", sm: "18px", base: "14px" }}
            _selected={{ color: "white", bg: "#383835" }}
          >
            BLOGS
          </Tab>
          <Tab
            fontSize={{ lg: "26px", md: "22px", sm: "18px", base: "14px" }}
            _selected={{ color: "white", bg: "#383835" }}
          >
            CAREERS
          </Tab>
          <Tab
            fontSize={{ lg: "26px", md: "22px", sm: "18px", base: "14px" }}
            _selected={{ color: "white", bg: "#383835" }}
          >
            HELP & SUPPORT
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {data.map((el, i) => (
              <Box key={i}>
                <Heading
                  fontSize={{
                    lg: "20px",
                    md: "18px",
                    sm: "16px",
                    base: "15px",
                  }}
                  marginBottom="20px"
                  mt="20px"
                >
                  {el.ques}
                </Heading>
                <Heading
                  fontSize={{
                    lg: "16px",
                    md: "15px",
                    sm: "14px",
                    base: "13px",
                  }}
                  marginBottom="25px"
                  lineHeight={"25px"}
                  fontWeight="medium"
                >
                  {el.ans}
                </Heading>
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            <p>Find more information about Rentish Blogs here</p>
          </TabPanel>
          <TabPanel>
            <p>Find more information about Rentish Careers here</p>
          </TabPanel>
          <TabPanel>
            <p>Find more information about Rentish Help and Support here</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HomepageTabs;

const data = [
  {
    ques: "About Rentish",
    ans: "Rentish is India's largest marketplace for cars on rent. From short road trips to quick in-city drives for groceries, supply pick-up, food runs, we have the cheapest car rental options for all your needs! A hatchback for daily commute, a sedan for short trips, SUV for hills or a luxury car for a surprise.",
  },
  {
    ques: "Flying Soon? We'll Be There!",
    ans: "No waiting for cabs or fighting the fares anymore - Rentish provides Airport trip services. The airport car rent service allows you to book a car from the airport & drive it home. Arrive in any city worry-free! We assure you unbeatable prices!",
  },
  {
    ques: "We've Got A Car For All Your Needs:",
    ans: "From long durations to short distances, book a Rentish for all your needs: Rent SUV | Rent Hatchback | Rent Sedan | Rent EV",
  },
  {
    ques: "Anywhere, Anytime:",
    ans: "Cars to rent in Bangalore | Cars to rent in Mumbai | Cars to rent in Delhi NCR |Cars to rent in Chennai |Cars to rent in Pune |Cars to rent in Hyderabad |Cars to rent in Chandigarh |Cars to rent in Kolkata |Cars to rent in Ahmedabad |Cars to rent in Coimbatore |Cars to rent in Indore |Cars to rent in Jaipur Cars to rent in Vizag |Cars to rent in Goa |Cars to rent in Nagpur |Cars to rent in Kochi |Cars to rent in Vijayawada |Cars to rent in Siliguri |Cars to rent in Surat |Cars to rent in Bhopal |Cars to rent in Bhubaneswar | Cars to rent in Lucknow |Cars to rent in Guwahati |Cars to rent in Vadodara |Cars to rent in Ranchi |Cars to rent in Patna | Cars to rent in Raipur | Cars to rent in Jodhpur |Cars to rent in Nashik |Cars to rent in Trichy |Cars to rent in Madurai ",
  },
  {
    ques: "Want A Specific Car? We've Got It All:",
    ans: "Rent Tata Nexon | Rent Honda Jazz | Rent Hyundai Creta | Rent Maruti Brezza | Rent Mahindra | Rent XUV500 | Rent Hyundai Verna | Rent Maruti Swift | Rent Toyota Innova | Rent Reanult Kwid | Rent Maruti Baleno | Rent Mahindra TUV300| Rent Maruti Swift | Rent Hyundai i20 | Rent Maruti Ertiga | Rent Volkswagen Polo | Rent Hyundai Venue | Rent Hyundai Eon | Rent Maruti S-Cross | Rent Maruti | Rent Dzire | Rent Honda Amaze | Rent Hyundai Verna | Rent Maruti Ciaz | Rent Hyundai Creta | Rent Renault Triber | Rent Maruti S-Cross | Rent Toyota Innova | Rent Mahindra TUV300 | Rent Tata Tiago | Rent Maruti Wagon R | Rent Datson Redi-Go | Rent Maruti Alto | Rent Hyundai Grand i10 | Rent Hyundai Xcent | Rent Maruti S-Presso | Rent Hyundai Santro | Rent Hyundai Verna | Rent Maruti Ignis | Rent Nissan Magnite | Rent Toyota Glanza | Rent Honda City | Rent Maruti Dzire | Rent Datson GO T | Rent Nissan Sunny | Rent Renault Kiger | Rent Hyundai Aura | Rent Renault Duster | Rent Mahindra Bolero | Rent Tata Altroz | Rent Ford EcoSport ",
  },
  {
    ques: "Why Book A Rentish?",
    ans: "Rentish gives you the freedom of self-drive! With the cheapest rental car solutions, Rentish has the best offers, cheapest prices and a wide range of cars to choose from. Get unlimited KMs, Free Cancellation, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. Car rent per KM starts as low as Rs. 49/hour. ",
  },
  {
    ques: "How To Rent A Car Through Rentish?",
    ans: "If you're looking for cars to rent near you, Rentish is your perfect solution! Rent cars in 3 easy steps: Pick your date & time of travel Select the vehicle of your choice from our wide range of cars Book & zoom away Rent car & get unlimited KMs, Free Cancellation, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. Car rent per KM starts as low as Rs. 49/hour.",
  },
  {
    ques: "Can Rentish Be Used For Interstate Travel?",
    ans: "Experience the ease of round trips with Rentish! All you have to do is enter your start & end date & time for your journey. Once you rent a car, you get unlimited KMs, Free Cancellation, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. Car rent per KM starts as low as Rs. 49/hour.",
  },
  {
    ques: "Can A Rentish Booking Be Cancelled?",
    ans: "With Rentish, you get free cancellation & free rescheduling up to 6 hours before the trip starts. Rent cars & get unlimited KMs, Free Cancellation, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. Car rent per KM starts as low as Rs. 49/hour.",
  },
  {
    ques: "How To Contact Rentish?",
    ans: "Rentish is the biggest budget car rental marketplace in India. Our executives are available to respond to your queries & solve your problems 24/7 through our customer support portal! ",
  },
  {
    ques: "How To Book A Rentish From The Airport?",
    ans: "No waiting for cabs or fighting the fares anymore - Rentish provides Airport trip services. The airport car rent service allows you to book a car from the airport & drive it home. Arrive in any city worry-free! We assure you unbeatable prices!",
  },
];
