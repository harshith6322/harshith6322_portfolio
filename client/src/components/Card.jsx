// eslint-disable-next-line react/prop-types
function Card({ name, imge, src }) {
  return (
    <a href={src} target="_blank" className=" h-[180px]">
      <div className=" w-[260px] h-[200px]  rounded-lg flex flex-col  max-sm:w-[350px]">
        <img
          src={imge}
          alt={name}
          className="w-[100%] h-[165px] object-cover object-center bg-white rounded-t-lg max-lg:w-[100%] max-lg:h-[100%]"
        />
        <div className="p-4 bg-white text-black rounded-b-lg">
          <h1 className=" capitalize font-medium text-lg text-center">
            {name}
          </h1>
        </div>
      </div>
    </a>
  );
}

export default Card;
