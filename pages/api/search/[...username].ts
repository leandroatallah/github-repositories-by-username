import type { NextApiRequest, NextApiResponse } from "next"

const SearchUsername = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { username } = req.query

  if (!username) {
    res.status(400).json({
      error: "O paramentro Username é obrigatório.",
    })
  }

  await fetch(`https://api.github.com/users/${username}/repos`)
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
