import { ThemeProvider } from "next-themes";
import "../styles/globals.scss";
import "../styles/menu.scss";
import "../styles/lib/bootstrap-grid.min.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider
			defaultTheme="system"
			attribute="class"
			themes={["light", "dark", "forest", "bright"]}
		>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
