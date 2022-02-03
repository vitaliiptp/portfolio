import type { NextPage } from 'next'
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex, min-h-screen">
      <Navbar />
    </div>
  )
}

export default Home
