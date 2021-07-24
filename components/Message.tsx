import { useEffect, useState } from "react"
import Image from "next/image"
import styled from "styled-components"

const MessageContainer = styled.div`
  opacity: 0;
  margin-top: -14px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 14px;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 99;
  transition: all 0.3s ease-in-out;

  &.fade-in {
    opacity: 1;
    margin-top: 0;
  }

  img {
    opacity: 0.5;
  }

  p {
    margin: 0 10px;
  }
`

interface Props {
  message: string | null
  showMessage: boolean
  setShowMessage: (showMessage: boolean) => void
}

const Message = ({ message, showMessage, setShowMessage }: Props): JSX.Element => {
  const [classAnimation, setClassAnimation] = useState("")

  let textMessage = ""

  switch (message) {
    case "empty":
      textMessage = "Preencha um nome de usuário."
      break
    case "not-found":
      textMessage = "Usuário não encontrado."
      break
    default:
      textMessage = "Houve um erro. Tente novamente mais tarde."
      break
  }

  useEffect(() => {
    if (showMessage) {
      setClassAnimation("fade-in")

      setTimeout(() => {
        setClassAnimation("")
        setShowMessage(false)
      }, 5000)
    } else {
      setClassAnimation("")
      setShowMessage(false)
    }
  }, [showMessage])

  return (
    <MessageContainer className={classAnimation} onClick={() => setShowMessage(false)}>
      <Image width="24" height="24" src="/static/images/exclamation-circle-solid.svg" />
      <p>{textMessage}</p>
    </MessageContainer>
  )
}

export default Message
