import React from "react";


function Carousel() {

    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/car4.webp" className="d-block" alt="..." style={{height:'640px', width:'100%'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/car3.webp" className="d-block " alt="..." style={{height:'642px' ,width:'100%'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/Model.jpg" className="d-block" alt="..." style={{height:'642px', width:'679px'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/car2.webp" className="d-block" alt="..." style={{height:'642px', width:'679px'}}/>
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