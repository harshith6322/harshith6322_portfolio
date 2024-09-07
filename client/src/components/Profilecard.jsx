import Button from "./Button";

function Profilecard() {
  return (
    <div className=" w-[100%] h-[100%] flex">
      <div className="w-[30%] h-[100%] flex items-center">
        <div className="w-[350px] h-[350px] p-1 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 ml-5 ">
          <img
            src="/assets/MY.gif"
            alt="mypic"
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className=" w-[70%] h-full text-slate-300  flex p-5">
        <div className=" mt-28 ml-18  ">
          <h1 className=" font-extrabold text-5xl capitalize">
            Harshith reddy
          </h1>
          <p className=" text-lg text-justify mt-5">
            I am a passionate{" "}
            <b className=" text-purple-600">full-stack developer</b> skilled in
            building dynamic, user-friendly web applications. On the frontend, I
            work with modern technologies like{" "}
            <b className=" text-purple-600">React, Next.js, and TypeScript,</b>
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
          <div className=" mt-5">
            <Button name={"#Mern stack"} />
            <Button name={"#Devops"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilecard;
