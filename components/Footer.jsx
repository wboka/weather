import VercelLogo from "../public/vercel.svg";

const Footer = () => {
	return (
		<footer>
			<p>
				Web Development by{" "}
				<a href="https://www.bokasolutions.com" target="_blank" rel="noopener">
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
					<VercelLogo className="vercel" />
				</a>
			</p>
		</footer>
	);
};

export default Footer;
