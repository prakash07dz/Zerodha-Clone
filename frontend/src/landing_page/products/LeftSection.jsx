import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-3 mt-md-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5">
          <h1 className="fs-2">{productName}</h1>
          <p className="mt-3">{productDescription}</p>

          {/* Links Section */}
          <div className="d-flex flex-column flex-md-row gap-3 mt-3">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* App Store Badges */}
          <div className="d-flex flex-column flex-md-row gap-3 mt-3">
            <a href={googlePlay}>
              <img
                src="images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "150px", height: "auto" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "150px", height: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
