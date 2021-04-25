import Head from "next/head";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";

class Offline extends React.Component {
	render() {
		return (
			<div>
				<Header title="Offline" />

				<main style={{ textAlign: "center" }}>
					<h1>You're Offline</h1>

					<p>Please go back online to access the rest of this website.</p>

					<hr />

					<Link href="/">
						<a>Back to main</a>
					</Link>
				</main>
			</div>
		);
	}
}

export default Offline;
