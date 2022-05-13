import React from 'react'
import { Outlet } from 'react-router-dom'

import styled from 'styled-components'

const Main = (props) => {
  return (
    <Section>
        <Outlet/>
    </Section>
  )
}

const Section = styled.div`
  display: flex;
  flex-grow: 1;
`

export default Main