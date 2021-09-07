import React from "react";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

const HomePage = (props) => {
	return (
		<>
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
