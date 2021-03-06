import React from 'react';
import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';

const HomePage = (props) => {
	return (
		<>
			<Head>
				<title>NextJS Events</title>
				<meta name='description' content='Finds and event for you...' />
			</Head>
			<NewsletterRegistration />
			<EventList items={props.events} />
		</>
	);
};

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			events: featuredEvents
		},
		revalidate: 1800 // 30 mins
	};
}

export default HomePage;
