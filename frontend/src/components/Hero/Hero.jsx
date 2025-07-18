import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Subtitulo ",
    title: "Titulo ",
    title2: "SuperTitulo",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Subtitulo 2",
    title: "Titulo 2",
    title2: "Titulo 2.2",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Subtitulo 3",
    title: "Titulo 3",
    title2: "Titulo 3.2",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="container ">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px]
       hero-bg-color flex justify-center items-center"
      >
        <div className=" container pb-8 sm:pb-0 ">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id} className="">
                <div className="grid grind-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div
                    className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 
                    sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
                  >
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1
                      className="text-5xl uppercase text-white dark:text-white/5
                      sm:text-[80px] md:text-[100px] xl:text-[150px font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div>
                      <Button
                        text={"Shop By Category"}
                        bgColor={"bg-primary"}
                        textColor={"text-white"}
                      />
                    </div>
                  </div>

                  {/* img section */}
                  <div className="order-1 sm:order-2 ">
                    <div>
                      <img
                        src={data.img}
                        className="w-[300px] sm:w-[450px]  h-[300px] sm:h-[450px] 
                        sm:scale-105 lg:scale-110 object-contain mx-auto
                        drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4) relative z-40 "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
