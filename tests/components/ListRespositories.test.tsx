import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import ListRespositories from "../../components/ListRespositories"

describe("ListRespositories", () => {
  it("render with empty list items", () => {
    const listRespositories = render(<ListRespositories items={[]} />)
    expect(listRespositories).toMatchSnapshot()
  })
})
