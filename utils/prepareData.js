export const prepare = (path = 'galleries/dalat', length) => {
  const arr = []
  for (let index = 0; index < length; index++) {
    arr.push(`/${path}/${index + 1}.jpg`)
  }
  return arr;
}