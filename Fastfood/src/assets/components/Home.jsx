import heroimg from "../heroimg.png";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import OfferSection from "./OfferSection";
import SpecialDishes from "./SpecialDishes";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
function Home({ navIcon }) {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Delicious", "Scrumptious", "Appetizing"],
      typeSpeed: 250,
      backSpeed: 250,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className={`${navIcon ? "overflow-hidden" : ""} font-gilroy`}>
        <div className="flex flex-col gap-11 lg:flex-row max-w-6xl lg:justify-between mx-auto  px-4  xl:px-0 lg:items-center mb-10 xl:mt-16">
          <div className="max-w-[504px] xl:max-w-[700px]  mx-auto lg:mx-0">
            <h1 className="font-bold text-3xl mb-8 md:text-5xl xl:text-6xl text-center lg:text-left md:leading-[1.6] lg:leading-[1.4] xl:leading-[1.3]">
              We deliver{" "}
              <span className="text-[#00A000]">
                Healthy & <span ref={el}></span>
              </span>{" "}
              Food
            </h1>
            <p className="text-[#000001] leading-[1.7] text-center lg:text-left max-w-[474px]">
              Order online or book a table.We are always ready to fulfill your
              demand.You would get fastest delivery you could ever imagine.Keep
              in touch with us to take your delicious foods.
            </p>
            <div className="flex flex-col gap-4 mt-8 sm:flex-row justify-center lg:justify-start">
              <button className="w-full bg-[#00A000] text text-white rounded py-2 sm:w-[40%] lg:w-[25%]">
                Order Now
              </button>
              <Link
                to="products"
                className="w-full border border-[#00A000] py-2 sm:w-[30%] rounded text-[#00A000] lg:w-[35%] lg:py-3 text-center"
              >
                {/* <button className="w-full border border-[#00A000] py-2 sm:w-[30%] rounded text-[#00A000] lg:w-[35%] lg:py-3"> */}
                Explore Products
                {/* </button> */}
              </Link>
            </div>
          </div>
          <img
            src={heroimg}
            alt="Hero Img"
            className="lg:relative  xl:-right-24 w-full max-w-[504px] mx-auto xl:mx-0"
          />
        </div>
      </main>
      <OfferSection />
      <SpecialDishes />
      <Testimonial />
      <AboutUs />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
