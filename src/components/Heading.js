import Text from 'components/Text'

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
	fontFamily: 'serif'
}

Heading.h1 = Heading.withComponent('h1')
Heading.h2 = Heading.withComponent('h2')
Heading.h3 = Heading.withComponent('h3')
Heading.h4 = Heading.withComponent('h4')
Heading.h5 = Heading.withComponent('h5')
Heading.h6 = Heading.withComponent('h6')

Heading.section = Heading.withComponent('h4')

Heading.section.defaultProps = {
	fontFamily: 'sans',
	borderTop: '2px solid',
	pt: '6px',
	uppercase: true,
	fontSize: '12px'
}

export default Heading
