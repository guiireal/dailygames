export function splitDescription(description: string) {
  return description.length > 100
    ? `${description.slice(0, 100)}...`
    : description;
}
