import { useMemo, useState } from "react";
import Words from "./assets/Words";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  
  const words = useMemo(() => Words(), []);
  const currentWord = words[currentIndex];

  const sortedWords = words.map((elem, index) => {
    return (
      <span className="gap-4 m-1" key={index}>
        {elem}
      </span>
    );
  });

  const handleInput=(e)=>{
    if(e.key === " "){
      setCurrentIndex(prev => prev+1)
      setUserInput("")
    }
  }
  console.log(currentWord);
  console.log(userInput);
  return (
    <>
      <h1 className="text-2xl text-white mb-4">
        Your current word is {currentWord}
      </h1>
      <input
        id="input"
        className="bg-red-200 h-20 w-5/6"
        type="text"
        autoFocus
        placeholder={currentWord}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleInput}
      />
      <div className="flex justify-center items-center h-screen w-full">
        <h1 className="text-white text-4xl gap-10 ">{sortedWords}</h1>
      </div>
    </>
  );
}

export default App;
