import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export function GameCell({ onClick, isWinner, disabled, symbol }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-green-600/20",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
}
