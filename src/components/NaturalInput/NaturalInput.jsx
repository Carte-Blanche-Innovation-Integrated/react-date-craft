import { useRef } from "react";
import { formatDateTime, parseDateTime } from "../../utils/utils";

export default function NaturalLanguageInput({ expiresAt, setExpiresAt }) {
  const inputRef = useRef(null);

  return (
    <input
        ref={inputRef}
        type="text"
        placeholder='E.g. "tomorrow at 5pm" or "in 2 hours"'
        defaultValue={expiresAt ? formatDateTime(expiresAt) : ""}
        onBlur={(e) => { // parse the date string when the input field loses focus
        if (e.target.value.length > 0) {
            const parsedDateTime = parseDateTime(e.target.value);
            if (parsedDateTime) {
            setExpiresAt(parsedDateTime);
            e.target.value = formatDateTime(parsedDateTime);
            }
        }
        }}
        className="flex-1 border-none bg-transparent text-gray-100 placeholder-gray-200 focus:outline-none focus:ring-0 sm:text-sm"
    />
  );
}

