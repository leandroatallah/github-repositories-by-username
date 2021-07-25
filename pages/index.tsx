import React, { useState } from "react"
import Head from "next/head"
import Skeleton from "components/Skeleton"
import HeaderBar from "components/HeaderBar"
import Form from "components/Form"
import ListRespositories from "components/ListRespositories"
import EmptyRepositories from "components/EmptyRepositories"
import styled from "styled-components"
import { Repository } from "interfaces"

const Container = styled.div``

const Wrapper = styled.div`
  max-width: 840px;
  margin: 0 auto;
`

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showResult, setShowResult] = useState(false)
  const [listRespositories, setListRespositories] = useState<Repository[] | null>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

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
          setShowResult={setShowResult}
          setErrorMessage={setErrorMessage}
        />

        {showResult && listRespositories && (
          <Skeleton loading={loading}>
            <ListRespositories items={listRespositories} />
          </Skeleton>
        )}

        {errorMessage && <EmptyRepositories message={errorMessage} />}
      </Wrapper>
    </Container>
  )
}
