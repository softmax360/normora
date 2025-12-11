"use client";

export default function SectionTitle({ toptitle, title, subtitle, variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div className="text-center font-medium lg:mb-10 mb-6">
      <span className={`py-2 px-4 rounded-3xl leading-none ${isDark ? " text-white bg-[#132D46]" : " text-gray-600 bg-white"}`}>
        {toptitle}
      </span>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mt-5 ${isDark ? "text-white" : "text-display"}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 max-w-2xl mx-auto lg:max-w-4xl ${
            isDark ? "text-gray-300" : "text-body"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}