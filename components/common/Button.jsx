export default function Button({
  children,
  type = "primary",
  as = "button", 
  href = "#", 
  className = "",
}) {
  const base =
    "px-6 py-3 rounded-full bg-dark text-white font-semibold transition-all inline-block relative z-[0] after:content-[''] after:absolute after:inset-0 after:z-[-1] after:rounded-full";

  const styles = {
    primary: base + " bg-blue-600 text-white hover:bg-blue-700",
    secondary: base + " btn-secondary after:bg-gradient-to-b after:from-[#fff] after:to-transparent after:opacity-[0.28] shadow-sm",
    outline: base + " border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  const classes = `${styles[type]} ${className}`;

  if (as === "a") {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
