import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import EventsSearch from "../../components/events/events-search";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../helpers/api-util";

const AllEvents = (props) => {
	const router = useRouter();
	const { events } = props;

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};

	return (
		<>
			<Head>
				<title>All Events</title>
				<meta name='description' content='Find and event for you...' />
			</Head>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
};

export async function getStaticProps() {
	const events = await getAllEvents();

	return {
		props: {
			events: events
		},
		revalidate: 60
	};
}

export default AllEvents;
