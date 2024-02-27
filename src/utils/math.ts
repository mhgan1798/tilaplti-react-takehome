export function countValues(arr: string[] | number[]) {
  const counts: Record<string, number> = {};

  for (const item of arr) {
    counts[item.toString()] = (counts[item.toString()] || 0) + 1;
  }

  return counts;
}
