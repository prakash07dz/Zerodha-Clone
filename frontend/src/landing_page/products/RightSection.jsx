import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container mt-3 mt-md-5">
      <div className="row">
        {/* Content Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5">
          <h1 className="fs-2">{productName}</h1>
          <p className="mt-3">{productDescription}</p>

          {/* Learn More Link */}
          <div className="mt-3">
            <a href={learnMore} className="text-decoration-none">
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
