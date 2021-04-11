import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

let address = '1600 Pennsylvania Ave, Washington, DC';
let possibleAddresses = [];

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Head>
					<title>Just the Weather</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main style={{ textAlign: 'center' }}>
					<Image
						src="/weather.png"
						alt="Orange sun, grey clouds, grey rain, and yellow lighning bolt"
						style={{ maxWidth: '300px', width: '100%' }}
						width={300}
						height={300}
					/>

					<h1>Welcome to Just the Weather!</h1>

					<form action={`/api/location/${encodeURI(address)}`} method="post">
						<div className="input-group">
							<label htmlFor="address">Enter an address: </label>
							<input type="text" name="address" id="address" value={address} />
							<button type="submit">Add Location</button>
						</div>

						<p className="help-block">
							<small>Example: 1600 Pennsylvania Ave, Washington, DC</small>
						</p>

						<h2>Possible Address Matches</h2>

						<p>Click an address to save as a favorite.</p>

						<ul>
							{possibleAddresses.length > 0 ? (
								possibleAddresses.map((a) => {
									<li>{a.matchedAddress}</li>;
								})
							) : (
								<li>No addresses found</li>
							)}
						</ul>
					</form>
				</main>

				<footer>
					<p>
						Web Development by{' '}
						<a href="https://www.bokasolutions.com" target="_blank" rel="noopener">
							Wayne Boka, Web Developer
						</a>
					</p>
					<p>
						Powered by{' '}
						<a
							href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
						</a>
					</p>
				</footer>
			</div>
		);
	}
}

export default Home;
