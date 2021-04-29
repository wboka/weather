import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/menu.css";
import "../styles/lib/bootstrap-grid.min.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider defaultTheme="system" attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
