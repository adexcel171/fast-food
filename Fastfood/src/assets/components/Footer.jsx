import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";

function Footer() {
  return (
    <footer className="bg-[#90ca90] font-gilroy text-white">
      <div className="flex items-center sm:items-stretch flex-col gap-16 sm:flex-row justify-center sm:justify-between pt-16  px-4 max-w-6xl mx-auto xl:px-0 pb-8 lg:border-b cursor-pointer ">
        <div>
          <h6 className="font-gilroy text-xl font-bold text-white border-b border-white inline-block ">
            FastFood
          </h6>
          <div className="md:flex gap-2 hidden mt-4">
            <RiFacebookCircleLine className="text-2xl" />
            <TiSocialTwitterCircular className="text-2xl" />
            <TiSocialInstagramCircular className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-center sm:text-left">
          <h6 className="mb-3 font-black">Company</h6>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        <div className=" flex-col gap-5 text-center sm:text-left hidden sm:flex ">
          <h6 className="mb-3 font-extrabold">Help</h6>
          <a href="#">Help</a>
          <a href="#">Faq</a>
          <a href="#">Support</a>
        </div>
        <div className=" flex-col gap-5 text-center sm:text-left  hidden sm:flex">
          <h6 className="mb-3 font-extrabold">Terms</h6>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of servce</a>
        </div>
      </div>
      <p className="text-center mt-10 pb-8">All right reserved by Godswill &copy; 2023</p>
    </footer>
  );
}

export default Footer;
