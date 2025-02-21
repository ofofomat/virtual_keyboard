"use client";

import ThemeToggle from "./themeToggle";

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-light-white dark:bg-dark-black">
      <h1 className="text-blue dark:text-light-blue">My App</h1>
      <h2 className="font-bold">USERNAME</h2>
      <ThemeToggle />
    </header>
  );
}