import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.4em;
  font-weight: bold;
  color: #333;
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
