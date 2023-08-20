export const PASSWORD_REGEX: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

export const validatePassword = (password: string): boolean => {
  return PASSWORD_REGEX.test(password);
};
