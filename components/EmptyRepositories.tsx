import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin: 20px 0;
  padding: 20px 0;
  font-size: 1.4em;
  font-weight: bold;
  margin-top: 40px;
`

interface Props {
  message: string | null
}

const EmptyRepositories = ({ message }: Props): JSX.Element => {
  let messageText

  switch (message) {
    case "no_repositories":
      messageText = "Ops! Nenhum repositório foi encontrado para este usuário."
      break
    case "not_found":
      messageText = "Ops! Este usuário não existe."
      break
    case "no_more":
      messageText = "Não há mais repositórios"
      break
    default:
      messageText = "Houve algum erro com sua pesquisa."
      break
  }
  return <Title>{messageText}</Title>
}

export default EmptyRepositories
