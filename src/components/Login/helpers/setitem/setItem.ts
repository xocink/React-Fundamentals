export const setItem = (item :string, keyName: string) : void => {
  localStorage.setItem(keyName, item);
};
