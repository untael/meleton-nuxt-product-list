export const sortArray: Function = (arr: any[], sortKey: string, sortType: 'asc' | 'desc') => {

  if (sortKey.includes('date')) {
    return arr.sort((a, b) => {
      if (sortType === 'desc') {
        return Date.parse(b[sortKey]) - Date.parse(a[sortKey])
      }
      return Date.parse(a[sortKey]) - Date.parse(b[sortKey])
    })
  }

  return arr.sort((a, b) => {
    if (sortType === 'desc') {
      return b[sortKey] - a[sortKey]
    }
    return a[sortKey] - b[sortKey]
  })
}
