import { useUser } from "@auth0/nextjs-auth0";

function LoginLinks({ children }) {
	const { user, error, isLoading } = useUser();

	return null;

	return (
		<div>
			{isLoading && <p>Loading your info...</p>}
			{error && (
				<p>
					Our login system ran into this error: <em>{error.message}</em>
				</p>
			)}
			{user ? (
				<div>
					<a href="/account">My Account</a>{" "}
					<a href="/api/auth/logout">Logout</a>
				</div>
			) : (
				<a href="/api/auth/login">Login</a>
			)}
		</div>
	);
}

export default LoginLinks;
