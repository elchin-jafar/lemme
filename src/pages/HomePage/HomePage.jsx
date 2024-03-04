import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-[#E5F3FF] to-[#D8E3FF] w-screen h-screen flex flex-col items-center justify-items-center">
      <img src={logo2} alt="" className="w-[429px]" />
      <div>
        <img alt="" /* className={styles["search-icon"]} */ />
        <input
          type="text"
          className="bg-[#EFA0C6] text-[#2B2727] placeholder-[#2B2727] text-center w-[604px] h-[100px] text-[36px] rounded-[126px] outline-none mb-5"
          //   className={styles["main-search-input"]}
          placeholder="Məhsulun adı"
        />
      </div>
      <div className="bg-[#EFA0C6] text-[#2B2727] w-[604px] h-[100px] text-[36px] rounded-[126px] outline-none flex items-center justify-center cursor-pointer">
        Dəri tipini müəyyən et
      </div>
      <img src={logo} alt="" className="fixed -bottom-8 -right-8" />
    </div>
  );
}

export default HomePage;
