"use client"
import { useEffect, useState } from "react";
import Cell from "./components/Cell";
import RestartButton from "./components/RestartButton";


const winnigCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

export default function Home() {

   const [cells,setCells] = useState(["","","" , "","","" , "","",""]);
   const [go , setGo ] = useState("circle");
   const [winnigMessage , setwinnigMessage] = useState("");
   const [comboIndex , setComboIndex] = useState<number[]>([]);

   const handleRestart = () => {
    setCells(["","","" , "","","" , "","",""]);
    setGo("circle");
    setwinnigMessage("");    
    console.log("Game/App restarted!");
    setComboIndex([]);
   }

   useEffect(() => {
    winnigCombos.forEach(combo => {
      
      const circleWins = combo.every(cell => cells[cell] === "circle");
      const crossWins  = combo.every(cell => cells[cell] === "cross");

      if(circleWins){
        setComboIndex(combo);
        setwinnigMessage("Circle Wins!");
        
      }else if(crossWins){
        setComboIndex(combo);
        setwinnigMessage("Cross Wins!")
      }

    })
   },[cells])

   useEffect(() => {
    
    if((cells.every(cell => cell !== "") && !winnigMessage)){
      setwinnigMessage("Draw!")
    }

   },[cells,winnigMessage])



  return (
    <main className="h-screen w-full bg-gray-800 flex justify-center items-center flex-col gap-6">
      <div>
        <RestartButton onRestart={handleRestart}/>
      </div>

      <div>
        <h1  className="text-3xl">TicTacTo Game</h1>
      </div>

      <div className="w-75 h-75 border-0 border-gray-400 flex flex-wrap ">
        {
          cells.map((cell , index) => (
            <Cell  key={index}
              id={index}
              go={go}
              setGo={setGo}
              cells={cells}
              setCells={setCells}
              cell={cell}
              winnigMessage={winnigMessage}
              comboIndex={comboIndex}
               />
          ))
        }
      </div>
      
      <div>
       { 
        !winnigMessage && <div className="flex items-center justify-center gap-1">  
          Now it&apos;s the {go === "circle" ? <span className="text-sky-500 text-xl">O</span>:<span className="text-red-500 text-xl" >X</span>} turn
        </div>
        }
        <div className={`${winnigMessage === "Circle Wins!" ? "text-sky-500":
                          winnigMessage === "Cross Wins!" ? "text-red-500":"text-yellow-500"}`}>
          {winnigMessage}
        </div>
      </div>

    </main>
  );
}


