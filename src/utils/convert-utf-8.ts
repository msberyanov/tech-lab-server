export const convertUtf8 = (
  value: string
) => {
  return Buffer
    .from(value, 'utf-8')
    .toString();
}
