// components/RestartButton.tsx
import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";

interface RestartButtonProps {
  onRestart: () => void; // دالة لا تأخذ أي بارامترات ولا ترجع شيء
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
      className={`p-2 rounded-full bg-blue-500 text-white focus:outline-none  cursor-pointer
                  ${isSpinning ? "animate-spin" : ""}`}
    >
      <FaSyncAlt size={24} />
    </button>
  );
};

export default RestartButton;
