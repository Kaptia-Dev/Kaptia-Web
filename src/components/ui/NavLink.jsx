export default function NavLink({
  text = "",
  href = "#",
  idx = 0,
  animation = "",
}) {
  return (
    <li
      style={{ animationDelay: `${idx * 80}ms` }}
      className={`text-white uppercase font-semibold rounded-full hover:text-kaptia-yellow duration-300 transition-all hover:-translate-y-0.5 ${animation}`}
    >
      <a className="block cursor-pointer" href={href}>
        {text}
      </a>
    </li>
  );
}
