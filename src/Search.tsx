import { useState } from "react";
import search from "./assets/search.svg";

export const Search = (props: { onSearch: (search: string) => void }) => {
  const [text, setText] = useState("");

  return (
    <div className="relative w-full">
      <img
        src={search}
        className="absolute left-3 top-[50%] translate-y-[-50%] w-6 opacity-20 pointer-events-none"
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") props.onSearch(text);
        }}
        className="w-full rounded-xl text-xl py-2 pr-3 pl-12 outline-none focus:border-blue-500 border-2 transition-all"
      />
    </div>
  );
};
