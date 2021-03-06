import { categories } from './categories.api'

const cupcakes = [
  {
    _id: 'a354c76b391b4d80946cf077c9e57791',
    title: 'Клубничка',
    price: 395,
    category: categories.traditional,
    rating: 4,
  },
  {
    _id: '280b1464bedc4650993dd49aaace89e1',
    title: 'Розовый пирожок',
    price: 450,
    category: categories.chocolate,
    rating: 2,
  },
  {
    _id: '930cbf874a7b403cbf28913e33d31160',
    title: 'Ванильная няша',
    price: 290,
    category: categories.other,
    rating: 6,
  },
  {
    _id: 'b08c722613ce4bf9bd8c068b62b27340',
    title: 'Радуга Дэш',
    price: 385,
    category: categories.traditional,
    rating: 4,
  },
  {
    _id: '876743945c7a41348c4340e8e5b75943',
    title: 'Барсик',
    price: 395,
    category: categories.chocolate,
    rating: 10,
  },
  {
    _id: 'f4e74db042a74e83b8a76f19bf16667f',
    title: 'Бутерброд с вишенкой',
    price: 450,
    category: categories.other,
    rating: 1,
  },
  {
    _id: 'fa5d24b1a23f4da68e6cebdcec14b0c9',
    title: 'Шоколадница',
    price: 290,
    category: categories.traditional,
    rating: 3,
  },
  {
    _id: '02d00a955ec340f99923ffc385a6fc0e',
    title: 'Чиркаш',
    price: 290,
    category: categories.chocolate,
    rating: 9,
  },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(cupcakes)
    })
  })

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(cupcakes.find((cupcake) => cupcake._id === id))
    })
  })

export default {
  fetchAll,
  getById,
}
