export interface ILoginResponse{
  successful: boolean,
  result: string,
  user: {
    email: string
    name: string
  }
}
