import { useState } from "react";
import Words from "./assets/Words";

function App() {
  const words = Words();
  const sortedWords = words.map((elem, index) => {
     return <span className="gap-4 m-1" key={index}>{elem}</span>;
  });
  console.log(sortedWords)
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <h1 className="text-white text-4xl gap-10 ">{sortedWords}</h1>
      </div>
    </>
  );
}

export default App;
