import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className=" bg-black text-white w-screen h-screen">
      <ToastContainer />

      <Navbar />
    </div>
  );
}
