import { useRef, useState, useContext } from 'react';
import classes from './newsletter-registration.module.css';
import { NotificationContext } from '../../store/notification-context';

function NewsletterRegistration() {
	const emailInputRef = useRef();
	const notificationCtx = useContext(NotificationContext);
	const [emailValidation, setEmailValidation] = useState(false);
	const [errorMessage, setErrorMessage] = useState(
		'Error! Please make sure email is provided'
	);

	function registrationHandler(event) {
		event.preventDefault();

		setEmailValidation(false);

		// fetch user input (state or refs)
		const email = emailInputRef.current.value;

		notificationCtx.showNotification({
			title: 'Signing up...',
			message: 'Registrating for newsletter',
			status: 'pending'
		});

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
				.then((res) => {
					if (res.ok) {
						return res.json();
					}

					res.json().then((data) => {
						throw new Error(
							data.message || 'Something went wrong!'
						);
					});
				})
				.then((data) => {
					notificationCtx.showNotification({
						title: 'Success!',
						message: 'Successfully Registered for newsletter',
						status: 'success'
					});
				})
				.catch((error) => {
					notificationCtx.showNotification({
						title: 'Error!',
						message: error.message || 'Something went wrong!',
						status: 'error'
					});
				});
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
