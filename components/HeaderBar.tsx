import React from "react"
import styled from "styled-components"
import Image from "next/image"

const Header = styled.header`
  background-color: #232323;
  padding: 10px 20px 15px;
  margin-bottom: 40px;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
  }

  h1 {
    font-size: 2rem;
    margin: 0 7px;
  }
  h2 {
    font-size: 0.75rem;
    opacity: 0.5;
    font-weight: 400;
    margin: 0;
  }
`

const HeaderBar = (): JSX.Element => {
  return (
    <Header>
      <div>
        <Image
          width="28"
          height="28"
          src="/static/images/patrick-star.svg"
          alt="Star Hunter | Busque repositorios pelo nome de usuário"
        />
        <h1>Star Hunter</h1>
      </div>
      <h2>Busque repositorios pelo nome de usuário</h2>
    </Header>
  )
}

export default HeaderBar
