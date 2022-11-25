import { Default } from '../constants/Default'

export const getTerms = async (page: number = Default.PAGE, size: number = Default.SIZE): Promise<unknown> => {
  const params = new URLSearchParams({ page: page.toString(), size: size.toString() })

  return await fetch(`https://www.ebi.ac.uk/ols/api/ontologies/efo/terms?${params.toString()} `)
    .then(async (response) => await response.json())
}
