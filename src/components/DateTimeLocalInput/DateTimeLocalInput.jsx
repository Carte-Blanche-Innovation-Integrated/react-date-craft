import { getDateTimeLocal, formatDateTime } from "../../utils/utils";


export default function DateTimeLocalInput({ expiresAt, setExpiresAt }) {
  return (
    <input
        type="datetime-local"
        id="expiresAt"
        name="expiresAt"
        value={expiresAt ? getDateTimeLocal(expiresAt) : ""}
        onChange={(e) => {
        const expiryDate = new Date(e.target.value);
        setExpiresAt(expiryDate);
        // set the formatted date string in the text input field to keep them in sync
        if (inputRef.current) {
            inputRef.current.value = formatDateTime(expiryDate);
        }
        }}
        // we intentionally make the datetime-local input field with a width of 40px
        // to only show the calendar icon and hide the input field
        className="w-[40px] border-none bg-transparent text-gray-100 focus:outline-none focus:ring-0 sm:text-sm"
    />
  );
}
