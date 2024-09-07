import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import Profilecard from "../components/Profilecard";

function Page_1() {
  return (
    <>
      <div className=" text-white w-full h-full ">
        <Navbar />
        <Profilecard />
        {/* <Sidebar /> */}
      </div>
    </>
  );
}

export default Page_1;
