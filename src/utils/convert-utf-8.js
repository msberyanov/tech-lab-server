export const convertUtf8 = (value) => {
  return Buffer
    .from(value, 'utf-8')
    .toString();
}
