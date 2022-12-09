import React from "react";
import "./Slider.css";
import slider1 from "../Website_images/slider1.jpg"
import slider2 from "../Website_images/slider2.jpg"
import slider3 from "../Website_images/slider3.jpg"

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>;

const Slider = () => {
  return (
    <>

      <div className="main-container aem-GridColumn aem-GridColumn--default--12">
        <div
          className="key-feature-tab"
          style={{ paddingTop: "40px", paddingBottom: "150px" }}
        >
          <div className="key-feature-tab__contents ">
            <div
              className="key-feature-tab__header-wrap"
              style={{ justifyContent: "center", alignContent: "center" }}
            >
              <h1
                className="key-feature-tab__tittle"
                style={{
                  paddingLeft: "430px",
                  color: "#000000",
                  fontSize: "42px",
                }}
              >
                Amazon Learing Initiative By
              </h1>
              <div className="tab">
                <h1 className="learnt" style={{ paddingLeft: "63px" }}>
                  The Techroctics Lab
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="key-feature-tab__container swiper-container swiper-no-swiping swiper-container-initialized swiper-container-horizontal">
        <div className="slider-container  container-fluid">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide  container-fluid"
            data-ride="carousel"
          >
            <div className="carousel-inner container-fluid">
   
              <div className="carousel-item active" style={{ height: "555px",transitionDuration:"1s" }}>
                <img
                  className="d-block w-80 container-fluid"
                  src={slider1}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item" style={{ height: "555px",transitionDuration:"1s" }}>
                <img
                  className="d-block w-80 container-fluid"
                  src={slider2}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item" style={{ height: "555px",transitionDuration:"1s" }}>
                <img
                  className="d-block w-80 container-fluid"
                  src={slider3}
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item" style={{ height: "555px",transitionDuration:"1s" }}>
                <img
                  className="d-block w-80 container-fluid"
                  src={slider1}
                  alt="Fourth slide"
                />
              </div>
              <div className="carousel-item" style={{ height: "555px",transitionDuration:"1s" }}>
                <img
                  className="d-block w-80 container-fluid"
                  src={slider2}
                  alt="Fifth slide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
