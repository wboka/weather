import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { useUser } from "@auth0/nextjs-auth0";

export default function Profile() {
	const { user, error, isLoading } = useUser();

	return (
		<div>
			<Header title="My Profile" />

			<Menu />

			<main style={{ textAlign: "center" }}>
				{isLoading && <p>Loading your info...</p>}

				{error && (
					<p>
						This error happened: <em>{error.message}</em>
					</p>
				)}

				{user ? (
					<div>
						<img src={user.picture} alt={user.name} />
						<h2>{user.name}</h2>
						<p>
							{user.email}{" "}
							{user.email_verified ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon-tiny"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<title>Your email is verified</title>
									<path
										fillRule="evenodd"
										d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							) : null}
						</p>

						<hr />

						<a href="/api/auth/logout">Logout</a>
					</div>
				) : (
					<div>
						<p>No user found</p>
						<a href="/api/auth/login">Login</a>
					</div>
				)}
			</main>
		</div>
	);
}
