import React from "react";

import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";
import Button from "../ui/button";

const EventItem = (props) => {
	const { title, image, date, location, id } = props;

	const dateFormatter = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});

	const addressFormat = location.replace(", ", "\n");

	const exploreLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			<img src={"/" + image} alt={title} />
			<div className={classes.context}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{dateFormatter}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{addressFormat}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
