import Card from "../components/Card";

function Page_3() {
  return (
    <div className=" w-full h-full  text-white  ">
      <div className="mt-10">
        <h1 className="text-4xl font-medium capitalize text-center mt-5">
          Projects
        </h1>
      </div>
      <div className=" flex w-full h-full gap-5 mt-28 flex-wrap justify-center  px-10 ">
        <Card
          name={"dall-e clone"}
          imge={
            "https://techcrunch.com/wp-content/uploads/2019/03/lp-logo-3.jpg"
          }
        />
        <Card
          name={"dall-e clone"}
          imge={
            "https://techcrunch.com/wp-content/uploads/2019/03/lp-logo-3.jpg"
          }
        />
        <Card
          name={"dall-e clone"}
          imge={
            "https://techcrunch.com/wp-content/uploads/2019/03/lp-logo-3.jpg"
          }
        />
        <Card
          name={"dall-e clone"}
          imge={
            "https://techcrunch.com/wp-content/uploads/2019/03/lp-logo-3.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Page_3;
