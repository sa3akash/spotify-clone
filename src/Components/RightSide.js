import React from 'react'
import styled from 'styled-components'

const RightSide = () => {
  return (
    <RightContainer>

    </RightContainer>
  )
}

export default RightSide

const RightContainer = styled.div`
  height: 100vh;
  min-width: 80px;
  width: 100px;
  z-index: 1;
  backdrop-filter: blur(10px);
  background: rgba(34,34,34,0.6);
  border-left: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s cubic-bezier(0.175,0.885,0.32,0.27);
`