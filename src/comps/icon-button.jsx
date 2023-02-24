export default function IconBtn({ icon, text, classes, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "flex gap-3 px-2 mini:px-5 py-3 md:py-2 rounded-xl align-middle w-full md:w-auto bg-danger " +
        classes
      }
    >
      <img src={icon} alt="close" className="w-7 h-7" />
      <p className="text-white font-bold text-xl mx-auto md:h-3 md:text-base">
        {text}
      </p>
    </button>
  );
}
