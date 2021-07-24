import styled from "styled-components"

const ListItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fafafa;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`

const ListItem = (props) => {
  return <ListItemStyled>item</ListItemStyled>
}

export default ListItem
