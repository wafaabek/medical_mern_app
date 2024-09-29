import { useState } from 'react'; // eslint-disable react/prop-types
import {AiOutlineMinus ,AiOutlinePlus} from "react-icons/ai";

const FaqItem = ({ item }) => {
const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
  <div className="flex items-center justify-between gap-5" onClick={toggleAccordion}>
    <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
      {item.question}
    </h4>
    <div>
      <div className={`${
        isOpen ? "bg-primaryColor text-white border-none" : ""
      } w-7 lg:w-8 h-7 lg:h-8 border border-solid border-[#14F121] rounded flex items-center justify-center`}>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
    </div>
  </div>
  {isOpen && (
    <div className="mt-4">
      <p className="">{item.content}</p>
    </div>
  )}
</div>

  );
};

export default FaqItem;
