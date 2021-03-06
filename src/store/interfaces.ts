export interface IUserStore {
  isAuth: boolean,
  name: string,
  email: string,
  token: string,
  role? : string
}

export interface ICourseModelStoreItem {
  id: string
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
}

export interface ICourseModelRequestItem {
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

export interface ICoursesFetchResponse {
  successful: boolean,
  result : ICourseModelStoreItem[]
}

export interface IAuthorsFetchResponse {
  successful : boolean,
  result : IAuthorModelStore[]
}

export interface ITrackMyself {
  successful: boolean,
  result: {
    name: string
    email: string
    password: string
    role: string
    id: string
  }
}
export interface ITrackMyselfPayload {
  successful: boolean,
  result: {
    name: string
    email: string
    password: string
    role: string
    id: string
    token : string
  }
}
