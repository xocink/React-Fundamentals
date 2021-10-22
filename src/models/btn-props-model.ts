export interface IBtnProps {
  btnText : string
  action? : () => void
  deleteAction? : (str : string) => void | undefined
  deletedItem? : string
}
