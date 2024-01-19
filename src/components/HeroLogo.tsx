
import heroLogo from "../assets/heroLogo.png"
import add from "../assets/add.png"
const HeroLogo = () => {
  return (
    <div className="m-10 p-7 h-10 flex justify-between items-center">
        <div className="logo-container w-52 h-10">
            <img src={heroLogo} alt="" />
        </div>  

        <div className="controlls flex gap-4 items-center justify-center">
                <img src={add} alt="" />
                <h1 className="text-blue-900 font-bold text-xl">Create Flashcard</h1>
            </div>
    </div>
  )
}

export default HeroLogo