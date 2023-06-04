import { TProduct } from '../../types/TProduct'

enum PRECO {
  CLASSICO = 1,
  BRAZUCA = 1,
  LIMITED = 1,
  IMPORTED = 1
}
export const Products: TProduct[] = [
  {
    id: "track-01",
    name: "CALIENTE",
    price: PRECO.IMPORTED,
    description: "LALIESPOSITO",
    image_url: "https://www.youtube.com/watch?v=yiimbqqFkKc"
  },
  {
    id: "track-02",
    name: "ME GUSTA",
    price: PRECO.BRAZUCA,
    description: "ANITTA",
    image_url: "https://www.youtube.com/watch?v=kIbjHtE4fd8"
  },
  {
    id: "track-03",
    name: "MODO TURBO",
    price: PRECO.BRAZUCA,
    description: "LUIZA-SONZA",
    image_url: "https://www.youtube.com/watch?v=QcS9ZndErHc"
  },
  {
    id: "track-04",
    name: "NEW RULES",
    price: PRECO.IMPORTED,
    description: "DUA-LIPA",
    image_url: "https://www.youtube.com/watch?v=k2qgadSvNyU",
  },
  {
    id: "track-05",
    name: "QUANDO A VONTADE BATER",
    price: PRECO.BRAZUCA,
    description: "PK",
    image_url: "https://www.youtube.com/watch?v=RXYWIlWHVUs"
  }
]









