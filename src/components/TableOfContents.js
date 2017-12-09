import React from 'react'
import styled from 'styled-components'
import { Link } from './Components'
import { colors, sizes, fontWeights } from '../utils/design'
import { capitalize } from '../utils/js'

const Container = styled.div`
  color: ${colors.text.muted};
  font-weight: ${fontWeights.medium};
`

const TOCItem = styled.span`
  margin-left: 12px;

  a {
    color: ${colors.text.header};
    font-style: italic;
    text-decoration: none;

    &:hover {
      color: ${colors.text.heading};
    }
  }

  &:not(&:first-child) {
    &:before {
      content: '|';
      font-weight: normal;
      color: ${colors.text.muted};
      margin-right: 12px;
    }
  }
`

const TableOfContents = props => {
	return (
    <Container>
      Jump to:
      {props.items.map((item, index) =>
        <TOCItem>
          <Link to={`#${item}`} key={index}>
            {capitalize(item)}
          </Link>
        </TOCItem>
      )}
    </Container>
  )
}

export default TableOfContents