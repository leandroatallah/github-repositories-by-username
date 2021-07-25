import React, { createContext, useState } from "react"
import { Repository, FormContextInterface } from "interfaces"

interface Props {
  children: JSX.Element
}

export const FormContext = createContext<FormContextInterface | null>(null)

const App = ({ children }: Props) => {
  const [pageList, setPageList] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [showResult, setShowResult] = useState(false)
  const [listRepositories, setListRepositories] = useState<Repository[] | null>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [publicRepos, setPublicRepos] = useState<number | null>(null)

  const states: FormContextInterface = {
    pageList,
    setPageList,
    loading,
    setLoading,
    showResult,
    setShowResult,
    listRepositories,
    setListRepositories,
    errorMessage,
    setErrorMessage,
    publicRepos,
    setPublicRepos,
  }

  return <FormContext.Provider value={states}>{children}</FormContext.Provider>
}

export default App
