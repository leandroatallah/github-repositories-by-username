import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import ListRepositories from "../../components/ListRepositories"

describe("ListRepositories", () => {
  it("render list with one item", () => {
    const { container } = render(
      <ListRepositories
        items={[
          {
            name: "repo1",
            html_url: "#",
            updated_at: "2018-01-01T00:00:00Z",
            stargazers_count: 1,
            watchers_count: 2,
            forks_count: 3,
          },
        ]}
      />
    )
    expect(container.querySelectorAll(".list-item")).toHaveLength(1)
  })

  it("render list with one item", () => {
    const { container } = render(
      <ListRepositories
        items={[
          {
            name: "repo1",
            html_url: "#",
            updated_at: "2018-01-01T00:00:00Z",
            stargazers_count: 1,
            watchers_count: 2,
            forks_count: 3,
          },
          {
            name: "repo2",
            html_url: "#",
            updated_at: "2018-01-01T00:00:00Z",
            stargazers_count: 1,
            watchers_count: 2,
            forks_count: 3,
          },
        ]}
      />
    )
    expect(container.querySelectorAll(".list-item")).toHaveLength(2)
  })

  it("render with empty list items", () => {
    const { container } = render(<ListRepositories items={[]} />)
    expect(container.querySelectorAll(".list-item")).toHaveLength(0)
  })
})
