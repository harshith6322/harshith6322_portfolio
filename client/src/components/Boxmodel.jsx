// eslint-disable-next-line react/prop-types
function Boxmodel({ heading, children }) {
  return (
    <div className="w-[23%] h-[80%] bg-slate-800 ml-5 mt-14 p-5 rounded-md overflow-hidden">
      <h1 className=" text-2xl text-white  text-center">{heading}</h1>
      <div className="w-full h-full  flex flex-wrap flex-col mt-2 items-center">
        {children}
      </div>
    </div>
  );
}

export default Boxmodel;
