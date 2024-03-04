import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { Profile, SearchNormal1 } from "iconsax-react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-[#E5F3FF] to-[#D8E3FF] w-screen h-screen flex flex-col items-center justify-items-center">
      <Link
        to="admin"
        className="bg-white p-2.5 rounded-[15px] fixed top-[40px] right-[104px]"
      >
        <Profile color="#85B6FF" />
      </Link>
      <img src={logo2} alt="" className="w-[429px]" />
      <div className="relative bg-[#EFA0C6] w-[604px] h-[100px] rounded-[126px] mb-5">
        <SearchNormal1
          className="absolute right-[62px] top-[31px]"
          size={37}
          color="#2D264B"
        />
        <input
          type="text"
          className="bg-[#EFA0C6] text-[#2B2727] rounded-[126px] placeholder-[#2B2727] text-center  text-[36px] outline-none  ml-28 mt-[1.4rem] max-w-[80%]"
          placeholder="Məhsulun adı"
        />
      </div>
      <Link to="test">
        <div className="bg-[#EFA0C6] text-[#2B2727] w-[604px] h-[100px] text-[36px] rounded-[126px] outline-none flex items-center justify-center cursor-pointer">
          Dəri tipini müəyyən et
        </div>
      </Link>
      <img src={logo} alt="" className="fixed -bottom-8 -right-8" />
    </div>
  );
}

export default HomePage;
