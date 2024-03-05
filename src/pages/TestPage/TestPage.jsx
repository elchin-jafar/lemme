import logo from "../../assets/logo2.png";
import model_S from "../../assets/models/modelS.png";
import model_M from "../../assets/models/modelM.png";
import model_L from "../../assets/models/modelL.png";

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

      <div className="max-h-[60%] flex 2xl:gap-[20rem]">
        <div className="overflow-y-scroll scrollbar-hide  max-w-[50%] mt-[3.5rem]">
          {questions.map((q, i) => (
            <div key={i}>
              <p className="text-[2.5rem] font-bold">{q.question}</p>
              <div className="flex gap-x-[1.5rem]">
                {q.answers.map((a, i) => (
                  <p
                    key={i}
                    className="text-[2rem] font-normal py-[1rem] px-[2rem] rounded-[3.5rem] bg-white w-fit"
                  >
                    {a}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Models />
      </div>

      <div className="px-[2.9rem] py-[1rem] text-[2rem] font-bold text-white bg-[#56A8FF] rounded-[1.5rem] w-fit cursor-pointer mt-[4rem]">
        Cavabı al
      </div>
    </div>
  );
}

export default TestPage;

function Models() {
  return (
    <>
      <div className="relative w-[61rem] h-[55rem] 2xl:w-[61rem] 2xl:h-[55rem] border border-yellow-400">
        <div className="p-[3rem] border border-black rounded-full w-max bg-[#F6EFF2] absolute left-[50%] -translate-x-1/2 bottom-0 z-[3]">
          <img src={model_S} alt="" />
        </div>
        <div className="p-[3rem] border border-black rounded-full w-max bg-[#F6EFF2] absolute left-0 2xl:-top-[2rem] z-[2]">
          <img src={model_M} alt="" />
        </div>
        <div className="p-[3rem] border border-black rounded-full w-max bg-[#F6EFF2] absolute right-0 top-0 z-[1]">
          <img src={model_L} alt="" />
        </div>
      </div>
    </>
  );
}
