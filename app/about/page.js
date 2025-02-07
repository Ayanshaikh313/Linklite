"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="container md:mx-auto px-4 md:ml-0 ml-14">
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold my-8 text-center">LinkLite: About Us</h1>
        <span className="flex flex-col">
          <p className="text-xl mb-12 text-center ">
            At Linklite, we believe in the power of simplicity. Our mission is
            to make sharing information online effortless and enjoyable. We
            provide a fast and reliable URL shortener that transforms lengthy
            web addresses into concise, easy-to-remember links.
          </p>
        </span>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div
            className={`bg-green-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300 ${
              isHovering ? "bg-green-200" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>Simplicity</span>
          </div>
          <div
            className={`bg-green-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300 ${
              isHovering ? "bg-green-200" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>Reliability</span>
          </div>
          <div
            className={`bg-green-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300 ${
              isHovering ? "bg-green-200" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>Speed</span>
          </div>
          <div
            className={`bg-green-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300 ${
              isHovering ? "bg-green-200" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>Security</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Meet Our Team</h2>
        <div className="w-64 h-48 bg-gray-200 rounded-lg">
          <Image width={500} height={300} src={"/vector.jpg"} alt="just added bhai"  />
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg">
            <p className="flex flex-col gap-4 font-serif ">
            Using Treat-Me-A-Chai has made treating my friends to small surprises so much easier! The ability to send money, follow friends, and create personal accounts creates a unique and fun way to share kindness digitally. It's a fantastic blend of social connection and simple payment management. Highly recommend it for anyone who enjoys staying connected with thoughtful gestures."
            — User Testimonial
            <Link target="_blank" href="https://github.com/Ayanshaikh313/ChatApp" >
            <button className=" ml-40 my-3  px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-black text-white  transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(0,220,0),2px_2px_rgba(0,220,0),3px_3px_rgba(0,220,0),4px_4px_rgba(0,220,0),5px_5px_0px_0px_rgba(0,220,0)] ">
            Click to get Source code
        </button>
        </Link>
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
            <p className="flex flex-col gap-4 font-serif">
            ChatApp has transformed the way I collaborate and solve doubts with my peers. The group chat feature in the Doubts Section is a game-changer — it's easy to create an account and dive right into productive conversations. I love how seamlessly it fosters knowledge sharing and problem-solving among users.
            — Tech Enthusiast
            <Link target="_blank" href="https://github.com/Ayanshaikh313/ChatApp" >
            <button  className="my-9 ml-40 px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-black text-white  transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(0,220,0),2px_2px_rgba(0,220,0),3px_3px_rgba(0,220,0),4px_4px_rgba(0,220,0),5px_5px_0px_0px_rgba(0,220,0)] ">
          Click to get Source code
        </button>
        </Link>
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Follow Me on Github & linkedin
        </h2>
        <div className="flex gap-6">
        <button className="my-3 px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-black text-white  transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(0,220,0),2px_2px_rgba(0,220,0),3px_3px_rgba(0,220,0),4px_4px_rgba(0,220,0),5px_5px_0px_0px_rgba(0,220,0)] ">
          GitHub
        </button>
        <button className="my-3 px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-black text-white  transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(0,220,0),2px_2px_rgba(0,220,0),3px_3px_rgba(0,220,0),4px_4px_rgba(0,220,0),5px_5px_0px_0px_rgba(0,220,0)] ">
          Linkedin
        </button>
        </div>
      </main>

      <footer className="bg-gray-100 text-center py-4">
        {/* Add footer content here */}
      </footer>
    </div>
  );
}
