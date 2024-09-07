import Sidebutton from "./Sidebutton";

function Sidebar() {
  return (
    <div className="w-[20%] h-[82vh] fixed top-20 left-5 rounded-lg bg-slate-800 flex flex-col items-start overflow-y-scroll ">
      <Sidebutton />
      <Sidebutton />
      <Sidebutton />
      <Sidebutton />
      <Sidebutton />
      <Sidebutton />
      <Sidebutton />
    </div>
  );
}

export default Sidebar;
