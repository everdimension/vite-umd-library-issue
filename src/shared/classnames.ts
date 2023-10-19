// eslint-disable-next-line no-unused-vars
export function classnames(..._args: Array<string | null | undefined>) {
  let result = '';
  // Use classic for loop instead of for-of loop
  // to avoid this issue: https://github.com/developit/microbundle/issues/1053
  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[0];
    if (arg) {
      result += result.length === 0 ? arg : ` ${arg}`;
    }
  }
  return result;
}
