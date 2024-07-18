import Form from "@/components/Form"
import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar/>
      <div className="w-full grow flex justify-center items-center">
        <Form/>
      </div>
    </main>
  )
}

export default Home
