// eslint-disable-next-line react/prop-types
function Boxmodel({ heading, children }) {
  return (
    <div
      className="w-[23%] h-[80%] bg-slate-800 ml-5 mt-10 p-5 rounded-md overflow-hidden 
      max-sm:w-full max-sm:h-[200px] max-sm:ml-0 max-sm:mt-1 max-sm:p-5 max-sm:bg-transparent max-sm:flex-wrap"
    >
      <h1 className="text-2xl text-white text-center max-sm:text-lg max-sm:font-extrabold">
        {heading}
      </h1>
      <div
        className="w-full h-full flex flex-col items-center  
        max-sm:h-auto max-sm:flex-row max-sm:w-full max-sm:justify-start max-sm:space-x-2  flex-wrap max-sm:px-1 max-sm:gap-1"
      >
        {children}
      </div>
    </div>
  );
}

export default Boxmodel;
