import React from "react";

function Map() {
  return (
    <div className="container-fluid">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14690.712821469226!2d72.5693604!3d22.9988578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85f446d3aacf%3A0x8a784f6c37e8f1c!2sMasti%20Box%20Cricket!5e0!3m2!1sen!2sin!4v1686836814037!5m2!1sen!2sin"
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
