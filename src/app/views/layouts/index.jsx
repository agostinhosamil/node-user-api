import React from 'react'

export default ({ children, title }) => (
	<html>
		<head>
			<title>App - { title }</title>
		</head>
		<body>
			{ children }
		</body>
	</html>
)
