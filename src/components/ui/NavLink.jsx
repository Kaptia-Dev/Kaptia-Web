export default function NavLink({ text = "", href = "#", idx = 0 }) {
  return (
    <li
      style={{ animationDelay: `${idx * 80}ms` }}
      className="text-white uppercase font-semibold rounded-full animate-slide-up-fade hover:text-kaptia-yellow hover:-translate-y-1 duration-300 transition-all"
    >
      <a href={href}>{text}</a>
    </li>
  );
}
