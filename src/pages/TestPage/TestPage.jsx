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
    <div className="bg-gradient-to-r from-[#E5F3FF] to-[#D8E3FF] w-screen h-screen pt-20 pl-28 pb-[7rem]">
      <h2 className="text-[6rem] font-bold">
        Dəri tipini müəyyən etmək üçün test
      </h2>
      <img
        src={logo}
        alt="logo"
        className="w-[22rem] h-[13.9rem] fixed right-[7rem] top-[4rem]"
      />
      <p className="text-[2.5rem] font-normal">
        Burada 4 dəri növündən sizə hansının məxsus olacağını biləcəyik:
      </p>

      <div className="max-h-[60%] flex gap-[10rem] 2xl:gap-[20rem]">
        <div className="overflow-y-scroll scrollbar-hide  max-w-[50%] mt-[3.5rem]">
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
  );
}

export default TestPage;

function Models() {
  return (
    <>
      <div className="relative w-[55rem] h-[48rem] 2xl:w-[61rem] 2xl:h-[55rem]">
        <div className="p-[3rem] border border-black rounded-full w-[26rem] 2xl:w-max bg-[#F6EFF2] absolute left-[50%] -translate-x-1/2 bottom-0 z-[3]">
          <ProgressiveImg src={model_S} placeholderSrc={compressed_S} alt="" />
        </div>
        <div className="p-[3rem] border border-black rounded-full w-[29rem] 2xl:w-max bg-[#F6EFF2] absolute left-0 -top-[2rem] z-[2]">
          <ProgressiveImg src={model_M} placeholderSrc={compressed_M} alt="" />
        </div>
        <div className="p-[3rem] border border-black rounded-full w-[36rem] 2xl:w-max bg-[#F6EFF2] absolute right-0 top-0 z-[1]">
          <ProgressiveImg src={model_L} placeholderSrc={compressed_L} alt="" />
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
        <p className="text-[2.5rem] font-bold">{q.question}</p>
        <div className="flex gap-x-[1.5rem]">
          {q.answers.map((a, i) => (
            <p
              key={i}
              className={`text-[2rem] font-normal py-[1rem] px-[2rem] cursor-pointer rounded-[3.5rem] w-fit ${
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
