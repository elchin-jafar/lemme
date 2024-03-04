import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { Profile, SearchNormal1 } from "iconsax-react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-[#E5F3FF] to-[#D8E3FF] w-screen h-screen flex flex-col items-center justify-items-center">
      <Link
        to="admin"
        className="bg-white p-2.5 rounded-[1.5rem] fixed top-[4rem] right-[10.4rem]"
      >
        <Profile color="#85B6FF" />
      </Link>
      <img src={logo2} alt="" className="w-[42.9rem]" />
      <div className="relative bg-[#EFA0C6] w-[60.4rem] h-[10rem] rounded-[12.6rem] mb-5 flex justify-center items-center">
        <SearchNormal1
          className="absolute right-[6.2rem] top-[3.1rem]"
          size={37}
          color="#2D264B"
        />
        <input
          type="text"
          className="bg-[#EFA0C6] text-[#2B2727] rounded-[12.6rem] placeholder-[#2B2727] text-center  text-[3.6rem] outline-none max-w-[80%]"
          placeholder="Məhsulun adı"
        />
      </div>
      <Link to="test">
        <div className="bg-[#EFA0C6] text-[#2B2727] w-[60.4rem] h-[10rem] text-[3.6rem] rounded-[12.6rem] outline-none flex items-center justify-center cursor-pointer">
          Dəri tipini müəyyən et
        </div>
      </Link>
      <img src={logo} alt="" className="fixed -bottom-8 -right-8" />
    </div>
  );
}

export default HomePage;
