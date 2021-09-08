import Document, { Html, Head, Main, Next, NextScript } from "next/document";

// Allows us to set application wide settings.
// just like _app.js, _document.js has to be added in the pages folder directly in the pages folder, not in some sub folder, but in the root level of the pages folder.
// It's not there by default, but if you add it next JS will take it into account and will use it.
// _document.js allows you to customize the entire HTML document. So all the elements that make up an HTML document, if you need to do that, you can add to the _document.js file. And then you need to add a special component in there, a class-based component, as it turns out, which you could name my document, and it has to be a class-based component because it must extend some component offered and provided by next JS.

class MyDocument extends Document {
	// And then in this class based component, we need to add a render method like we do in class based react components.

	// Very important the head component, which we are importing here is not the same head component as we import from next/head. These are different components.
	// Head from next head is important to use it anywhere in your JSX code to adjust the head content of the rendered page,

	// head imported from next/document should only be used in this special document component,

	// Now what could be reasons for overriding that default document?
	// Well if you want to configure that general document

	render() {
		// return special JSX code with a very specific structure.
		// Default structure:
		// return (
		// 	<Html>
		// 		<Head />
		// 			<body>
		// 				<Main />
		// 				<NextScript />
		// 			</body>
		// 	</Html>
		// );
		return (
			<Html lang='en'>
				<Head />
				<body>
					<div id='overlays' />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
