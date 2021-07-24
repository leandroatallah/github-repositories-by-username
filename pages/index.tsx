import { useState } from "react"
import Head from "next/head"
import Skeleton from "components/Skeleton"
import HeaderBar from "components/HeaderBar"
import Form from "components/Form"
import ListRespositories from "components/ListRespositories"
import styled from "styled-components"

const Container = styled.div``

const Wrapper = styled.div`
  max-width: 840px;
  margin: 0 auto;
`

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [listRespositories, setListRespositories] = useState(null)

  return (
    <Container>
      <Head>
        <title>Github RepoStars | Buscar repositorios pelo nome de usuário</title>
      </Head>

      <HeaderBar />

      <Wrapper>
        <Form
          setListRespositories={setListRespositories}
          setLoading={setLoading}
          setError={setError}
          setShowResult={setShowResult}
        />

        {showResult && (
          <Skeleton loading={loading} error={error}>
            {!loading && listRespositories && <ListRespositories items={listRespositories} />}
          </Skeleton>
        )}
      </Wrapper>
    </Container>
  )
}
