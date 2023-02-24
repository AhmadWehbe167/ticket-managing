export default function InputField({
  title,
  subtitle,
  input,
  justifyElems = "",
}) {
  return (
    <div
      className={
        "flex flex-col gap-2 md:w-full " +
        (justifyElems === "" ? "justify-between" : justifyElems)
      }
    >
      <p className="text-primary text-xl font-inter">{title}</p>
      <p className="text-grey text-sm">{subtitle}</p>
      {input}
    </div>
  );
}
