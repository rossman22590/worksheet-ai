import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

export default function Home() {
  return (
    <main className="w-screen h-screen bg-neutral-950 flex flex-col justify-between">
      <Navbar/>
      <div className="w-full flex justify-center p-6 text-center">
        <div className="w-full flex items-center flex-col space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Crush your next test</h1>
          <p className="md:text-xl max-w-3xl text-center">Stop wasting time scowering the internet for useless quizlets, use AI to create the resources for you so you can focus on what matters-success!</p>
          <div className="flex space-x-8 items-center">
            <Link href="/about" className="px-4 py-2 font-medium rounded-md bg-white text-black hover:bg-opacity-80 duration-300">About</Link>
            <Link href="/user/dashboard" className="font-medium flex space-x-2 items-center hover:opacity-80 duration-300">
              <p>Get Started</p>
              <FiArrowRight/>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
