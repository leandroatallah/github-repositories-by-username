import styled from "styled-components"
import ListItem from "components/ListItem"

const ListRespositoriesContainer = styled.div`
  margin-top: 40px;
`

const ListRespositories = ({ items }): JSX.Element => {
  return (
    <ListRespositoriesContainer>
      <div>card profile info</div>
      {items && items.length > 0 && items.map((item, index) => <ListItem {...item} key={index} />)}
    </ListRespositoriesContainer>
  )
}

export default ListRespositories
