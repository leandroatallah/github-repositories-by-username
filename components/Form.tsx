import React, { FormEvent, useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { FormContext } from "../context/FormContext"

const FormComponent = styled.form`
  position: relative;
`

const Input = styled.input`
  box-sizing: border-box;
  height: 75px;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 100%;
  padding: 0 20px;
  font-size: 1.25rem;
  color: #fff !important;
  background-color: rgba(255, 255, 255, 0.05) !important;
  transition: all 0.2s;
  &:focus,
  &:hover {
    outline: 0;
    box-shadow: none;
    border-color: rgba(255, 255, 255, 0.1);
  }
  ::placeholder {
    color: #fff;
    opacity: 0.75;
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
  color: #f88;
`

const Form = () => {
  const [disabled, setDisabled] = useState(false)
  const [showAlertEmptyUsername, setShowAlertEmptyUsername] = useState(false)
  const formCtx = useContext(FormContext)

  const {
    // @ts-ignore
    pageList,
    // @ts-ignore
    setLoading,
    // @ts-ignore
    setShowResult,
    // @ts-ignore
    setListRepositories,
    // @ts-ignore
    setErrorMessage,
    // @ts-ignore
    setPublicRepos,
    // @ts-ignore
    setPageList,
  } = formCtx

  useEffect(() => {
    const input = document.querySelector("input[name=username]") as HTMLInputElement

    if (input.value && pageList > 0) {
      fetchData(input.value, pageList)
    }
  }, [pageList])

  const fetchData = async (username: string, page: number) => {
    setLoading(true)
    setShowResult(true)
    setDisabled(true)

    await fetch(`/api/search/${username}?page=${page || 1}`)
      .then(async (res) => {
        if (res.status === 200) {
          const json = await res.json()

          setPublicRepos(json.public_repos)
          setListRepositories(json.items)
          setErrorMessage(json.error)
        }
      })
      .catch(() => {
        setErrorMessage("unknow")
      })

    setLoading(false)
    setDisabled(false)
  }

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()

    setPageList(1)

    const input = document.querySelector("input[name=username]") as HTMLInputElement
    if (input && input.value == "") {
      setShowAlertEmptyUsername(true)
      input.focus()

      return
    }

    fetchData(input.value, 1)
  }

  return (
    <div>
      <FormComponent method="post" onSubmit={handleSubmitForm} autoComplete="off">
        <Input
          type="text"
          name="username"
          placeholder="Digite o nome do usuário do Github"
          onKeyDown={() => {
            setShowAlertEmptyUsername(false)
          }}
          disabled={disabled}
          autoComplete="off"
          data-testid="input-username"
        />
        <InputSubmit type="submit" disabled={disabled} data-testid="input-submit" />
      </FormComponent>

      {showAlertEmptyUsername && (
        <AlertEmptyUsername>Você precisa digitar um nome de usuário.</AlertEmptyUsername>
      )}
    </div>
  )
}

export default Form
