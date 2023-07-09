export default function splitStringToList(
  inputString: string | null
): string[] | null {
  if (inputString === null) {
    return null;
  }
  return inputString.split(',');
}
