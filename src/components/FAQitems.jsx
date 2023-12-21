import PropTypes from "prop-types";

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className="flex faqs-start justify-between gap-6 mx-8 sm:mx-32 md:mx-36 lg:mx-56 transition-all duration-300 ease-in-out">
    <div className="flex flex-col gap-4 w-4/5">
      <span className="text-[#1F2937] font-Satoshi text-xl font-medium leading-normal">
        {faq.question}
      </span>
      {isOpen ? (
        <span className="text-[#6B7280] font-Satoshi text-base font-medium leading-normal">
          {faq.answer}
        </span>
      ) : null}
    </div>

    <img
      className="w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-100"
      src={isOpen ? "./minus-circle.svg" : "./plus-circle.svg"}
      alt={isOpen ? "minus-circle" : "plus-circle"}
      onClick={onClick}
    />
  </div>
);

FAQItem.propTypes = {
  faq: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FAQItem;
