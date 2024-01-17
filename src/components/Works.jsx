
const Works = ({item}) => {
  return (
 
      <div className={`flex flex-col items-center justify-center rounded-lg h-60 px-6 ${item.bgColor} border`}>
        {/* <img
          src="/1.svg"
          alt="one"
          className="w-36 h-32 relative top-7 sm:top-16"
        /> */}
        <span className="text-white text-center font-Satoshi text-2xl md:text-3xl lg:text-4xl relative z-10 font-extrabold leading-normal tracking-tight">
          {item.title}
        </span>
        <p className="text-gray-100 text-center font-Satoshi text-base lg:text-lg font-medium leading-normal tracking-tight">
          {item.description}
        </p>
      </div>
 
  );
}

export default Works