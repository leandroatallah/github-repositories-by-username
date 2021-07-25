import type { NextApiRequest, NextApiResponse } from "next"

const SearchUsername = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { username, page } = req.query
  let public_repos = 0

  if (!username) {
    res.status(400).json({
      error: "O paramentro Username é obrigatório.",
    })
  }

  await fetch(`https://api.github.com/users/${username[0]}`).then(async (res) => {
    const json = await res.json()
    public_repos = json.public_repos
  })

  await fetch(
    `https://api.github.com/users/${
      username[0]
    }/repos?sort=updated&direction=desc&per_page=10&page=${page || "1"}`
  )
    .then(async (e) => {
      if (e.status === 404) {
        res.status(200).json({
          items: [],
          error: "not_found",
        })
      }

      if (e.status === 200) {
        const json = await e.json()

        if (json.length > 0) {
          res.status(200).json({
            items: json,
            error: false,
            public_repos,
          })
        } else {
          res.status(200).json({
            items: [],
            error: "no_repositories",
          })
        }
      }
    })
    .catch(() => {
      res.status(500).json({
        error: "Houve algum erro ao fazer a busca",
      })
    })
}

export default SearchUsername
