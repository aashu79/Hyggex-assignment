
import logo from "../assets/logo.png"
import "./style.css"
const Navbar = () => {
  return (
    <div className="flex mx-12 p-5 justify-between items-center">
      <div className="w-40"><img src={logo} alt="" /></div>
      <div className="flex gap-8 items-center">
        <p>Home</p>
        <p>FlashCard</p>
        <p>Contact</p>
        <p>FAQ</p>
        <button className="rounded-32 w-24 p-2 btn text-white hover:bg-white">Login</button>
      </div>
    </div>
  )
}

export default Navbar