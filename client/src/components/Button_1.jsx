// eslint-disable-next-line react/prop-types
function Button_1({ name, border }) {
  return (
    <div
      className={`w-[110px] h-[40px] text-base font-medium bg-slate-900 text-white text-center rounded-lg flex items-center justify-center uppercase mt-3 flex-wrap max-sm:w-[110px] max-sm:h-[33px] max-sm: ${
        border === "b"
          ? "border border-blue-500"
          : border === "v"
          ? "border border-violet-600"
          : ""
      }`}
    >
      {name}
    </div>
  );
}

export default Button_1;
