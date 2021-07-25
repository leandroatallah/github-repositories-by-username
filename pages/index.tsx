import React, { useContext } from "react"
import Head from "next/head"
import styled from "styled-components"
import Skeleton from "components/Skeleton"
import HeaderBar from "components/HeaderBar"
import Form from "components/Form"
import ListRepositories from "components/ListRepositories"
import EmptyRepositories from "components/EmptyRepositories"
import { FormContext } from "context/FormContext"

const Container = styled.div``

const Wrapper = styled.div`
  max-width: 840px;
  margin: 0 auto;
`
const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #333;
  background-color: #f5f5f5;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
`

const Home = (): JSX.Element => {
  const formCtx = useContext(FormContext)
  // @ts-ignore
  const {
    // @ts-ignore
    pageList,
    // @ts-ignore
    setPageList,
    // @ts-ignore
    loading,
    // @ts-ignore
    showResult,
    // @ts-ignore
    listRepositories,
    // @ts-ignore
    errorMessage,
    // @ts-ignore
    publicRepos,
  } = formCtx

  return (
    <Container>
      <Head>
        <title>Github RepoStars | Busque repositorios pelo nome de usuário</title>
      </Head>

      <HeaderBar />

      <Wrapper>
        <Form />

        {showResult && listRepositories && (
          <Skeleton loading={loading}>
            <div>
              {pageList && <span>Página: {pageList}</span>}
              <ListRepositories items={listRepositories} />

              {console.log(publicRepos)}
              {publicRepos && publicRepos > 10 * pageList && (
                <Button onClick={() => setPageList(pageList + 1)}>Carregar mais</Button>
              )}
            </div>
          </Skeleton>
        )}

        {errorMessage && <EmptyRepositories message={errorMessage} />}
      </Wrapper>
    </Container>
  )
}

export default Home
