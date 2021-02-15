import React, {FC, ReactElement, Suspense} from 'react';
import ReactDOM from 'react-dom'; 
import './styles.sass';
const Info = React.lazy(() => import('./components/Info'));
const Features = React.lazy(() => import('./components/Features'));

const App: FC = (): ReactElement => {
	const env = process.env.NODE_ENV;
	return (
		<div className='mainContainer'>
			<h1>
				This app is running in {env} mode
			</h1>
			<h2>
				Basic react webpack configuration
			</h2>
			<Suspense fallback={'Loading ...'}>
				<Features />
				<Info />
			</Suspense>
		</div>
	)
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));   