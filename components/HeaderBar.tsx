import React from "react"
import styled from "styled-components"
import Image from "next/image"

const Header = styled.header`
  background-color: #fff;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.5em;
    color: #333;
    margin: 0;
  }
`

const HeaderBar = (): JSX.Element => {
  return (
    <Header>
      <Image
        width="32"
        height="32"
        src="/static/images/patrick-star.svg"
        alt="Star Hunter | GitHub repository finder"
      />
      <h1>Star Hunter</h1>
    </Header>
  )
}

export default HeaderBar
