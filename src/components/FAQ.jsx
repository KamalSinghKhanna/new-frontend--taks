import { useState } from "react";
import FAQItem from "./FAQitems";
import { data } from "../assets/data";
const FAQ = () => {
    const [openQuestions, setOpenQuestions] = useState({});
  
   const handleToggleAnswer = (id) => {
     setOpenQuestions((prevOpenQuestions) => ({
       ...prevOpenQuestions,
       [id]: !prevOpenQuestions[id],
     }));
   };
  return (
    <div className="flex flex-col mt-40 gap-16" id="Faq">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[#101828] text-center font-Satoshi text-4xl md:text-[56px] font-bold leading-normal tracking-tighter">
          Frequently asked questions
        </span>
        <span className="text-[#667085] text-center font-Satoshi text-base sm:text-xl font-medium leading-normal px-6 sm:px-0">
          Everything you need to know about the product and billing.
        </span>
      </div>
      <div className="flex flex-col gap-12">
        {data?.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openQuestions[faq.id]}
            onClick={() => handleToggleAnswer(faq.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
