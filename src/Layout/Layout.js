import React from 'react'
import Main from './Main'

import styled from 'styled-components'

const Layout = (props) => {
  return (
    <Page>
      <Main/>
    </Page>
  )
}

const Page = styled.div`
  min-height: 100vh;
  display:flex;
`

export default Layout