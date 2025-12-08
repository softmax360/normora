export default function Button({
  children,
  type = "primary",
  as = "button", 
  href = "#", 
  className = "",
}) {
  const base =
    "rounded-full font-bold transition-all inline-block relative z-[0] after:content-[''] after:absolute after:inset-0 after:z-[-1] after:rounded-full inline-flex justify-center items-center gap-2";

  const styles = {
    primary: base + " px-6 py-4 bg-primary text-white after:bg-gradient-to-b after:from-[#fff] after:to-transparent after:opacity-[0.28] shadow-sm",
    secondary: base + " px-6 py-3 btn-secondary bg-dark text-white after:bg-gradient-to-b after:from-[#fff] after:to-transparent after:opacity-[0.28] shadow-sm",
    outline: base + " bg-white px-6 py-4 border border-gray-100 text-gray-700 shadow-[0_3px_8px_#a7aeb73d]",
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
