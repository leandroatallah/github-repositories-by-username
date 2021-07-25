import styled from "styled-components"
import ListItem from "components/ListItem"
import { Repository } from "interfaces"
import React from "react"

const ListRespositoriesContainer = styled.div`
  margin-top: 40px;

  .profile-info {
    width: 100%;
  }
`

interface Props {
  items: Repository[] | null
}

const ListRespositories = ({ items }: Props): JSX.Element => {
  return (
    <ListRespositoriesContainer>
      {items && items.length > 0 && items.map((item, index) => <ListItem {...item} key={index} />)}
    </ListRespositoriesContainer>
  )
}

export default ListRespositories
