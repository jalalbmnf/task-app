export const maskCardNumber = (cardNumber: string): string => {
  const trimmedNumber: string = cardNumber.replaceAll(" ", "");
  const lastDigits: string = trimmedNumber.slice(-4);
  return lastDigits.padStart(trimmedNumber.length - 1, "*");
};
