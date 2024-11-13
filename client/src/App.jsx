/* eslint-disable react/no-unescaped-entities */
import gsap from "gsap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef, useState } from "react";

import Page_1 from "./pages/Page_1";
import Page_2 from "./pages/Page_2";
import Page_3 from "./pages/Page_3";
import Page_4 from "./pages/Page_4";
import Page_5 from "./pages/Page_5";
import Navbar from "./components/Navbar";

export default function App() {
  const loadingRef = useRef(null);
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);
  // State to control the loading visibility
  const [isLoading, setIsLoading] = useState(true);
  const [isBanner, setBanner] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1280) {
        setBanner(true);
      } else {
        // setIsLoading(true);
        setBanner(false);
      }
    };

    // Run on initial mount
    handleResize();
    // Attach event listener
    window.addEventListener("resize", handleResize);
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      setIsLoading(true);
    };
  }, []);

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
      {isBanner && (
        <>
          <Navbar zindex={true} />
          <section className="bg- w-screen h-screen bg-slate-950 fixed z-[1000] flex flex-row gap-1 justify-center items-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <p className="mb-4 text-3xl tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 md:text-4xl">
                  This portfolio is optimized for screens up to 1280px wide.
                  We're working on a layout enhancement for larger screens—stay
                  tuned!
                </p>
                <p className="mb-4 text-xl tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 md:text-2xl">
                  Feel free to contact me.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
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
