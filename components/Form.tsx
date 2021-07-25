import React from "react"
import { FormEvent, useState } from "react"
import styled from "styled-components"

const FormComponent = styled.form`
  position: relative;
`

const Input = styled.input`
  box-sizing: border-box;
  height: 75px;
  border: 3px solid transparent;
  border-radius: 4px;
  width: 100%;
  padding: 0 20px;
  font-size: 1.25rem;
  color: #333;
  background-color: #f5f5f5;
  transition: all 0.2s;
  &:focus,
  &:hover {
    outline: 0;
    box-shadow: none;
    border-color: #eee;
    background-color: #f0f0f0;
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`

const InputSubmit = styled.input`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  display: inline-block;
  background-image: url("./static/images/search-solid.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  font-size: 0;
  color: transparent;
  cursor: pointer;
  opacity: 0.75;
`

const AlertEmptyUsername = styled.div`
  display: inline-block;
  margin: 10px;
  font-size: 0.75rem;
  color: #a00;
`

interface Props {
  setListRespositories: (respositories: any[]) => void
  setLoading: (loading: boolean) => void
  setShowResult: (show: boolean) => void
  setErrorMessage: (error: string | null) => void
}

const Form = ({ setListRespositories, setLoading, setShowResult, setErrorMessage }: Props) => {
  const [disabled, setDisabled] = useState(false)
  const [showAlertEmptyUsername, setShowAlertEmptyUsername] = useState(false)

  const fetchData = async (username: string) => {
    setLoading(true)
    setShowResult(true)
    setDisabled(true)

    await fetch(`/api/search/${username}`)
      .then(async (res) => {
        if (res.status === 200) {
          const json = await res.json()

          setListRespositories(json.items)
          setErrorMessage(json.error)
        }
      })
      .catch(() => {
        setErrorMessage("unknow")
      })

    setTimeout(() => {
      setLoading(false)
      setDisabled(false)
    }, 500)
  }

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()

    const input = document.querySelector("input[name=username]") as HTMLInputElement
    if (input && input.value == "") {
      setShowAlertEmptyUsername(true)
      input.focus()

      return
    }

    fetchData(input.value)
  }

  return (
    <div>
      <FormComponent action="" method="post" onSubmit={handleSubmitForm}>
        <Input
          type="text"
          name="username"
          placeholder="Digite o nome do usuário do Github"
          onKeyDown={() => {
            setShowAlertEmptyUsername(false)
          }}
          disabled={disabled}
          data-testid="input-username"
        />
        <InputSubmit type="submit" disabled={disabled} />
      </FormComponent>

      {showAlertEmptyUsername && (
        <AlertEmptyUsername>Você precisa digitar um nome de usuário.</AlertEmptyUsername>
      )}
    </div>
  )
}

export default Form
