export const removeDotFromPhotoUrl = (photoURL: string) => {
  if (photoURL.startsWith('./')) {
    // Replace the leading './' with '/' to make it a root-relative path
    return `/${photoURL.slice(2)}`
  }

  // If it doesn't start with './', return the original URL
  return photoURL
}
