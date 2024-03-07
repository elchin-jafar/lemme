import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { Profile, SearchNormal1 } from "iconsax-react";
import { Link } from "react-router-dom";
import { useSkinTypeModalStore } from "../../store/skinTypeModalStore";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import SkinTypeModal from "../../components/SkinTypeModal/SkinTypeModal";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

function HomePage() {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");
  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useSkinTypeModalStore((state) => state);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="bg-gradient-to-r from-[#E5F3FF] to-[#D8E3FF] w-screen h-screen pt-[4rem] flex flex-col items-center justify-items-center">
      <Link
        to="admin"
        className="bg-white p-2.5 rounded-[1.5rem] fixed top-[4rem] right-[10.4rem]"
      >
        <Profile color="#85B6FF" />
      </Link>
      <img src={logo2} alt="" className="w-[42.9rem]" />
      {/* <div className="relative bg-[#EFA0C6] w-[60.4rem] h-[10rem] rounded-[12.6rem] mb-5 flex justify-center items-center">
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
      </div> */}

      <div className="relative bg-[#EFA0C6] w-[60.4rem] h-[10rem] rounded-[12.6rem] mb-5 flex justify-center items-center">
        <Combobox value={selected} onChange={setSelected}>
          <div className="mt-1">
            <div className="bg-[#EFA0C6] text-[#2B2727] rounded-[12.6rem] placeholder-[#2B2727] text-center  text-[3.6rem] outline-none max-w-[80%]">
              <Combobox.Input
                className="bg-[#EFA0C6] text-[#2B2727] rounded-[12.6rem] placeholder-[#2B2727] text-center  text-[3.6rem] outline-none"
                placeholder="Məhsulun adı"
                // displayValue={(person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-24 flex items-center">
                <SearchNormal1 size={37} color="#2D264B" />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute left-0 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-not-allowed text-3xl select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Link onClick={openModal}>
                      <Combobox.Option
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 text-3xl ${
                            active ? "bg-teal-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                        )}
                        {/* {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null} */}
                      </Combobox.Option>
                    </Link>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
      <SkinTypeModal />
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
