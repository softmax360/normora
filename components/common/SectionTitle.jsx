export default function SectionTitle({ toptitle, title, subtitle, variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div className="text-center mb-10">
      <span className={`py-1 px-4 rounded-3xl ${isDark ? " text-gray-300" : " text-gray-600 bg-white"}`}>
        {toptitle}
      </span>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 ${isDark ? "text-white" : "text-display"}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-body"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}