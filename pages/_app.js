import { ThemeProvider } from "next-themes";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/globals.scss";
import "../styles/Menu.scss";
import "../styles/lib/bootstrap-grid.min.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider
			defaultTheme="system"
			attribute="class"
			themes={["light", "dark", "forest", "bright"]}
		>
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</ThemeProvider>
	);
}

export default MyApp;
