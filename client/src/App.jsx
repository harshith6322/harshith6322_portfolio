import gsap from "gsap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef, useState } from "react";

import Page_1 from "./pages/Page_1";
import Page_2 from "./pages/Page_2";
import Page_3 from "./pages/Page_3";
import Page_4 from "./pages/Page_4";
import Page_5 from "./pages/Page_5";

export default function App() {
  const loadingRef = useRef(null);
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);

  // State to control the loading visibility
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate the balls
    timeline
      .to(ball1Ref.current, {
        y: -40, // Ball 1 goes up
        duration: 0.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      })
      .to(
        ball2Ref.current,
        {
          y: 40, // Ball 2 goes down
          duration: 0.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
        "<"
      ); // Synchronize the two animations

    // Fade out the loading screen after 3 seconds (or any duration you choose)
    gsap.to(loadingRef.current, {
      delay: 3, // Duration of the loading animation
      opacity: 0,
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => {
        setIsLoading(false); // Hide the loading screen once the animation is done
      },
    });
  }, []);

  return (
    <>
      {/* Loading animation: only show it when isLoading is true */}
      {isLoading && (
        <div
          className="w-screen h-screen bg-black fixed z-[1000] flex flex-row gap-1 justify-center items-center"
          ref={loadingRef}
        >
          <div
            className="rounded-full w-[30px] h-[30px] bg-purple-600"
            ref={ball1Ref}
          ></div>
          <div
            className="rounded-full w-[30px] h-[30px] bg-blue-500"
            ref={ball2Ref}
          ></div>
        </div>
      )}

      {/* Main content of the application */}
      <div className="w-screen h-screen overflow-x-hidden bg-slate-900">
        <ToastContainer />
        <Page_1 />
        <Page_2 />
        <Page_3 />
        <Page_4 />
        <Page_5 />
      </div>
    </>
  );
}
