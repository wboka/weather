import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			address: "1600 Pennsylvania Ave, Washington, DC",
			possibleAddresses: [],
			locationTimeout: null,
		};
	}

	componentDidMount() {
		if (this.state.address) this.getLocations();
	}

	componentWillUnmount() {
		if (this.state.locationTimeout) clearTimeout(this.state.locationTimeout);
	}

	getLocations() {
		if (!this.state.address) return;

		fetch(`/api/location/${encodeURI(this.state.address)}`)
			.then((res) => res.json())
			.then((data) => {
				this.setState((state, props) => ({
					possibleAddresses: data.addressMatches,
				}));
			});
	}

	updateLocation(event) {
		this.setState((state, props) => ({
			address: event.target.value,
			possibleAddresses: [],
			locationTimeout: setTimeout(this.getLocations.bind(this), 1000),
		}));
	}

	render() {
		return (
			<div>
				<Head>
					<title>Just the Weather</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main style={{ textAlign: "center" }}>
					<Image
						src="/weather.png"
						alt="Orange sun, grey clouds, grey rain, and yellow lighning bolt"
						style={{ maxWidth: "300px", width: "100%" }}
						width={300}
						height={300}
					/>

					<h1>Welcome to Just the Weather!</h1>

					<form
						action={`/api/location/${encodeURI(this.state.address)}`}
						method="post"
					>
						<div className="input-group">
							<label htmlFor="address">Enter an address: </label>
							<input
								type="text"
								name="address"
								id="address"
								onChange={this.updateLocation.bind(this)}
								value={this.state.address}
							/>
							{/* <button type="submit">Save Location</button> */}
						</div>

						<p className="help-block">
							<small>Example: 1600 Pennsylvania Ave, Washington, DC</small>
						</p>

						<h2>Possible Address Matches</h2>

						<p>Click an address to save as a favorite.</p>

						<ul>
							{this.state.possibleAddresses.length > 0 ? (
								this.state.possibleAddresses.map((a) => (
									<li
										key={a.matchedAddress}
										style={{ fontSize: "2em", padding: "0.5em 0" }}
									>
										{/* <Link
											href={`/weather/${encodeURI(
												a.coordinates.y.toFixed(4)
											)}/${encodeURI(a.coordinates.x.toFixed(4))}`}
										>
											<a>{a.matchedAddress}</a>
										</Link>
										<br /> */}
										<Link
											href={`/weather/location/${encodeURI(a.matchedAddress)}`}
										>
											<a>{a.matchedAddress}</a>
										</Link>
									</li>
								))
							) : (
								<li>No addresses found</li>
							)}
						</ul>
					</form>
				</main>

				<footer>
					<p>
						Web Development by{" "}
						<a
							href="https://www.bokasolutions.com"
							target="_blank"
							rel="noopener"
						>
							Wayne Boka, Web Developer
						</a>
					</p>
					<p>
						Powered by{" "}
						<a
							href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/vercel.svg"
								alt="Vercel Logo"
								className={styles.logo}
							/>
						</a>
					</p>
				</footer>
			</div>
		);
	}
}

export default Home;
