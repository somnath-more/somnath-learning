import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Carousel = () => (
  <Slider {...settings}>
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
  </Slider>
);

export default Carousel;
