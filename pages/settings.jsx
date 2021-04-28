import Header from "../components/Header";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Settings() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<main>
			<Header title="Settings" />

			<Menu />

			<h1>Settings</h1>

			<h2>Themes</h2>

			<button onClick={() => setTheme("system")}>System (Default)</button>
			<button onClick={() => setTheme("light")}>Light</button>
			<button onClick={() => setTheme("dark")}>Dark</button>
		</main>
	);
}

export default Settings;
