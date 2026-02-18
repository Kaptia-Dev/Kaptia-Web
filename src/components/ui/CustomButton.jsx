export default function CustomButton({
  text = "",
  onClick = () => {},
  primaryColor = "bg-white",
  secondaryColor = "bg-kaptia-yellow",
  animate = "",
  textColor = "text-kaptia-primary-blue"
}) {
  return (
    <button
      onClick={onClick}
      className={`${primaryColor} ${animate} ${textColor} px-12 py-2 text-[1.2rem] font-bold rounded-full relative shadow cursor-pointer duration-300 overflow-hidden group`}
    >
      <span
        className={`${secondaryColor} absolute right-full top-0 bottom-0 w-full z-0 group-hover:right-0 transition-all duration-300`}
      ></span>
      <span className="relative z-10 uppercase">{text}</span>
    </button>
  );
}
