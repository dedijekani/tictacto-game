// components/RestartButton.tsx
import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";

interface RestartButtonProps {
  onRestart: () => void; 
  
}

const RestartButton: React.FC<RestartButtonProps> = ({ onRestart }) => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const handleClick = () => {
    setIsSpinning(true);
    onRestart();
    setTimeout(() => setIsSpinning(false), 500);
  };

  return (
    <button
      onClick={handleClick}
      className={`p-3 rounded-full bg-blue-500 text-white focus:outline-none  cursor-pointer
                  ${isSpinning ? "animate-spin" : ""}`}
    >
      <FaSyncAlt size={32} />
    </button>
  );
};

export default RestartButton;
