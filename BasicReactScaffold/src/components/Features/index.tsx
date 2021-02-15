import React, { Fragment, ReactElement } from 'react'; 

const Features = (): ReactElement => (
	<Fragment>
		<h3>
			Includes:
		</h3>
		<ul>
			<li>Modern JavaScript features</li>
			<li>React support</li>
			<li>JSX & TSX support as well as JS & TS</li>
			<li>CSS loading + SASS and SCSS compilation</li>
			<li>Autoprefixing for retrocompatibility</li>
			<li>HTML loading</li>
			<li>Image loading (jpg, jpeg, png & gif)</li>
			<li>Typescript support</li>
			<li>Cross environment variables support</li>
			<li>Live reloading</li>
			<li>Code splitting</li>
		</ul>
	</Fragment>
);

export default Features;