import React from "react";
import useFetchData from "./useFetchData";
import Search from "./Search";
import Map from "./Map";

const Home = () => {
  const {status, foods} = useFetchData();
  if (status==='fetched')
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col"><h3><b>Luxury Bookings</b></h3>
      <p>Navigate through the app to find best hostels around you</p>
      <p>Welcome to our website, your one-stop destination for booking and discovering hostels around the world!
      Search through a large database of hostels in well-known tourist locations or off-the-beaten-path hidden gems. Finding the ideal lodging that meets your needs and budget is made easy with our user-friendly interface, which lets you filter and compare hostels based on your preferences, including price range, location, amenities, and guest reviews..</p>
      
       </div>
      <div className="col"><h3>Search for hostels in map</h3> 
       <Map />
      </div>
        <div className="col">
        <h3>Explore our hostels</h3>
          <Search foods={foods} />
        </div>

      </div>
    </div>
  );
};

export default Home;
