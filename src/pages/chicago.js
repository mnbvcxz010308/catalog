import { Heading } from 'components/Components'
import Page from 'components/Page'
import React from 'react'
import TableOfContents from 'components/TableOfContents'
import { capitalize } from 'utils/js'
import styled from 'styled-components'
import { Row, Column } from 'components/Grid'
import MediaCard from 'components/MediaCard'
import Mosaic from 'components/Mosaic'
import Image from 'components/Image'

const ChicagoPage = ({data}) => {
  const categories = data.chicago.edges.map(a => a.node.category)

  const uniqueCategories = categories.filter((item, i, array) =>
    array.indexOf(item) === i
  )

  return (
    <Page wide title='Chicago' icon='chicago'>
      <TableOfContents items={uniqueCategories} />

      {uniqueCategories.map((category, index) =>
        <Row mb={80} key={index}>
          <Column width={1}>
            <Heading id={category} key={category}>{capitalize(category)}</Heading>

            <Mosaic>
              {data.chicago.edges.filter(({node}) => node.category === category).map(({node}, i) =>
                <MediaCard
                  title={node.title}
                  description={node.description}
                  image={node.image.childImageSharp.sizes}
                  metadata={node.metadata}
                  to={node.url}
                  key={i}
                />
              )}
            </Mosaic>
          </Column>
        </Row>
      )}
    </Page>
  )
}

export default ChicagoPage

export const query = graphql`
  query ChicagoQuery {
    chicago: allChicagoHJson(sort: {fields: [category], order: ASC}) {
      edges {
        node {
          title
          category
          metadata
          description
          url
          image {
            childImageSharp {
              sizes(maxWidth: 1000) {
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
        }
      }
    }
  }
`
