import Link from "next/link";
import Header from "../components/Header";

export default function FourOhFour() {
	return (
		<main>
			<Header title="404: Page Not Found" />

			<h1>404 - Page Not Found</h1>

			<Link href="/">Go back home</Link>
		</main>
	);
}
