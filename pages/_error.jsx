import Link from "next/link";
import Header from "../components/Header";

export function Error({ statusCode }) {
	return (
		<main>
			<Header title="Oops!" />

			<h1>Oops! Something went wrong.</h1>

			<p>
				This is embarassing. Apologies! We'll look into this right away. Nothing
				to see here folks!
			</p>

			<hr />

			<h2>More Information</h2>

			<p>
				{statusCode
					? `An error ${statusCode} occurred on server`
					: "An error occurred on client"}
			</p>

			<Link href="/">
				<a>Go back home</a>
			</Link>
		</main>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
