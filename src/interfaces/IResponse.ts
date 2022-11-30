import { ITerm } from './ITerm'

export interface IResponse {
  page: {
    totalPages: number
    totalElements: number
  }
  _embedded?: {
    terms: ITerm[]
  }
}
