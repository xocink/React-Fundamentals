export interface IUserStore {
  isAuth: boolean,
  name: string,
  email: string,
  token: string,
}

export interface ICourseModelStoreItem {
  id: string
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
}

export interface IAuthorModelStore {
  id: string
  name: string
}

export interface IStore {
  user: IUserStore,
  courses: ICourseModelStoreItem[],
  authors: IAuthorModelStore[],
}

export interface ILoginResponseStore {
  successful: boolean,
  result: string,
  user: {
    email: string
    name: string
  }
}
