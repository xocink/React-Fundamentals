export const logoutUser = () : void => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
};
