import { useRef, useState } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
	const emailInputRef = useRef();
	const [emailValidation, setEmailValidation] = useState(false);
	const [errorMessage, setErrorMessage] = useState(
		'Error! Please make sure email is provided'
	);

	function registrationHandler(event) {
		event.preventDefault();

		setEmailValidation(false);

		// fetch user input (state or refs)
		const email = emailInputRef.current.value;

		// optional: validate input
		if (email !== '') {
			// send valid data to API
			fetch('/api/newsletter', {
				method: 'POST',
				body: JSON.stringify({ email: email }),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
		} else {
			setEmailValidation(true);
		}
	}

	return (
		<section className={classes.newsletter}>
			{emailValidation && <h4 className='center'>{errorMessage}</h4>}
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						type='text'
						id='email'
						placeholder='Your email'
						aria-label='Your email'
						ref={emailInputRef}
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;
