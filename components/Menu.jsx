import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Menu = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className="container">
			<div className="row">
				<div
					className="col-12 col-sm-4"
					style={{ justifyContent: "center", alignItems: "center" }}
				>
					<Image
						src="/weather.png"
						alt="Orange sun, grey clouds, grey rain, and yellow lightning bolt"
						style={{ maxWidth: "250px", width: "100%" }}
						width={250}
						height={250}
					/>
				</div>
				<div className="col-12 col-sm-8" style={{ textAlign: "center" }}>
					<h1>Just the Weather!</h1>
					<h2>Themes</h2>
					<button onClick={() => setTheme("light")}>Light</button>
					<button onClick={() => setTheme("dark")}>Dark</button>
				</div>
			</div>
		</div>
	);
};

export default Menu;
