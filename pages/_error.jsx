import Link from "next/link";
import Header from "../components/Header";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export function Error({ statusCode }) {
	// Only require Rollbar and report error if we're on the server
	if (!process.browser) {
		console.log("Reporting error to Rollbar...");
		const Rollbar = require("rollbar");
		const rollbar = new Rollbar(serverRuntimeConfig.rollbarServerToken);
		rollbar.error(err, req, (rollbarError) => {
			if (rollbarError) {
				console.error("Rollbar error reporting failed:");
				console.error(rollbarError);
				return;
			}
			console.log("Reported error to Rollbar");
		});
	}

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

			<Link href="/">Go back home</Link>
		</main>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
