import React from "react";
import Header from "../components/Header";
// import LoginLinks from "../components/LoginLinks";
import Link from "next/link";

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			address: "",
			isCurrentlySearching: true,
			possibleAddresses: [],
			favorites: [],
			locationTimeout: null,
		};
	}

	componentDidMount() {
		if (this.state.address) this.getLocations();

		this.getFavorites();
	}

	componentWillUnmount() {
		if (this.state.locationTimeout) clearTimeout(this.state.locationTimeout);
	}

	getFavorites() {
		this.setState((state, props) => ({
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
		}));
	}

	getLocations() {
		this.setState((state, props) => ({
			isCurrentlySearching: true,
		}));

		if (!this.state.address) return;

		fetch(`/api/location/${encodeURI(this.state.address)}`)
			.then((res) => res.json())
			.then((data) => {
				this.setState((state, props) => ({
					possibleAddresses: data.addressMatches,
					isCurrentlySearching: false,
				}));
			});
	}

	removeLocation(location) {
		const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		const indexToRemove = favorites
			.map((address) => address.matchedAddress)
			.indexOf(location.matchedAddress);

		if (indexToRemove > -1) {
			favorites.splice(indexToRemove, 1);

			localStorage.setItem("favorites", JSON.stringify(favorites));

			this.getFavorites();
		}
	}

	saveLocation(location) {
		const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

		if (
			favorites
				.map((address) => address.matchedAddress)
				.indexOf(location.matchedAddress) === -1
		) {
			favorites.push(location);

			localStorage.setItem("favorites", JSON.stringify(favorites));

			this.getFavorites();
		}
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
				<Header title="Home" />

				<main style={{ textAlign: "center" }}>
					{/* <LoginLinks /> */}

					<div
						style={{
							display: this.state.favorites.length > 0 ? "block" : "none",
						}}
					>
						<h2>My Favorites</h2>

						<ul>
							{this.state.favorites.length > 0
								? this.state.favorites.map((a) => (
										<li key={a.matchedAddress}>
											<h3>{a.matchedAddress}</h3>

											<Link
												href={`/weather/location/${encodeURI(
													a.matchedAddress
												)}`}
											>
												<a>View Forecasts</a>
											</Link>
											<button
												type="button"
												onClick={() => this.removeLocation(a)}
											>
												Remove favorite
											</button>

											<hr />
										</li>
								  ))
								: null}
						</ul>
					</div>
					<form
						action={`/api/location/${encodeURI(this.state.address)}`}
						method="post"
					>
						<div className="input-group">
							<label htmlFor="address" style={{ visibility: "hidden" }}>
								Enter an address:{" "}
							</label>
							<input
								type="text"
								name="address"
								id="address"
								onChange={this.updateLocation.bind(this)}
								placeholder="1600 Pennsylvania Ave, Washington, DC"
								value={this.state.address}
							/>
						</div>

						<p className="help-block">
							<small>Example: 1600 Pennsylvania Ave, Washington, DC</small>
						</p>

						<div style={{ display: this.state.address ? "block" : "none" }}>
							<h2>Possible Address Matches</h2>

							<p
								style={{
									display:
										this.state.possibleAddresses.length === 0 &&
										this.state.isCurrentlySearching
											? "block"
											: "none",
								}}
							>
								Finding possible addresses...
							</p>

							<p
								style={{
									display:
										this.state.possibleAddresses.length === 0 &&
										!this.state.isCurrentlySearching
											? "block"
											: "none",
								}}
							>
								No address found for <em>{this.state.address}</em>
							</p>

							<ul>
								{this.state.possibleAddresses.length > 0
									? this.state.possibleAddresses.map((a) => (
											<li key={a.matchedAddress}>
												<h3>{a.matchedAddress}</h3>

												<Link
													href={`/weather/location/${encodeURI(
														a.matchedAddress
													)}`}
												>
													<a>View Forecasts</a>
												</Link>
												<button
													type="button"
													onClick={() => this.saveLocation(a)}
												>
													Save as favorite
												</button>

												<hr />
											</li>
									  ))
									: null}
							</ul>
						</div>
					</form>
				</main>
			</div>
		);
	}
}

export default Home;
