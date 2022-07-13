import React from "react";
import "./CardProfile.css";
const CardProfile = (props) => {
  return (
    <div className="mr-5 ml-4" style={{paddingRight: 50}}>
      <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload">
          <img
            for="photo-upload"
            alt=""
            src={''}
          />
        </div>
        <input id="photo-upload" type="file" />
      </label>
      <label class="form-check-label" for="inlineCheckbox1">
        {props.name}
      </label>
    </div>
  );
};

export default CardProfile;
