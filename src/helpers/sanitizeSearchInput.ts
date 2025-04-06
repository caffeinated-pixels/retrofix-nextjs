export const sanitizeSearchInput = (input: string) => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML/XML tags
    .slice(0, 100) // Limit length to prevent excessive queries
}
