export interface Repository {
  name: string
  html_url: string
  updated_at: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
}

export interface FormContextInterface {
  pageList?: number
  loading?: boolean
  showResult?: boolean
  listRepositories?: Repository[] | null
  errorMessage?: string | null
  publicRepos?: number | null
  setPageList?: (pageList: number) => void
  setLoading?: (loading: boolean) => void
  setShowResult?: (show: boolean) => void
  setListRepositories?: (repositories: any[]) => void
  setErrorMessage?: (error: string | null) => void
  setPublicRepos?: (publicRepos: number | null) => void
}
