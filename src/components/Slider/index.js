import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../../data";
import './style.scss'

export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const handleSlide = (way) => {
        if (way === "left") setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : sliderItems.length - 1)
        if (way === "right") setCurrentSlide(currentSlide < sliderItems.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="slider">
            <div className="slider__arrow" id="left" onClick={() => handleSlide("left")}>
                <ArrowLeftOutlined />
            </div>
            <div className="slider__wrapper" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {
                    sliderItems.map(item => (
                        <div className="container" style={{ backgroundColor: `#${item.bg}` }}>
                            <div className="container__img">
                                <img src={item.img} alt="No img" />
                            </div>
                            <div className="container__info">
                                <h1 className="title">{item.title}</h1>
                                <p className="desc">{item.desc}</p>
                                <button className="btn-shop-now">SHOW NOW</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="slider__arrow" id="right" onClick={() => handleSlide("right")}>
                <ArrowRightOutlined />
            </div>
        </div>
    )
}

