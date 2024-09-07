import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Page_1 from "./pages/Page_1";
import Page_2 from "./pages/Page_2";
import Page_3 from "./pages/Page_3";

export default function App() {
  return (
    <div className=" w-screen h-screen  overflow-x-hidden bg-slate-900">
      <ToastContainer />
      <Page_1 />
      <Page_2 />
      <Page_3 />
    </div>
  );
}
