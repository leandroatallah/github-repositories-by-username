import React from "react"
import styled from "styled-components"
import ListItem from "./ListItem"
import { Repository } from "interfaces"

const ListRepositoriesContainer = styled.div`
  margin-top: 40px;

  .profile-info {
    width: 100%;
  }
`

interface Props {
  items: Repository[] | null
}

const ListRepositories = ({ items }: Props): JSX.Element => {
  return (
    <div>
      <ListRepositoriesContainer>
        {items &&
          items.length > 0 &&
          items.map((item, index) => <ListItem {...item} key={index} />)}
      </ListRepositoriesContainer>
    </div>
  )
}

export default ListRepositories
