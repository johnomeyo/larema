import React from "react";
import "./ImageGrid.css";

const ImageGrid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item large">
        <img src="https://www.outlooktravelmag.com/media/tanzania-1-1582275012.profileImage.2x-scaled.webp" alt="Mountain" />
      </div>
      <div className="grid-item">
        <img src="https://secretafrica.com/wp-content/uploads/2021/08/Top-10-Tourist-Attractions-in-Tanzania-Ngorongoro-Crater-3.jpg" alt="Zebras" />
      </div>
      <div className="grid-item">
        <img src="https://www.tanzaniatourism.com/images/uploads/Lake_Ngozi_Ngosi_21.jpg" alt="Lions" />
      </div>
      <div className="grid-item">
        <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/Serengeti-National-Park-Tanzania.jpg" alt="Beach" />
      </div>
      <div className="grid-item">
        <img src="https://thebusinesswiz.co.tz/wp-content/uploads/2022/09/TOUR1.jpg" alt="Group" />
      </div>
    </div>
  );
};

export default ImageGrid;
