import img1 from "../img1.png";
import img2 from "../img22.png";
import img3 from "../img33.png";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OfferSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <section className={`bg-[#FAFAFA] mx-auto py-11 `} data-aos="fade-up">
      <div className="mt-16  font-gilroy px-4 max-w-6xl mx-auto xl:px-0">
        <h2
          className={`text-center font-extrabold text-3xl mb-4
          }`}
        >
          Why Choose Us?
        </h2>
        <p className="text-center text-[#999999]">
          We offer delicious and healthy foods, quick payment and we deliver
          fast.
        </p>
        <div className="lg:flex justify-between items-center mb-8">
          <article className="grid justify-center item-center mt-6 ">
            <img
              src={img1}
              alt=""
              className="w-[70%] max-w-[300px] mx-auto mb-4 h-[220px]"
            />
            <h4 className="font-semibold text-2xl text-center mb-3 ">
              Best Offers
            </h4>
            <p className="text-center font-light lg:max-w-[242px]">
              We offer you healthy & delicious food with good hygiene.
            </p>
            <h4 className="text-center mt-12 text-3xl font-bold hidden md:block">
              40+{" "}
            </h4>
            <p className=" font-light text-center hidden md:block">
              Foods Available
            </p>
          </article>
          <article className="grid justify-center item-center mt-6 ">
            <img
              src={img2}
              alt=""
              className="w-[70%] max-w-[300px] mx-auto mb-4 h-[220px]"
            />
            <h4 className="font-semibold text-2xl text-center mb-3 ">
              Easy Payment
            </h4>
            <p className="text-center font-light lg:max-w-[242px]">
              Payment is easy and quick to order your foods.
            </p>
            <h4 className=" hidden text-center mt-12 text-3xl font-bold md:block">
              600+
            </h4>
            <p className="hidden font-light text-center md:block">
              Happy Clients
            </p>
          </article>
          <article className="grid justify-center item-center mt-6 ">
            <img
              src={img3}
              alt=""
              className="w-[70%] max-w-[300px] mx-auto mb-4 h-[220px]"
            />
            <h4 className="font-semibold text-2xl text-center mb-3 ">
              Fastest delivery
            </h4>
            <p className="text-center font-light lg:max-w-[242px]">
              Our delivery is super active and run delivery inter state
            </p>
            <h4 className="text-center mt-12 text-3xl font-bold hidden md:block">
              5k+
            </h4>
            <p className="hidden font-light text-center md:block">
              Online Orders
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
