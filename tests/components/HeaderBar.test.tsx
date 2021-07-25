import React from "react"
import { render } from "@testing-library/react"
import HeaderBar from "../../components/HeaderBar"

describe("HeaderBar", () => {
  it("should render", () => {
    const { container } = render(<HeaderBar />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it("Should render a image", () => {
    const { getByRole } = render(<HeaderBar />)
    const Img = getByRole("img")
    expect(Img).toBeTruthy()
  })
  it("Should render a title", () => {
    const { getByRole } = render(<HeaderBar />)
    const Title = getByRole("heading")
    expect(Title).toBeTruthy()
  })
})
