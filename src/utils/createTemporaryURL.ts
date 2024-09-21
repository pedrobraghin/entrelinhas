export function createTemporaryUrl(image: File) {
  const temporaryUrl = URL.createObjectURL(image);
  return temporaryUrl;
}
