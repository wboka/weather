import Link from "next/link";

const Menu = () => {
	return (
		<div className="menu">
			<div className="home">
				<Link href="/">
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1}
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					</a>
				</Link>
			</div>
			<div className="title" style={{ textAlign: "center" }}>
				<img
					src="/weather.png"
					alt="Orange sun, grey clouds, grey rain, and yellow lightning bolt"
					className="logo"
					style={{
						maxWidth: "35px",
						width: "100%",
					}}
					width={35}
				/>
				Just the Weather!
			</div>
			<div className="settings">
				<Link href="/settings">
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1}
								d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
							/>
						</svg>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Menu;
