import { RiSafe2Line } from "@remixicon/react"

const Navbar = () => {
  return (
    <nav className="w-full px-10 py-5 ">
        <div className="flex items-center gap-x-2">
            <RiSafe2Line/>
            <span className="text-lg font-semibold">vaulty</span>
        </div>
        
    </nav>
  )
}

export default Navbar
