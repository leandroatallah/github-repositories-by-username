import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Skeleton from "../../components/Skeleton"

describe(`Skeleton`, () => {
  it(`should be rendered correctly if loading is true`, () => {
    const { queryByTestId } = render(
      <Skeleton loading={true}>
        <div />
      </Skeleton>
    )
    expect(queryByTestId("skeleton-container")).toBeTruthy()
  })

  it(`should not be rendered correctly if loading is false`, () => {
    const { queryByTestId } = render(
      <Skeleton loading={false}>
        <div />
      </Skeleton>
    )
    expect(queryByTestId("skeleton-container")).not.toBeTruthy()
    expect(queryByTestId("skeleton-disabled")).toBeTruthy()
  })
})
