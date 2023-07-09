export default function splitStringToList(
  inputString: string
): string[] | null {
  if (inputString === null) {
    return null;
  }
  return inputString.split(',');
}
