// eslint-disable-next-line react/prop-types
function Icons({ border, src, children }) {
  return (
    <div
      className={`w-[100px] h-[100px] rounded-full border-2
        flex justify-center items-center ${
          border === "v"
            ? " border-violet-600"
            : border === "b"
            ? "border-blue-500"
            : ""
        } `}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
        href={src}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={`${border === "v" ? "#9333EA" : "#3B82F6"} `}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin"
        >
          {children}
        </svg>
      </a>
    </div>
  );
}

export default Icons;
