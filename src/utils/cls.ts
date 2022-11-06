export function cls(...classNames: string[]) {
  return classNames.filter((elem) => elem).join(" ");
}
