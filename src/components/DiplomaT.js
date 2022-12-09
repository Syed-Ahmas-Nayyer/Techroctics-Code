import React from "react";
import "./DiplomaT.css"
import diploma_track from "../Website_images/diploma_track.jpg"


const DiplomaT = () => {
  return (
    <>
      <div className="hero_bt3" style={{marginTop:"90px"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6" >
                    <div className="next">
                        <h1 className="write">
                            Diploma Track
                        </h1>
                        <h3 className="writing">
                            By Techroctics Lab
                        </h3>
                        <p className="type_1" >
                        Build a thriving career in E-Commerce and learn how <br/> to transform and scale up your business through <br/> extensive learning in Diploma Track Program to <br/> enjoy success.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6" >
                    <img src={diploma_track} alt="" className="hello"/>
                    {/* <div className="owl-carousel service_slider owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <img src="https://ec.com.pk/assets/img/hero-diploma.png" alt=""/>
                                    </div>
                                </div>
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <img src="https://ec.com.pk/assets/img/hero-diploma.png" alt=""/>
                                    </div>
                                </div>
                                <div className="owl-item active">
                                    <div className="item">
                                        <img src="https://ec.com.pk/assets/img/hero-diploma.png" alt=""/>
                                    </div>
                                </div>
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <img src="https://ec.com.pk/assets/img/hero-diploma.png" alt=""/>
                                    </div>
                                </div>
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <img src="https://ec.com.pk/assets/img/hero-diploma.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav disabled">
                            <button type="button" role="presentation" className="owl-prev">
                                <div className="nav-btn prev-slide"></div>
                            </button>
                            <button type="button" role="presentation" className="owl-next">
                                <div className="nav-btn next-slide"></div>
                            </button>
                        </div>
                        <div className="owl-dots disabled">
                            <button role="button" className="owl-dot active">
                                <span></span>
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
      </div>
      <div className="hero_bt3">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="do">Extensive Training 
                    <br/>Programs</h2>
                </div>
                <div className="col-lg-6">
                    <p className="work">Experience this transformational journey with our extensive e-commerce training programs and learn from the experts. Get your hand on multiple ecommerce opportunities to grow and write your own success story.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default DiplomaT;