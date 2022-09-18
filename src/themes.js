export function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.body.className = themeName;
}

export function storedTheme() {
  if (localStorage.getItem("theme")) {
    localStorage.getItem("theme") === "dark-theme"
      ? setTheme("dark-theme")
      : localStorage.getItem("theme") === "light-theme"
      ? setTheme("light-theme")
      : "";
  }
  localStorage.getItem("theme") === null ? setTheme("dark-theme") : "";
}
