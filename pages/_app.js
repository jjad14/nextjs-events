import Head from "next/head";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

// App JS is your application shell. You can imagine app JS as the root component inside of the body section of your HTML document.

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			{/* This would be a meta tag which is often added to pages to ensure that the page is responsive and scales correctly*/}
			<Head>
				<title>NextJS Events</title>
				<meta name='description' content='NextJS Events' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
