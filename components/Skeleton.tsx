import styled, { keyframes } from "styled-components"

const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
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

const Skeleton = ({ loading, error, children }: Props): JSX.Element => {
  if (loading) {
    return (
      <SkeletonContainer>
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

  if (error) {
    return <div className="skeleton-error">erro</div>
  }

  return <div className="skeleton-disabled">{children}</div>
}

export default Skeleton
