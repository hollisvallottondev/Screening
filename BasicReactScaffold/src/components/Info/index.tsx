import React, { ReactElement } from 'react';
import './styles.sass';
import githubLogo from '../../images/github.png'; 
import Logo from '../../images/logo-black.svg';
 
const Info = (): ReactElement => (
	<div className='infoContainer'>
		<h3>Github</h3>
		<div className='linksContainer'>
			<div className='link'>
				<h4>Repo</h4>
				<a href='https://github.com/hollisvallottondev/Screening/tree/master/BasicReactScaffold' target='_blak'>
					<img src={githubLogo} className='githubLogo' />
				</a>
			</div>
			<div className='link'>
				<h4>Author</h4>
				<a href='https://hollisvallottondev.github.io/#/home/' target='_blak'>
					<Logo width={45} height= {45} />
				</a>
			</div>
		</div>
</div>
)

export default Info;