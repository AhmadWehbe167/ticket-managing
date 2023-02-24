export default function MyButton({ text, classes, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      className={
        "flex gap-3 px-5 py-3 rounded-xl align-middle h-full w-full bg-danger md:w-32 md:ml-auto " +
        (disabled ? " bg-grey cursor-not-allowed" : classes)
      }
      disabled={disabled}
    >
      <p className="text-white font-bold text-xl mx-auto">{text}</p>
    </button>
  );
}
