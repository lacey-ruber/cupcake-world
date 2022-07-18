export const categories = {
  traditional: {
    _id: '4f0fe312352047ff84547cf959825d88',
    name: 'Традиционные',
  },
  chocolate: { _id: '0ce27c5b41cd45a8b09ec74c6b3c0fa3', name: 'Шоколадные' },
  other: { _id: '29d8ccc1562746ba83870fbf893e04e9', name: 'Другое' },
}

// export const categories = [
//   { _id: '4f0fe312352047ff84547cf959825d88', name: 'Традиционные' },
//   { _id: '0ce27c5b41cd45a8b09ec74c6b3c0fa3', name: 'Шоколадные' },
//   { _id: '29d8ccc1562746ba83870fbf893e04e9', name: 'Другое' },
// ]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(categories)
    })
  })

export default {
  fetchAll,
}
