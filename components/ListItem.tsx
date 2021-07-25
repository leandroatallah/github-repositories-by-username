import styled from "styled-components"
import moment from "moment"
import Image from "next/image"
import React from "react"

const ListItemContainer = styled.div`
  padding: 20px;
  border-radius: 4px;
  color: #333;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`
const ListItemContainerFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 13px;
  font-weight: 400;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`

const CountICon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
  font-size: 18px;

  span {
    display: inline-block;
    margin-left: 5px;
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
      onClick={() => {
        window.open(html_url, "_blank")
      }}
    >
      <Title>{name}</Title>

      <ListItemContainerFooter>
        <span>Última atualização: {moment(updated_at).calendar()}</span>

        <div className="footer-counts">
          <CountICon>
            <Image
              width="18"
              height="18"
              src="/static/images/star-regular.svg"
              alt="Quantos marcaram com uma estrela"
              title="Quantos marcaram com uma estrela"
            />
            <span>{stargazers_count}</span>
          </CountICon>
          <CountICon>
            <Image
              width="18"
              height="18"
              src="/static/images/eye-regular.svg"
              alt="Quantos estão observando"
              title="Quantos estão observando"
            />
            <span>{watchers_count}</span>
          </CountICon>
          <CountICon>
            <Image
              width="18"
              height="18"
              src="/static/images/code-branch-solid.svg"
              alt="Quantos forks foram feitos"
              title="Quantos forks foram feitos"
            />
            <span>{forks_count}</span>
          </CountICon>
        </div>
      </ListItemContainerFooter>
    </ListItemContainer>
  )
}

export default ListItem
