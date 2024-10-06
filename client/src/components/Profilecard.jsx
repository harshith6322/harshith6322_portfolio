import Button from "./Button";

function Profilecard() {
  return (
    <div className=" w-[100%] h-[100%] flex max-sm:flex-col max-sm:p-3 max-sm:mt-10">
      <div className="w-[30%] h-[100%] flex items-center max-sm:w-full max-sm:justify-center max-sm:items-end max-sm:h-[35%] ">
        <div className="w-[350px] h-[350px] p-1 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 ml-5 max-sm:w-[200px] max-sm:h-[200px] ">
          <img
            src="/assets/MY.gif"
            alt="mypic"
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className=" w-[70%] h-full text-slate-300  flex p-5 max-sm:w-[100%] max-sm:h-[65%] max-sm:mt-0">
        <div className=" mt-28 ml-18  max-sm:mt-2 max-sm:ml-0">
          <h1 className=" font-extrabold text-5xl capitalize max-sm:text-3xl max-sm:text-center">
            Harshith reddy
          </h1>
          <p className=" text-lg text-justify mt-5 max-sm:text-[0.9rem]">
            I am a passionate{" "}
            <b className=" text-purple-600">full-stack developer</b> skilled in
            building dynamic, user-friendly web applications. On the frontend, I
            work with modern technologies like{" "}
            <b className=" text-purple-600">React, Next.js, and TypeScript, </b>
            ensuring smooth user experiences. On the backend, I utilize Node.js,
            Express, and databases like MongoDB and PostgreSQL to create
            scalable, efficient systems. I also have experience in{" "}
            <b className=" text-blue-500">DevOps</b>, working with{" "}
            <b className=" text-blue-500">AWS</b> services such as{" "}
            <b className=" text-blue-500">EC2, S3,</b> and Lambda for cloud
            infrastructure, combined with Docker and Kubernetes for
            containerization and orchestration. My goal is to deliver
            high-quality, maintainable code that drives results.
          </p>
          <div className=" mt-5 max-sm:flex max-sm:justify-center max-sm:mt-6 ">
            <Button name={"#Mern stack"} />
            <Button name={"#Devops"} />
            <Button name={"#Resume"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilecard;
