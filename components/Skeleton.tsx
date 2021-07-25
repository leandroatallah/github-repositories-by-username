import React from "react"
import styled, { keyframes } from "styled-components"

const SkeletonContainer = styled.div`
  margin-top: 40px;
`

const pulse = keyframes`
  0%, 100% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #fcfcfc;
  }
`

const SkeletonItem = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  animation: ${pulse} 2s linear infinite;
`

interface Props {
  loading: boolean
  error?: boolean
  children: JSX.Element
}

const Skeleton = ({ loading, children }: Props): JSX.Element => {
  if (loading) {
    return (
      <SkeletonContainer data-testid="skeleton-container">
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </SkeletonContainer>
    )
  }

  return <div className="skeleton-disabled">{children}</div>
}

export default Skeleton
