import { connectDatabase, insertDocument } from '../../helpers/_db.util';

const handler = async (req, res) => {
	if (req.method == 'POST') {
		const { email } = req.body;

		if (!email || !email.includes('@')) {
			res.status(422).json({ message: 'Error! Invalid email address' });
			return;
		}

		let client;

		try {
			client = await connectDatabase();
		} catch (error) {
			res.status(500).json({
				message: 'Connecting to the database failed!'
			});
			return;
		}

		try {
			await insertDocument(client, 'newsletter', { email: email });
			client.close();
		} catch (error) {
			res.status(500).json({ message: 'Inserting data failed!' });
			return;
		}

		res.status(201).json({ message: 'You have signed up' });
	}
};

export default handler;
