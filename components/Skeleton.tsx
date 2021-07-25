import React from "react"
import styled, { keyframes } from "styled-components"

const SkeletonContainer = styled.div`
  margin-top: 40px;
`

const pulse = keyframes`
  0%, 100% {
    background-color: rgba(255, 255, 255, 0.03);
  }
  50% {
    background-color: rgba(255, 255, 255, 0.07);
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
      </SkeletonContainer>
    )
  }

  return (
    <div className="skeleton-disabled" data-testid="skeleton-disabled">
      {children}
    </div>
  )
}

export default Skeleton
