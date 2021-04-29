import Image from "next/image";
import Link from "next/link";

const Menu = () => {
	return (
		<div className="menu">
			<div className="container">
				<div className="row">
					<div
						className="col-4 col-sm-2"
						style={{ justifyContent: "center", alignItems: "center" }}
					>
						<Image
							src="/weather.png"
							alt="Orange sun, grey clouds, grey rain, and yellow lightning bolt"
							style={{ maxWidth: "50px", width: "100%" }}
							width={50}
							height={50}
						/>
					</div>
					<div
						className="col-8 title"
						style={{ textAlign: "center" }}
					>
						<Link href="/">
							<a>
								<h1>Just the Weather!</h1>
							</a>
						</Link>
					</div>
					<div className="col-12 col-sm-2 settings">
						<Link href="/settings">
							<a>Settings</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
