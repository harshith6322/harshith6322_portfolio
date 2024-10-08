import Card from "../components/Card";

function Page_3() {
  return (
    <div className=" w-full h-full  text-white  max-sm:h-[170%]">
      <div className="max-sm:mt-20">
        <h1 className="text-4xl font-medium capitalize text-center mt-5 ">
          Projects
        </h1>
      </div>
      <div className=" flex w-full h-full gap-6 mt-28 flex-wrap justify-center  px-8 max-sm:mt-10 max-sm:gap-0 max-sm:px-4">
        <Card
          name={"dall-e clone"}
          imge={
            "https://techcrunch.com/wp-content/uploads/2019/03/lp-logo-3.jpg"
          }
          src={"https://github.com/harshith6322/DALL-E_MERN-APP"}
        />
        <Card
          name={"Medium_clone"}
          imge={
            "https://seeklogo.com/images/M/medium-2020-new-logo-4DD1CA1BFF-seeklogo.com.png"
          }
          src={"https://github.com/harshith6322/Medium_clone"}
        />
        <Card
          name={"Paytm_Bank"}
          imge={
            "https://pwebassets.paytm.com/commonwebassets/ir/images/press-kit/brand.png"
          }
          src={"https://github.com/harshith6322/Paytm_Bank"}
        />
        <Card
          name={"Notes App"}
          imge={
            "https://png.pngtree.com/png-vector/20221110/ourmid/pngtree-neon-education-icon-for-web-and-mobile-computer-vector-note-vector-png-image_41057604.jpg"
          }
          src={"https://github.com/harshith6322/NOTES_APP_BACKEND"}
        />
      </div>
    </div>
  );
}

export default Page_3;
