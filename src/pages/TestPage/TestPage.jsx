import logo from "../../assets/logo2.png";
import model_S from "../../assets/models/modelS.png";
import model_M from "../../assets/models/modelM.png";
import model_L from "../../assets/models/modelL.png";
import compressed_S from "../../assets/models/compressed_modelS.png";
import compressed_M from "../../assets/models/compressed_modelM.png";
import compressed_L from "../../assets/models/compressed_modelL.png";
import ProgressiveImg from "../../components/ProgressiveImg/ProgressiveImg";
import { useState } from "react";
import ResultModal from "../../components/ResultModal/ResultModal";
import { useResultModalStore } from "../../store/resultModalStore";

const questions = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers: ["uno", "dos", "tres"],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers: ["uno", "dos", "tres"],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers: ["uno", "dos", "tres"],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers: ["uno", "dos", "tres"],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers: ["uno", "dos", "tres"],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers: ["uno", "dos", "tres"],
  },
];

function TestPage() {
  const [q, setQ] = useState({});

  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useResultModalStore((state) => state);

  function handleAnswer(questionIndex, answerIndex = 0) {
    const key = `s${questionIndex + 1}`;
    const value = answerIndex + 1;
    setQ((prevState) => ({ ...prevState, [key]: value }));
  }
  return (
    <div className="bg-gradient-to-r from-[#E5F3FF] to-[#D8E3FF] w-full h-auto pt-20 px-16 pb-14">
      <div className="max-w-[1500px] w-full mx-auto">
        <div className="flex justify-between items-center ">
          <h2 className="text-[25px] sm:text-[60px] font-bold">
            Dəri tipini müəyyən etmək üçün test
          </h2>
          <img
            src={logo}
            alt="logo"
            className="w-[22rem] h-[13.9rem] hidden lg:flex"
          />
        </div>
        
        <p className="text-[25px] hidden md:flex font-normal">
          Burada 4 dəri növündən sizə hansının məxsus olacağını biləcəyik:
        </p>

        <div className="flex justify-between gap-[43px] pt-[50px]">
          <div className="max-w-[677px] w-full px-2.5">
            {questions.map((q, index) => (
              <Question
                q={q}
                index={index}
                handleAnswer={handleAnswer}
                key={index}
              />
            ))}
          </div>
          <Models />
        </div>
        <div
          onClick={openModal}
          className="px-[2.9rem] py-[1rem] text-[2rem] font-bold text-white bg-[#56A8FF] rounded-[1.5rem] w-fit cursor-pointer mt-[4rem]"
        >
          Cavabı al
        </div>
        <ResultModal />
      </div>
    </div>
  );
}

export default TestPage;

function Models() {
  return (
    <>
      <div className="relative max-w-[603px] h-[548px] mt-[122px] w-full hidden lg:flex">
        <div className="p-[3rem] border border-black rounded-full max-w-[204px]  xl:max-w-[284px] w-full  bg-[#F6EFF2] absolute lg:left-[80px] lg:bottom-[170px] xl:left-[96px] xl:bottom-[2rem] z-[3]">
          <ProgressiveImg
            src={model_S}
            placeholderSrc={compressed_S}
            alt=""
          />
        </div>
        <div className="p-[3rem] border border-black rounded-full max-w-[258px]  xl:max-w-[318px] w-full  bg-[#F6EFF2] absolute xl:left-0  z-[2] ">
          <ProgressiveImg
            src={model_M}
            placeholderSrc={compressed_M}
            alt=""
          />
        </div>
        <div className="p-[3rem] border border-black rounded-full max-w-[326px] xl:max-w-[386px] w-full bg-[#F6EFF2] absolute lg:right-[20px] lg:top-[30px] xl:right-0 xl:top-[59px] z-[1]">
          <ProgressiveImg
            src={model_L}
            placeholderSrc={compressed_L}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

function Question({ q, index, handleAnswer }) {
  const [selected, setSelected] = useState();
  function handleClick(index, i) {
    handleAnswer(index, i);
    setSelected(i);
  }
  return (
    <>
      <div>
        <p className="text-[17px] sm:text-[25px] max-w-[677px] w-full font-bold">{q.question}</p>
        <div className="flex gap-x-[1.5rem]">
          {q.answers.map((a, i) => (
            <p
              key={i}
              className={`text-[12px] sm:text-[20px] font-normal py-[10px] px-[20px] my-[20px] cursor-pointer rounded-[3.5rem] w-fit ${
                selected == i
                  ? "bg-[#EFA0C6] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleClick(index, i)}
            >
              {a}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
