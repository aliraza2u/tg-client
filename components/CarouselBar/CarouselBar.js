import React, { useEffect, useState } from "react";
import styles from "./carousel.module.scss";
// import { Fade, Bounce, Zoom } from "react-awesome-reveal";
import { useSpring, animated } from "react-spring";
import Slider from "react-slick";

const CarouselBar = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [sliderData, setSliderData] = useState([
    {
      image:
        "https://img2.pngio.com/girls-shopping-png-hd-transparent-girls-shopping-hdpng-images-girls-shopping-png-1920_1080.jpg",
      title: "Cloth",
      description: "Special summer clothes from KHADI",
    },
    {
      image:
        "https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg",
      title: "",
      description: "",
    },
    {
      image:
        "https://img.freepik.com/free-photo/pretty-girls-exploring-shops-mall_23-2147669973.jpg?size=626&ext=jpg",
      title: "",
      description: "",
    },
  ]);

  return (
    <div className={styles.carousel_wrapper}>
      <Slider {...settings}>
        {sliderData.map((x, index) => (
          <div key={index}>
            <div
              className={styles.carousel_item}
              style={{ backgroundImage: `url(${x.image})` }}
            >
              <animated.div style={props}>
                <h1>{x.title}</h1>
                <h3>{x.description}</h3>
              </animated.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselBar;
