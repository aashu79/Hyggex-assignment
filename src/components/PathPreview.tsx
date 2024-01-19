import home from "../assets/home.png";
import arrow from "../assets/Vector.png";
const PathPreview = () => {
  return (
    <div className="my-10 ml-14 ">
      <div className="flex items-center w-4/12 gap-3">
        <img src={home} alt="" />
        <img src={arrow} alt="" />
        <p className="font-semibold text-gray-500">FlashCard</p>
        <img src={arrow} alt="" />
        <p className="font-semibold text-gray-500">Mathematics</p>
        <img src={arrow} alt="" />
        <p className="text-blue-950 whitespace-nowrap font-semibold">Relation and Function</p>
      </div>
    </div>
  );
};

export default PathPreview;
