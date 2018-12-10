import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Root = styled.div`
  background: #00c9ff;
  background: #362646;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
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
