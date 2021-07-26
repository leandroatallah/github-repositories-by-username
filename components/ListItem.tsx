import React from "react"
import styled from "styled-components"
import moment from "moment"
import Image from "next/image"

const ListItemContainer = styled.div`
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.02);
  transition: all 0.15s ease;

  &:hover {
    transform: translateY(-2px);
  }
`
const ListItemContainerFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 13px;
  font-weight: 400;

  @media (max-width: 748px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const FooterCounts = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  @media (max-width: 748px) {
    margin-top: 12px;
  }
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #aaf;

  @media (max-width: 748px) {
    margin-bottom: 24px;
  }
`

const CountICon = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
  font-size: 0.9rem;

  @media (max-width: 748px) {
    margin-left: 0;
  }

  div {
    display: inline-block;
  }

  span {
    margin: 0 15px 0 7px;
  }
`

interface Props {
  name: string
  html_url: string
  updated_at: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
}

const ListItem = (props: Props) => {
  const { name, html_url, updated_at, stargazers_count, watchers_count, forks_count } = props

  return (
    <ListItemContainer
      className="list-item"
      onClick={() => {
        window.open(html_url, "_blank")
      }}
    >
      <Title>{name}</Title>

      <ListItemContainerFooter>
        <span>Última atualização: {moment(updated_at).locale("pt-br").format("DD/MM/YYYY")}</span>

        <FooterCounts>
          <CountICon>
            <div className="image-wrapper">
              <Image
                width="16"
                height="16"
                src="/static/images/star-regular.svg"
                alt="Quantos marcaram com uma estrela"
                title="Quantos marcaram com uma estrela"
              />
            </div>
            <span>{stargazers_count}</span>
          </CountICon>
          <CountICon>
            <div className="image-wrapper">
              <Image
                width="16"
                height="16"
                src="/static/images/eye-regular.svg"
                alt="Quantos estão observando"
                title="Quantos estão observando"
              />
            </div>
            <span>{watchers_count}</span>
          </CountICon>
          <CountICon>
            <div className="image-wrapper">
              <Image
                width="16"
                height="16"
                src="/static/images/code-branch-solid.svg"
                alt="Quantos forks foram feitos"
                title="Quantos forks foram feitos"
              />
            </div>
            <span>{forks_count}</span>
          </CountICon>
        </FooterCounts>
      </ListItemContainerFooter>
    </ListItemContainer>
  )
}

export default ListItem
