import { EButtonTypes } from '../enums';

export interface IBtnProps {
  btnText : string
  action? : () => void
  isSubmit? : boolean
  type? : EButtonTypes,
  btnClassName? : string
}
