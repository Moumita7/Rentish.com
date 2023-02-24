import React from "react";

const GoogleMaps = (city="Delhi") => {
    let source = `https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20${city}+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`

  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
      <iframe
        width="400"
        height="300"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Delhi+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <p>Developed and Designed by Team Rentish</p>
      <p>© Rentish 2023</p>
      <p>This map is powered by Google Maps © 2023</p>
    </div>
  );
};

export default GoogleMaps;
