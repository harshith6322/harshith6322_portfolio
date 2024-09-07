import Boxmodel from "./Boxmodel";
import Button_1 from "./Button_1";

function Box() {
  return (
    <div className=" w-full h-full ">
      <h1 className=" text-4xl font-medium capitalize text-center  max-sm:text-3xl max-sm:p-2.5 max-sm:mt-2">
        what i know
      </h1>
      <div className=" w-full h-full flex max-sm:flex-col">
        <Boxmodel heading={"Frontend"}>
          <Button_1 name={"html"} border={"b"} />
          <Button_1 name={"css"} border={"v"} />
          <Button_1 name={"js"} border={"b"} />
          <Button_1 name={"react.js"} border={"v"} />
          <Button_1 name={"typescript"} />
          <Button_1 name={"next.js"} />
          <Button_1 name={"tailwind"} border={"b"} />
        </Boxmodel>
        <Boxmodel heading={"Backend"}>
          <Button_1 name={"node"} border={"v"} />
          <Button_1 name={"express.js"} border={"b"} />
          <Button_1 name={"hono.js"} />
          <Button_1 name={"jwt"} border={"v"} />
          <Button_1 name={"nextauth"} />
        </Boxmodel>
        <Boxmodel heading={"Devops"}>
          <Button_1 name={"docker"} border={"v"} />
          <Button_1 name={"git"} border={"b"} />
          <Button_1 name={"ci/cd"} border={"v"} />
          <Button_1 name={"k8s"} />
          <Button_1 name={"aws"} border={"b"} />
          <Button_1 name={"kafka"} />
        </Boxmodel>
        <Boxmodel heading={"Other"}>
          <Button_1 name={"cmd"} border={"b"} />
          <Button_1 name={"postmanapi"} border={"b"} />
          <Button_1 name={"restapi"} border={"v"} />
          <Button_1 name={"mongodb"} border={"b"} />
          <Button_1 name={"postqres"} border={"v"} />
          <Button_1 name={"vscode"} border={"b"} />
          <Button_1 name={"git hub"} border={"v"} />
        </Boxmodel>
      </div>
    </div>
  );
}

export default Box;
