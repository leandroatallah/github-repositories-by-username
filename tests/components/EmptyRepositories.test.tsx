import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import EmptyRepositories from "../../components/EmptyRepositories"

describe("EmptyRepositories", () => {
  it("if not find repositories", () => {
    const { getByText } = render(<EmptyRepositories message="no_repositories" />)
    const noRepos = getByText("Ops! Nenhum repositório foi encontrado para este usuário.")
    expect(noRepos).toBeTruthy()
  })
  it("if find user not exists", () => {
    const { getByText } = render(<EmptyRepositories message="not_found" />)
    const notFound = getByText("Ops! Este usuário não existe.")
    expect(notFound).toBeTruthy()
  })
  it("if is not passing message text", () => {
    const { getByText } = render(<EmptyRepositories message="" />)
    const notFound = getByText("Houve algum erro com sua pesquisa.")
    expect(notFound).toBeTruthy()
  })
  it("if is passing any message text", () => {
    const { getByText } = render(<EmptyRepositories message="any text" />)
    const notFound = getByText("Houve algum erro com sua pesquisa.")
    expect(notFound).toBeTruthy()
  })
})
