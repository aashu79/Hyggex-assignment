
import "./style.css";
import Card from "./Card.tsx"
const FaqSection = () => {
  return (
    <div className="faq-conatiner flex flex-col m-40 gap-6">
      <h1 className="title text-4xl font-bold">FAQ</h1>

      <Card header={"Can education flashcards be used for all age groups?"}/>
      <Card header={"How do education flashcards work?"}/>
      <Card header={"Can education flashcards be used for test preparation?"}/>

      
    </div>
  );
};

export default FaqSection;
