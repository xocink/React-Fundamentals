import { IUser } from '../../interfaces/user';
import { IRegistrationResponse } from '../../interfaces/registrationResponse';

export const registerUser = async (user: IUser): Promise<IRegistrationResponse> => {
  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};
