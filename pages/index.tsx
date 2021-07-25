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
const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

const Button = styled.button`
  margin-right: 8px;
  padding: 7.5px 10px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 3px;
  color: rgba(255, 255, 255, 0.75);
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`

const PaginationContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin: 20px 0;
  padding: 20px 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
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
              <ListRepositories items={listRepositories} />

              {console.log(publicRepos)}

              {!errorMessage && publicRepos && (
                <PaginationContainer>
                  <>
                    <ButtonGroup>
                      <>
                        {pageList > 1 && (
                          <Button onClick={() => setPageList(pageList - 1)}>Anterior</Button>
                        )}

                        {publicRepos > 10 * pageList && (
                          <Button onClick={() => setPageList(pageList + 1)}>Próximo</Button>
                        )}
                      </>
                    </ButtonGroup>

                    <span>
                      Página: {pageList} de {publicRepos ? Math.ceil(publicRepos / 10) : "1"}
                    </span>
                  </>
                </PaginationContainer>
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
