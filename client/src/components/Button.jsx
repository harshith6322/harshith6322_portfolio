// eslint-disable-next-line react/prop-types
function Button({ name }) {
  return (
    <a href="/assets/RES.pdf" target="_blank">
      <button className=" inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white z-10 ">
        <span className=" px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 max-sm:z-0 max-sm:px-4 max-sm:py-1">
          {name}
        </span>
      </button>
    </a>
  );
}

export default Button;
