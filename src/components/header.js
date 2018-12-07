import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Root = styled.div`
  background: #00c9ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #92fe9d,
    #00c9ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #92fe9d,
    #00c9ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin-bottom: 1.45rem;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <Root>
    <Container>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROg30CnikeS6QbeZ5UyOYz69Jn1RQgDCcfrHPsLNkcXu2zRNUf"
            alt=""
          />
        </Link>
      </h1>
    </Container>
  </Root>
)

export default Header
