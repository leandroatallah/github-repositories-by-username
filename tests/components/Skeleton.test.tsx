import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Skeleton from "../../components/Skeleton"

describe(`Skeleton`, () => {
  it(`should render correctly`, () => {
    const { queryByTestId } = render(
      <Skeleton loading={false}>
        <div />
      </Skeleton>
    )
    expect(queryByTestId("skeleton-container")).toBeTruthy()
  })
})
