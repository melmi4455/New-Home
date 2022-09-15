import { BsFacebook, BsWhatsapp, BsTwitter, BsInstagram } from "react-icons/bs";
function Footer() {
  return (
    <div>
      <div className="bg-blue-600 px-40 pb-20 border-t text-white">
        <div className=" grid grid-cols-4 font-bold text-lg">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-xl font-extrabold pb-2 pt-8">Industry</h2>
            <h3>Apartments</h3>
            <h3>House Rentals</h3>
            <h3>House Buyings</h3>
          </div>
          <div className=" flex flex-col items-center">
            <h2 className="font-bold text-xl font-extrabold pb-2 pt-8">Blog</h2>
            <h3>House Sales</h3>
            <h3>House Rentals</h3>
            <h3>Apartment Rentals</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-xl font-extrabold pb-2 pt-8">Contact Us</h2>
            <h3>HomeApp@email.com</h3>
            <h3>+2526344556677</h3>
          </div>
          <div className="flex flex-col items-center space-y-3 pt-3 mt-5 pl-80 ">
            <BsFacebook size={20} />
            <BsWhatsapp size={20} />
            <BsTwitter size={20} />
            <BsInstagram size={20} />
          </div>
        </div>
        <div className="flex justify-center items-center mt-20 mb-1 font-extrabold text-xl">
          &copy;2022 HomeRental App
        </div>
      </div>
    </div>
  );
}
export default Footer;