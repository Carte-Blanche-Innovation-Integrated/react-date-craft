import { useRef, useState } from "react";
// import { NaturalLanguageInput } from "./natural-language-input";
// import { DateTimeLocalInput } from "./datetime-local-input";
import NaturalLanguageInput from "./components/NaturalInput";
import DateTimeLocalInput from "./components/DateTimeLocalInput";

export default function App() {
  const inputRef = useRef(null);
  const [expiresAt, setExpiresAt] = useState(null);

  return (
    <div className="flex items-center justify-center p-8">

      <div className="flex items-center justify-center w-full">
        <div>
          <div className="flex items-center mt-12">
            <img className="w-40 h-40" src="/react-date-craft-png.png" />
            <h1 className="font-bold">react-date-craft</h1>
          </div>
          <div className="flex mx-auto justify-center bg-indigo-950 p-4 w-full max-w-sm items-center justify-between rounded-md border border-gray-300 shadow-sm transition-all focus-within:border-gray-800 focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-500 mt-72">
            <NaturalLanguageInput expiresAt={expiresAt} setExpiresAt={setExpiresAt} />
            <DateTimeLocalInput expiresAt={expiresAt} setExpiresAt={setExpiresAt} />
          </div>
        </div>
      </div>
    </div>
  );
}
