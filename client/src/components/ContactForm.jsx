import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { z } from "zod";

import axios from "axios";
import { API } from "../../config";

// eslint-disable-next-line react/prop-types
function ContactForm({ setopen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setisloading] = useState(false);

  const zodSchema = z.object({
    name: z.string().min(3, { message: "Invalid name" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(3, { message: "Invalid message" }),
  });

  // Handle form submission
  async function Handlesubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const { success, error } = zodSchema.safeParse({
      name,
      email,
      message,
    });

    if (success) {
      setisloading(true);
      try {
        // Directly call the axios.post with await inside the try block
        const ress = await axios.post(API, {
          fullname: name,
          email: email,
          message: message,
        });

        if (ress.status === 200) {
          setisloading(false);
          toast(`✔️ ${ress.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
          });
        }
      } catch (error) {
        // Catch errors from axios and other issues
        setisloading(false);
        if (error.response && error.response.status === 429) {
          toast(`❌ Too Many Requests`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          // For other errors
          toast.error("Failed to send message.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } finally {
        setisloading(false);
      }
    } else {
      // Handle validation errors, e.g., show error messages
      setisloading(false);
      const error1 = error.issues[0].message;
      toast(`❌ ${error1}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
    }
  }

  return (
    <>
      <div className=" fixed right-5 top-5 cursor-pointer">&#x2716;</div>
      <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center backdrop-blur-lg bg-black/50 z-50">
        <button onClick={() => setopen((o) => !o)}>
          <div className=" fixed right-5 top-5 cursor-pointer">&#x2716;</div>
        </button>
        <div
          className="w-full max-w-lg p-6 rounded-md"
          style={{ backgroundColor: "#111117" }}
        >
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
            placeholder="name@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
            placeholder="Leave a comment..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white w-full"
            type="submit"
            onClick={Handlesubmit}
            disabled={isLoading ? true : false}
          >
            <span className="relative px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full text-base">
              {isLoading ? "Sending..." : "Submit"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
