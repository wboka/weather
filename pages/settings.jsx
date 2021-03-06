import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Settings() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div>
			<Header title="Settings" />

			<main>
				<h1>Settings</h1>
				<h2>Themes</h2>
				<button onClick={() => setTheme("system")}>System (Default)</button>
				<button onClick={() => setTheme("light")}>Light</button>
				<button onClick={() => setTheme("dark")}>Dark</button>
				<button onClick={() => setTheme("forest")}>Forest</button>
				<button onClick={() => setTheme("bright")}>Bright</button>
			</main>
		</div>
	);
}

export default Settings;
