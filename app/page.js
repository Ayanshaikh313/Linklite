import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const Poppins = localFont({
  src: "/fonts/Poppins-ExtraBold.ttf",
  variable: "--font-Poppins",
  subsets: ["latin"],
});

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast & Reliable",
    description: "Our platform ensures lightning-fast performance and 99.9% uptime, so you never miss a beat."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Secure & Trusted",
    description: "We use state-of-the-art encryption and security protocols to keep your data safe."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Scalable Solutions",
    description: "Grow effortlessly with our scalable solutions designed to meet your evolving needs."
  }
];

export default function Home() {
  return (
    <main className="bg-green-100 min-h-screen md:w-full w-[70vh] ">
      <section className="grid grid-cols-1 lg:grid-cols-2 h-[50vh] px-4 lg:px-0 w-full">
        <div className="flex flex-col gap-4 pt-11 items-center justify-center text-center lg:text-left">
          <p className={`text-2xl lg:text-3xl font-bold ${Poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="md:px-56 px-5  text-center">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 justify-center lg:justify-start mt-4'>
            <Link href="/shorten">
              <button className='bg-green-300 rounded-lg shadow-lg p-3 py-1 font-bold text-black'>Try Now</button>
            </Link>
            <Link href="/github">
              <button className='bg-green-300 rounded-lg shadow-lg p-3 py-1 font-bold text-black'>GitHub</button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start relative mt-8 lg:mt-0 md:h-[100%] h-[242px] md:mt-16 ">
          <Image className="mix-blend-darken max-w-full h-[242px] " alt="an Image of a vector" src={"/scifi.jpg"} fill={true} />
        </div>
      </section>

      <section className="mt-20">
        <div className="bg-green-100 py-16 text-center px-6">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-green-700">Welcome to Our App</h1>
            <p className="text-lg lg:text-xl text-gray-700 mt-4">
              Simplifying your connections effortlessly with modern and secure solutions.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 mt-8 rounded-full shadow-md hover:bg-green-700 transition-all">
              Get Started
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 pb-16 px-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-xl bg-green-50 transition-shadow duration-300">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
