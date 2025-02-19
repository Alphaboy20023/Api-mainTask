import React from "react";


function Carousel() {

    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/Model.jpg" className="d-block" alt="..." style={{height:'645px', width:'668px'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/logindisplay.png" className="d-block " alt="..." style={{height:'645px' ,width:'685px'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/LoginCarousel.png" className="d-block" alt="..." style={{height:'641px', width:'685px'}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel;