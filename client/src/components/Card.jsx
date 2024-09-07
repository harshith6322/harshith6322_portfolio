// eslint-disable-next-line react/prop-types
function Card({ name, imge }) {
  return (
    <a href="" target="_blank">
      <div className=" w-[260px] h-[180px]  rounded-lg flex flex-col ">
        <img
          src={imge}
          alt="dall-e"
          className="w-[100%] h-[160px] object-cover object-center bg-white rounded-t-lg"
        />
        <div className="p-4 bg-white text-black rounded-b-lg ">
          <h1 className=" capitalize font-medium text-lg text-center">
            {name}
          </h1>
        </div>
      </div>
    </a>
  );
}

export default Card;
