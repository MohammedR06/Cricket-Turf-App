import React from "react";

function Map() {
  return (
    <div className="container-fluid">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3672.6789594227607!2d72.56724781496732!3d22.998830084965057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU5JzU1LjgiTiA3MsKwMzQnMTAuMCJF!5e0!3m2!1sen!2sin!4v1686045966092!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
