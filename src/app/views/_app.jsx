import React from 'react'

import { Container, Global } from './components/styles'

export default ({ children: PageComponent, ...props }) => (
	<React.Fragment>
		<Global />
		<Container>
			<PageComponent { ...props } />
		</Container>
	</React.Fragment>
)
