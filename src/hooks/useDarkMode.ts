import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const colorTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme] as const;
};

export default useDarkMode;
