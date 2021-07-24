import { FormEvent } from "react"
import styled from "styled-components"

const FormComponent = styled.form`
  position: relative;
`

const Input = styled.input`
  box-sizing: border-box;
  height: 80px;
  border: 3px solid transparent;
  border-radius: 4px;
  width: 100%;
  padding: 0 20px;
  font-size: 1.25rem;
  color: #333;
  background-color: #f5f5f5;
  transition: border-color 0.2s;
  &:focus,
  &:hover {
    outline: 0;
    box-shadow: none;
    border-color: #eee;
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`

const InputSubmit = styled.input`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 28px;
  height: 28px;
  transform: translateY(-50%);
  display: inline-block;
  background-image: url("./static/images/search-solid.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  font-size: 0;
  color: transparent;
  cursor: pointer;
`

const Form = ({ setListRespositories, setLoading, setError, setShowResult }) => {
  const fetchData = async () => {
    setLoading(true)
    setShowResult(true)

    await fetch("https://api.github.com/users/leandroatallah/repos")
      .then((res) => {
        if (res.status !== 200) {
          setError(true)
          return
        }

        return res.json()
      })
      .then((res) => {
        setLoading(false)
        setError(false)
        // setListRespositories(res)
        setListRespositories([0, 1, 2, 3])
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()
    console.log(e)
    fetchData()
  }
  return (
    <FormComponent action="" method="post" onSubmit={handleSubmitForm}>
      <Input type="text" name="username" placeholder="Digite o nome do usuário do Github" />
      <InputSubmit type="submit" />
    </FormComponent>
  )
}

export default Form
