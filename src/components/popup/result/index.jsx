import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react';

function PopupResult() {
    return (
        <Popover className="h-screen p-5 flex justify-center items-center">
            <Popover.Button className="absolute z-1 ">Button</Popover.Button>

            <Popover.Panel>
                <div className='relative max-w-[840px] w-full h-auto bg-white shadow-box px-[60px] pt-[50px] pb-3.5 rounded-xl z-10'>
                    <div className='flex justify-between pb-[30px] items-center'>
                        <h1 className='font-bold text-2xl'>Nəticə</h1>
                        <Link to="/" className='w-[50px] h-[50px] bg-[#d9d9d9] hover:bg-white flex justify-center items-center rounded-full shadow-btn hover:shadow-box'>
                            <FontAwesomeIcon className='text-[30px] text-[#828282]' icon={faTimes} />
                        </Link>
                    </div>
                    <div className='px-2.5'>
                        <p className='text-lg'>Sizin dəri tipiniz qurudur. Bu mərhələdən sonra sizin baxış keçirdiyiniz məhsullarda əgər sizin dərinizə uyğundursa <span className='text-[#50AB64] underline'>Yaşıl</span> əksinə uyğun deyilsə <span className='text-[#ff3100] underline'>Qırmızı </span>teq ilə işarə olunacaqdır.</p>
                        <h1 className='font-bold text-lg pt-5'>Teqler:</h1>
                        <div className='flex gap-[15px] pt-3'>
                            <span className='px-5 py-2.5 rounded-lg text-white bg-[#50AB64]'>dəri tipinizə uyğundur</span>
                            <span className='px-5 py-2.5 rounded-lg text-white bg-[#FF3100]'>dəri tipinizə uyğun deyil</span>
                        </div>
                    </div>
                    <div className='py-[35px] bg-[#000] bg-opacity-20 rounded-xl mt-[30px] shadow-box'>
                        <h1 className='text-center text-xl font-bold px-2 md:text-2xl sm:text-xl'>Bu məlumat sizə faydalı oldumu?</h1>
                        <div className='flex justify-center items-center gap-[35px] pt-5'>
                            <button>
                                <FontAwesomeIcon className='text-[54px] text-[#50AB64]' icon={faThumbsUp} />
                            </button>
                            <button>
                                <FontAwesomeIcon className='text-[54px] text-[#FF3100]' icon={faThumbsDown} />
                            </button>
                        </div>
                    </div>
                    <div className='pt-[37px] flex justify-center items-center'>
                        <Link>
                            <button className='px-5 py-2.5 bg-[#56A8FF] hover:bg-[#5095df] shadow-lg hover:shadow-box rounded-xl text-white'>Ana menyuya qayıt</button>
                        </Link>
                    </div>
                </div>
            </Popover.Panel>
        </Popover>
    );
}

export default PopupResult;
