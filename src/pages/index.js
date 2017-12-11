import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { Link } from '../components/Components'
import List from '../components/Lists'
import Card from '../components/Card'
import Image from '../components/Image'
import { Row, Column } from '../components/Grid'
import { colors, sizes, fontWeights } from '../utils/design'

const Portrait = styled(Image)`
  width: 100%;
  border-radius: 50%;
`

const PageTitle = styled.h2`
  margin: 0;
`

const Token = styled(Card).attrs({
	highlight: 'true',
})`
	padding: 8px;
  font-size: 14px;
  color: ${colors.text.header};
  font-weight: ${fontWeights.medium};
  letter-spacing: .03em;
  line-height: 1.3;
`

const Header = (props) => {
  if (props.isSmall) {
    return (
      <div>
        <Row mb={16}>
          <Column width={[1/4, 1/5]}>{props.image}</Column>

          <Column width={[3/4, 4/5]}>
            <PageTitle>{props.title}</PageTitle>
          </Column>
        </Row>

        <Row mb={40}>
          {props.tokens.map((token) =>
            <Column width={[1/2, 1/3]}>{token}</Column>
          )}
        </Row>
      </div>
    )
  }
  else {
    return (
      <Row mb={24}>
        <Column width={[1/5]}>{props.image}</Column>

        <Column width={[4/5]}>
          <Row mb={40}>
            <Column width={1}>
              <PageTitle>{props.title}</PageTitle>
            </Column>

            {props.tokens.map((token) =>
              <Column width={[1/2, 1/3]}>{token}</Column>
            )}
          </Row>
        </Column>
      </Row>
    )
  }
}

class IndexPage extends React.Component {
  state = {
    isSmall: false
  }

  componentDidMount = () => {
    window.matchMedia(`(min-width: ${sizes.breakpoints.medium})`).addListener(this.mediaQueryChanged)

    this.mediaQueryChanged()
  }

  mediaQueryChanged = () => {
    this.setState({isSmall: !window.matchMedia(`(min-width: ${sizes.breakpoints.medium})`).matches})
  }

  render() {
    return (
      <Page>
        <Header
          isSmall={this.state.isSmall}
          title='Chase McCoy is a design developer living in Chicago that spends a lot of time thinking about how the web works.'
          image={<Portrait src='/meta/chase.jpg' />}
          tokens={[
            <Token>Chicago, IL</Token>,
            <Token>@chase_mccoy</Token>,
            <Token>desk@chasemccoy.net</Token>
          ]}
        />

        <Row>
          <Column>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Column>
        </Row>

        <List highlight>
          <li>The best way to make interesting work is to become a more interesting person.</li>
          <li>If you want to be interesting, you have to be interested.</li>
          <li>Pay attention to what you pay attention to.</li>
        </List>

        <Row mb={40}>
          <Column width={[1, 1/2]}>
            <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
          </Column>

          <Column width={[1, 1/2]}>
            <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
          </Column>

          <Column width={[1, 1/2]}>
            <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
          </Column>

          <Column width={[1, 1/2]}>
            <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
          </Column>
        </Row>

        {this.props.data.allMarkdownRemark.edges.map(({node}) =>
          <div key={node.id}>
            <article>
              <h3>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h3>

              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </article>
          </div>
        )}
      </Page>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          timeToRead
          html
        }
      }
    }
  }
`
