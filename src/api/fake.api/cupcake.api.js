import { categories } from './categories.api'

const cupcakes = [
  {
    _id: 'a354c76b391b4d80946cf077c9e57791',
    title: 'Кекс Клубничка',
    price: 395,
    category: categories.traditional,
    rating: 4,
    icon: 'image/mr-cupcake.png'
  },
  {
    _id: '280b1464bedc4650993dd49aaace89e1',
    title: 'Розовый пирожок',
    price: 450,
    category: categories.chocolate,
    rating: 2,
    icon: 'image/mr-cupcake-2.png'
  },
  {
    _id: '930cbf874a7b403cbf28913e33d31160',
    title: 'Маффин ванильный',
    price: 290,
    category: categories.other,
    rating: 6,
    icon: 'image/mr-cupcake-3.png'
  },
  {
    _id: 'b08c722613ce4bf9bd8c068b62b27340',
    title: 'Радуга Дэш',
    price: 385,
    category: categories.traditional,
    rating: 4,
    icon: 'image/mr-cupcake-4.png'
  },
  {
    _id: '876743945c7a41348c4340e8e5b75943',
    title: 'Барсик',
    price: 395,
    category: categories.chocolate,
    rating: 10,
    icon: 'image/mr-cupcake-5.png'
  },
  {
    _id: 'f4e74db042a74e83b8a76f19bf16667f',
    title: 'Рулет Сдобная особа',
    price: 450,
    category: categories.other,
    rating: 1,
    icon: 'image/mr-cupcake-6.png'
  },
  {
    _id: 'fa5d24b1a23f4da68e6cebdcec14b0c9',
    title: 'Кекс Шоколадница',
    price: 290,
    category: categories.traditional,
    rating: 3,
    icon: 'image/mr-cupcake-7.png'
  },
  {
    _id: '02d00a955ec340f99923ffc385a6fc0e',
    title: 'Чиркаш',
    price: 290,
    category: categories.chocolate,
    rating: 9,
    icon: 'image/mr-cupcake-8.png'
  },
]

if (!localStorage.getItem('cupcakes')) {
  localStorage.setItem('cupcakes', JSON.stringify(cupcakes))
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('cupcakes')))
    }, 2000)
  })

  const update = (id, data) =>
  new Promise((resolve) => {
    const cupcakes = JSON.parse(localStorage.getItem('cupcakes'))
    const cupcakeIndex = cupcakes.findIndex((u) => u._id === id)
    cupcakes[cupcakeIndex] = { ...cupcakes[cupcakeIndex], ...data }
    localStorage.setItem('cupcakes', JSON.stringify(cupcakes))
    resolve(cupcakes[cupcakeIndex])
  })

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem('cupcakes')).find(
          (cupcake) => cupcake._id === id
        )
      )
    }, 1000)
  })

export default {
  fetchAll,
  getById,
}
