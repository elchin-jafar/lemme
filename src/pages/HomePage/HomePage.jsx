import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { Profile, SearchNormal1 } from "iconsax-react";
import { Link } from "react-router-dom";
import { useSkinTypeModalStore } from "../../store/skinTypeModalStore";
import { Fragment, useState, useCallback, useEffect, useRef } from "react";
import { Combobox, Transition } from "@headlessui/react";
import SkinTypeModal from "../../components/SkinTypeModal/SkinTypeModal";
import { getProductByName } from "../../utils/apiUtils";
import debounce from "../../utils/debounce";

function HomePage() {
  const [selectedProductID, setSelectedProductID] = useState(null); // State to store selected product ID
  const [results, setResults] = useState([]);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputClick = () => {
    setShowPlaceholder(true);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowPlaceholder(false);
    }
  };

  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useSkinTypeModalStore((state) => state);

  const debounceOnChange = useCallback(debounce(onChange, 300), []);

  const searchProduct = async (value) => {
    const response = await getProductByName(value);
    const data = response.data;
    console.log("data", data);
    setResults(
      data.map((res) => {
        const { id, name } = res;
        return { id, name };
      })
    );
  };

  console.log("results", results);
  console.log("selected", selectedProductID);

  function onChange(value) {
    if (!value) setResults([]);
    value && searchProduct(value);
  }

  return (
    <div className="bg-gradient-to-r from-[#E5F3FF] to-[#D8E3FF] w-screen h-screen pt-[4rem] flex flex-col items-center justify-items-center">
      <Link
        to="admin/main"
        className="bg-white p-2.5 rounded-[1.5rem] fixed top-[4rem] right-[10.4rem]"
      >
        <Profile color="#85B6FF" />
      </Link>
      <img src={logo2} alt="" className="w-[42.9rem]" />

      <div className="relative z-20 bg-transparent sm:w-[60.4rem]  h-[100px] sm:h-[9.1rem] rounded-[12.6rem] mb-5 flex justify-center items-center">
        <Combobox value={selectedProductID} onChange={setSelectedProductID}>
          <div className="mt-1">
            <div className="bg-[#EFA0C6] text-[#2B2727] rounded-[12.6rem] placeholder-[#2B2727] text-center text-[20px]  sm:text-[3.6rem] outline-none max-w-[80%]">
              <Combobox.Input
                ref={inputRef}
                className="bg-[#EFA0C6] text-[#2B2727] sm:w-[60.4rem] w-[300px] h-[100px] sm:h-[9.6rem] rounded-[12.6rem] placeholder-[#2B2727] text-center text-[20] sm:text-[3.6rem] focus:bg-[#EFA0C6] outline-none"
                placeholder={showPlaceholder ? "" : "Məhsulun adı"}
                onClick={handleInputClick}
                onChange={(e) => debounceOnChange(e.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-24 flex items-center">
                <SearchNormal1
                  className="sm:text-[37px] text-[20px]"
                  color="#2D264B"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              // afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute left-0 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {results?.length === 0 ? (
                  <div className="relative cursor-not-allowed text-3xl select-none px-4 py-2  bg-white">
                    Nothing found.
                  </div>
                ) : (
                  results.map((product) => (
                    <Link onClick={openModal} key={product.id}>
                      <Combobox.Option
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 text-[20px] sm:text-3xl ${
                            active
                              ? "bg-teal-600 text-white"
                              : "bg-white text-gray-900"
                          }`
                        }
                        value={product.id}
                      >
                        {({ selected, active }) => (
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {product.name}
                          </span>
                        )}
                      </Combobox.Option>
                    </Link>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
      <SkinTypeModal productId={selectedProductID} />
      <Link to="test" className="relative z-10">
        <div className="bg-[#EFA0C6] text-[#2B2727] sm:w-[60.4rem] w-[300px] h-[10rem] text-[20px] sm:text-[3.6rem] rounded-[12.6rem] outline-none flex items-center justify-center cursor-pointer">
          Dəri tipini müəyyən et
        </div>
      </Link>
      <img src={logo} alt="" className="fixed -bottom-8 -right-8 z-0" />
    </div>
  );
}

export default HomePage;

