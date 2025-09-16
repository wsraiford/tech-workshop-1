import Image from "next/image";
import {generateAllParamCombinations} from "next/dist/build/static-paths/app";
import Greeting from "@/components/Greeting";

export default function Home() {
  return (
      <section className="bg-teal-100 min-h-screen flex flex-col items-center">
          <h1 className ="txt-3xl font bold text-blue-600 pt-4">Hello World</h1>
          <button className="flex flex-wrap items-center justify-center w-full">
              <button className="mt-4rounded bg-black px-4 text-white cursor-pointer hover: bg-gray-700"> Click Me</button>
              <Greeting name="KTP"/>
           </button>

      </section>



  );
}
