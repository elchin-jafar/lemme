import { useState } from "react";
import logo from "../../assets/logo2.png";
import model_S from "../../assets/models/modelS.png";
import model_M from "../../assets/models/modelM.png";
import model_L from "../../assets/models/modelL.png";
import compressed_S from "../../assets/models/compressed_modelS.png";
import compressed_M from "../../assets/models/compressed_modelM.png";
import compressed_L from "../../assets/models/compressed_modelL.png";
import ProgressiveImg from "../../components/ProgressiveImg/ProgressiveImg";
import ResultModal from "../../components/ResultModal/ResultModal";
import { useResultModalStore } from "../../store/resultModalStore";
import { useUserSkinType } from "../../store/userSkinType";
import { determineSkinType } from "../../utils/apiUtils";
import { Spin, message } from "antd";

const questions = [
  {
    question: "1. Təmizləndikdən sonra dəriniz necə hiss edir?",
    answers: [
      "Sıx və quru",
      "Rahat və balanslı",
      "Yağlı və ya nəzərəçarpan parıltı ilə",
    ],
  },
  {
    question: "2. Nə qədər tez-tez qırışlar və ya ləkələr yaşayırsınız?",
    answers: ["Nadir hallarda və ya heç vaxt", "Hərdən", "Tez-tez"],
  },
  {
    question: "3. Dəriniz günəşə necə reaksiya verir?",
    answers: [
      "Asanlıqla yanır, həssasdır",
      "Tans yavaş-yavaş, normal",
      "Nadir hallarda yanır, tez-tez qaralır, yağlıdır",
    ],
  },
  {
    question: "4. Dərinizin quruluşu necədir?",
    answers: [
      "İncə məsamələr, hamar tekstura",
      "Orta məsamələr, balanslaşdırılmış tekstura",
      "Genişlənmiş məsamələr, kobud tekstura",
    ],
  },
  {
    question:
      "5. Nəmləndirici tətbiq etdikdən bir neçə saat sonra dəriniz necə hiss edir?",
    answers: ["Hələ sıx və quru", "Nəmlənmiş və rahatdır", "Yağlı və ya yağlı"],
  },
];

function TestPage({ productId }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [testResult, setTestResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { open: openModal } = useResultModalStore((state) => state);

  const { setSkinType } = useUserSkinType((state) => state);

  function handleAnswer(questionIndex, answerIndex = 0) {
    const key = `s${questionIndex + 1}`;
    const value = answerIndex + 1;
    setSelectedAnswers((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  }

  console.log("selectedAnswers", selectedAnswers);
  function getAnswersCount() {
    const counts = { A: 0, B: 0, C: 0 };
    for (const key of Object.values(selectedAnswers)) {
      if (key === 1) counts["A"]++;
      else if (key === 2) counts["B"]++;
      else if (key === 3) counts["C"]++;
    }
    // let mostFrequentVariant = "A";
    // let maxCount = counts["A"];
    // if (counts["B"] > maxCount) {
    //   mostFrequentVariant = "B";
    //   maxCount = counts["B"];
    // }
    // if (counts["C"] > maxCount) {
    //   mostFrequentVariant = "C";
    // }
    const result = `${counts["A"]}${counts["B"]}${counts["C"]}`;
    return result;
  }

  async function getAnswer() {
    const answersCount = getAnswersCount();
    try {
      setIsLoading(true);
      const res = await determineSkinType(answersCount);
      // const data = await res.json();
      console.log("determined skin type", res.data.type);
      setTestResult(res.data.type);
      setSkinType(res.data.type.toLowerCase());
      openModal();
    } catch (err) {
      console.log(err);
      message.error("Zəhmət olmasa suallara cavab verin");
    } finally {
      setIsLoading(false);
    }
    console.log("answersCount", answersCount);

    // openModal({ });
  }

  return (
    <div className="w-full h-auto px-16 pb-[15px] bg-gradient-to-b from-[#b0ddff] to-[#ffe8f5]">
      <div className="max-w-[1500px] w-full mx-auto">
        <div className="flex justify-between items-center ">
          <h2 className="text-[20px] sm:text-[30px] font-bold">
            Dəri tipini müəyyən etmək üçün test
          </h2>
          <img
            src={logo}
            alt="logo"
            className="w-[200px] h-[100px] hidden lg:flex"
          />
        </div>

        <p className="text-[20px] hidden md:flex font-normal">
          Burada 4 dəri növündən sizə hansının məxsus olacağını biləcəyik:
        </p>

        <div className="flex justify-between gap-[43px] pt-[20px]">
          <div className="max-w-[677px] w-full px-1">
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
        {isLoading ? (
          <div className="w-[13.9rem] h-[5rem] text-center ">
            <Spin />
          </div>
        ) : (
          <div
            onClick={getAnswer}
            className="px-[2.9rem] py-[10px] mt-[10px] text-[2rem] font-bold text-white bg-[#56A8FF] rounded-[1.5rem] w-fit cursor-pointer "
          >
            Cavabı al
          </div>
        )}

        <ResultModal
          productId={productId}
          selectedAnswers={selectedAnswers}
          // selectedVariant={getMostFrequentVariant()}
          testResult={testResult}
        />
      </div>
    </div>
  );
}

function Models() {
  return (
    <>
      <div className="relative max-w-[603px] h-[548px] mt-[10px] w-full hidden lg:flex">
        <div className="p-[3rem] border border-black rounded-full max-w-[204px]  xl:max-w-[284px] w-full  bg-[#F6EFF2] absolute lg:left-[80px] lg:bottom-[170px] xl:left-[96px] xl:bottom-[2rem] z-[3]">
          <ProgressiveImg src={model_S} placeholderSrc={compressed_S} alt="" />
        </div>
        <div className="p-[3rem] border border-black rounded-full max-w-[258px]  xl:max-w-[318px] w-full  bg-[#F6EFF2] absolute xl:left-0  z-[2] ">
          <ProgressiveImg src={model_M} placeholderSrc={compressed_M} alt="" />
        </div>
        <div className="p-[3rem] border border-black rounded-full max-w-[326px] xl:max-w-[386px] w-full bg-[#F6EFF2] absolute lg:right-[20px] lg:top-[30px] xl:right-0 xl:top-[59px] z-[1]">
          <ProgressiveImg src={model_L} placeholderSrc={compressed_L} alt="" />
        </div>
      </div>
    </>
  );
}

function Question({ q, index, handleAnswer }) {
  const [selected, setSelected] = useState(null);

  function handleClick(answerIndex) {
    setSelected(answerIndex);
    handleAnswer(index, answerIndex);
  }

  return (
    <div>
      <p className="text-[17px] sm:text-[25px] max-w-[677px] w-full font-bold">
        {q.question}
      </p>
      <div className="flex gap-x-[1.5rem]">
        {q.answers.map((answer, answerIndex) => (
          <p
            key={answerIndex}
            className={`text-[12px] flex items-center text-center sm:text-[16px] font-normal py-[7px] px-[10px] my-[20px] cursor-pointer rounded-[3.5rem] w-fit ${
              selected === answerIndex
                ? "bg-[#EFA0C6] text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handleClick(answerIndex)}
          >
            {answer}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TestPage;
