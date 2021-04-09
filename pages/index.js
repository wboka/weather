import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Just the Weather</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main style={{ 'text-align': 'center' }}>
				<img src="/weather.png" style={{ 'max-width': '300px', 'width': '100%' }} alt="Vercel Logo" />

				<h1>Welcome to Just the Weather!</h1>

				<p>Check back soon</p>
			</main>

			<footer>
				<p>
					Web Development by{' '}
					<a href="https://www.bokasolutions.com" target="_blank" rel="noopener">
						Wayne Boka, Web Developer
					</a>
				</p>
				<p>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
					</a>
				</p>
			</footer>
		</div>
	);
}
