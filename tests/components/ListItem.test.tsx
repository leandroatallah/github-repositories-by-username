import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import ListItem from "../../components/ListItem"
import { Repository } from "interfaces"

describe("ListItem", () => {
  it("should render a list item", () => {
    const props: Repository = {
      name: "repo1",
      html_url: "#",
      updated_at: "2018-01-01T00:00:00Z",
      stargazers_count: 1,
      watchers_count: 2,
      forks_count: 3,
    }

    const { container } = render(<ListItem {...props} />)
    expect(container).toMatchSnapshot()
  })
})
