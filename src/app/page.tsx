import Image from "next/image";
import FinalImage from "/public/images/final-removebg.png"

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center text-center pt-48">
        <h1 className="text-4xl font-bold mb-24 font-mono text-slate-200">Welcome... I'm Magnus</h1>

        <div className="md:flex md:flex-row max-w-5xl">
          {/* Column 1: Description */}
          <div className="md:w-1/2 p-8 flex items-center text-center">
            <p className="text-lg text-slate-200">
              My time is spent on exploring software development and artificial intelligence.
              <br /><br />Based in Copenhagen I am studying my Master's in IT & Cognition while working as a student AI developer at Solita A/S
            </p>
          </div>

          {/* Column 2: Image */}
          <div className="md:w-1/2 p-8">
            <Image
              className="rounded-full h-96 w-96 object-cover mx-auto bg-gradient-to-b from-sky-200 via-blue-400 to-sky-700"
              src={FinalImage}
              alt="Your Name"
            />
          </div>
        </div>
      </div>
    </>
  );
}
