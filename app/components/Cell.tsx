import { Dispatch, SetStateAction } from "react";

type cellProps = {
    id:number;
    go:string;
    setGo: Dispatch<SetStateAction<string>>;
    cells:string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell:string;
    winnigMessage:string;
    comboIndex:number[]
}

const Cell = ({go , setGo , id , cells , setCells , cell ,winnigMessage , comboIndex} :cellProps) => {

    const handleClick = () => {
        if(winnigMessage){
            return;
        }

        const notTaken = !cells[id];

        if(notTaken){

            if(go === "circle"){
                handleCellChange("circle");
                setGo("cross");

            }else if(go === "cross"){
                handleCellChange("cross");
                setGo("circle");
            }
        }

    }

    const handleCellChange = (cellToChange:string) => {
        let copyCells = [...cells];
        copyCells[id] = cellToChange;
        setCells(copyCells);
    }

    return (
        <div  className={`${comboIndex && comboIndex.every(index => index !== id) ? "":"bg-gray-600"} w-25 h-25 border-1 rounded box-border flex justify-center items-center`}
            onClick={handleClick}>
               <div className={`${cell === "circle" ? "text-sky-600":"text-red-600"} text-8xl max-sm:text-7xl`}>
                {!cell ? "":cell === "circle" ? "O":"X"}
               </div>
        </div>
    )
}

export default Cell;