const productList = [
  {
    id: '1',
    imgUrl: '1.jpg',
    productId: '1',
    productName: 'iPhone',
    title: 'iPhone 11 Kırmızı Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Gri',
    colorId: '5',
    isAddedBasket: false,
    price: 12000,
    currentPrice: 16000,
    discountRate: 20,
  },
  {
    id: '2',
    imgUrl: '2.jpg',
    productId: '2',
    productName: 'iPhone',
    title: 'iPhone 11 Siyah Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Sarı',
    colorId: '1',
    isAddedBasket: false,
    price: 9085,
    currentPrice: 12400,
    discountRate: 12,
  },
  {
    id: '3',
    imgUrl: '3.jpg',
    productId: '3',
    productName: 'Galaxy S20 FE',
    title: 'Samsung Galaxy S20 FE 256 GB (Samsung Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Samsung',
    brandId: '4',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Yeşil',
    colorId: '3',
    isAddedBasket: false,
    price: 5299.9,
    currentPrice: 6999,
    discountRate: 12,
  },
  {
    id: '4',
    imgUrl: '4.jpg',
    productId: '4',
    productName: 'iPhone',
    title: 'iPhone 11 Beyaz Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Beyaz',
    colorId: '6',
    isAddedBasket: false,
    price: 10000,
    currentPrice: 11000,
    discountRate: 9,
  },
  {
    id: '5',
    imgUrl: '5.jpg',
    productId: '5',
    productName: 'LG K10',
    title: 'Yenilenmiş LG K10 (12 Ay Garantili)',
    categoryName: 'Telefon',
    brand: 'LG',
    brandId: '2',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Yeşil',
    colorId: '3',
    isAddedBasket: false,
    price: 777.09,
    currentPrice: 789,
    discountRate: 2,
  },
  {
    id: '6',
    imgUrl: '6.jpg',
    productId: '6',
    productName: 'iPhone',
    title: 'iPhone 11 Yeşil Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'NOKIA',
    brandId: '3',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Yeşil',
    colorId: '3',
    isAddedBasket: false,
    price: 8250,
    currentPrice: 9000,
    discountRate: 20,
  },
  {
    id: '7',
    imgUrl: '7.jpg',
    productId: '7',
    productName: 'iPhone',
    title: 'iPhone 11 Yeşil Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Yeşil',
    colorId: '3',
    isAddedBasket: false,
    price: 8560,
    currentPrice: 8888,
    discountRate: 4,
  },
  {
    id: '8',
    imgUrl: '8.jpg',
    productId: '8',
    productName: 'iPhone',
    title: 'iPhone 11 Kırmızı Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Kırmızı',
    colorId: '7',
    isAddedBasket: false,
    price: 13000,
    currentPrice: 13050,
    discountRate: 1,
  },
  {
    id: '9',
    imgUrl: '9.jpg',
    productId: '9',
    productName: 'iPhone',
    title: 'iPhone 11 Beyaz Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 9085,
    currentPrice: 12400,
    discountRate: 12,
  },
  {
    id: '10',
    imgUrl: '10.jpg',
    productId: '10',
    productName: 'iPhone',
    title: 'iPhone 11 Kırmızı Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Kırmızı',
    colorId: '7',
    isAddedBasket: false,
    price: 6200,
    currentPrice: 8000,
    discountRate: 30,
  },
  {
    id: '11',
    imgUrl: '11.jpg',
    productId: '11',
    productName: 'iPhone',
    title: 'iPhone 11 Siyah Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Yeşil',
    colorId: '3',
    isAddedBasket: false,
    price: 9085,
    currentPrice: 12400,
    discountRate: 12,
  },
  {
    id: '12',
    imgUrl: '12.jpg',
    productId: '12',
    productName: 'iPhone',
    title: 'iPhone 11 Beyaz Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Yeşil',
    colorId: '3',
    isAddedBasket: false,
    price: 9085,
    currentPrice: 12400,
    discountRate: 12,
  },
  {
    id: '13',
    imgUrl: '13.jpg',
    productId: '13',
    productName: 'iPhone',
    title: 'iPhone 11 Kırmızı Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Mavi',
    colorId: '2',
    isAddedBasket: false,
    price: 7500,
    currentPrice: 8000,
    discountRate: 12,
  },
  {
    id: '14',
    imgUrl: '14.jpg',
    productId: '14',
    productName: 'Nokia 100',
    title: 'Nokia 100',
    categoryName: 'Telefon',
    brand: 'NOKIA',
    brandId: '3',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 208,
    currentPrice: 204.86,
    discountRate: 2,
  },
  {
    id: '15',
    imgUrl: '15.jpg',
    productId: '15',
    productName: 'Nokia 5',
    title: 'Nokia 5 3 GB RAM (Nokia Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'NOKIA',
    brandId: '3',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 9085,
    currentPrice: 12400,
    discountRate: 12,
  },
  {
    id: '16',
    imgUrl: '16.jpg',
    productId: '16',
    productName: 'iPhone',
    title: 'iPhone 11 Kırmızı Kılıflı Garantili',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Sarı',
    colorId: '1',
    isAddedBasket: false,
    price: 9085,
    currentPrice: 12400,
    discountRate: 12,
  },
  {
    id: '17',
    imgUrl: '17.jpg',
    productId: '17',
    productName: 'Nokia 2',
    title: 'Nokia 2 (Nokia Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'NOKIA',
    brandId: '3',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 9085,
    currentPrice: 12400,
    discountRate: 12,
  },
  {
    id: '18',
    imgUrl: '18.jpg',
    productId: '18',
    productName: 'Mi 10T Pro',
    title: 'Xiaomi Mi 10T Pro 256 GB (Xiaomi Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Xiaomi',
    brandId: '7',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 6399,
    currentPrice: 6199.9,
    discountRate: 12,
  },
  {
    id: '19',
    imgUrl: '19.jpg',
    productId: '19',
    productName: 'Samsung Galaxy M51',
    title: 'Samsung Galaxy M51 128 GB (Samsung Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Samsung',
    brandId: '4',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 3679,
    currentPrice: 3799,
    discountRate: 3,
  },
  {
    id: '20',
    imgUrl: '20.jpg',
    productId: '20',
    productName: 'Reeder P13',
    title: 'Reeder P13 Blue Max Pro 128GB',
    categoryName: 'Telefon',
    brand: 'Reeder',
    brandId: '5',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Mavi',
    colorId: '2',
    isAddedBasket: false,
    price: 2899,
    currentPrice: 2499,
    discountRate: 14,
  },
  {
    id: '21',
    imgUrl: '21.jpg',
    productId: '21',
    productName: 'Black Shark 3',
    title: 'Black Shark 3 128 GB (Resmi Distribütör Garantili)',
    categoryName: 'Telefon',
    brand: 'Black Shark',
    brandId: '6',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 2899,
    currentPrice: 2499,
    discountRate: 14,
  },
  {
    id: '22',
    imgUrl: '22.jpg',
    productId: '22',
    productName: 'Redmi Note 9 Pro',
    title: 'Xiaomi Redmi Note 9 Pro 128 GB (Xiaomi Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Xiaomi',
    brandId: '7',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Yeşil',
    colorId: '3',
    isAddedBasket: false,
    price: 3665,
    currentPrice: 3799,
    discountRate: 1,
  },
  {
    id: '23',
    imgUrl: '23.jpg',
    productId: '23',
    productName: 'Galaxy Z Flip',
    title: 'Samsung Galaxy Z Flip 256 GB (Samsung Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Samsung',
    brandId: '4',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Mavi',
    colorId: '2',
    isAddedBasket: false,
    price: 7999,
    currentPrice: 14499,
    discountRate: 45,
  },
  {
    id: '24',
    imgUrl: '24.jpg',
    productId: '24',
    productName: 'Galaxy Note 10 Plus',
    title: 'Samsung Galaxy Note 10 Plus 256 GB (Samsung Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Samsung',
    brandId: '4',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '3',
    isAddedBasket: false,
    price: 2649,
    currentPrice: 7949,
    discountRate: 45,
  },
  {
    id: '25',
    imgUrl: '25.jpg',
    productId: '25',
    productName: 'Redmi Note 9 Pro',
    title: 'Xiaomi Redmi Note 9 Pro 128 GB (Xiaomi Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Xiaomi',
    brandId: '7',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Yeşil',
    colorId: '3',
    isAddedBasket: false,
    price: 2300,
    currentPrice: 2800,
    discountRate: 25,
  },
  {
    id: '26',
    imgUrl: '26.jpg',
    productId: '26',
    productName: 'Redmi Note 9 Pro',
    title: 'Xiaomi Redmi Note 9 Pro 128 GB (Xiaomi Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Xiaomi',
    brandId: '7',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 3599,
    currentPrice: 3799,
    discountRate: 25,
  },
  {
    id: '27',
    imgUrl: '26.jpg',
    productId: '27',
    productName: 'Redmi Note 9S',
    title: 'Xiaomi Redmi Note 9S 128 GB (Xiaomi Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Xiaomi',
    brandId: '7',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 3152,
    currentPrice: 3699,
    discountRate: 25,
  },
  {
    id: '28',
    imgUrl: '28.jpg',
    productId: '28',
    productName: 'LG K61',
    title: 'LG K61 128 GB (LG Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'LG',
    brandId: '2',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 2165,
    currentPrice: 2999,
    discountRate: 27,
  },
  {
    id: '29',
    imgUrl: '29.jpg',
    productId: '29',
    productName: 'Huawei P40 Lite',
    title: 'Huawei P40 Lite 128 GB (Huawei Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Huawei',
    brandId: '8',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Yeşil',
    colorId: '3',
    isAddedBasket: false,
    price: 2511,
    currentPrice: 3499,
    discountRate: 27,
  },
  {
    id: '30',
    imgUrl: '30.jpg',
    productId: '30',
    productName: 'P Smart S',
    title: 'Huawei P Smart S 128 GB (Huawei Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Huawei',
    brandId: '8',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Yeşil',
    colorId: '3',
    isAddedBasket: false,
    price: 2396.26,
    currentPrice: 2999,
    discountRate: 19,
  },
  {
    id: '31',
    imgUrl: '31.jpg',
    productId: '31',
    productName: 'P40 Lite E',
    title: 'Huawei P40 Lite E 64 GB (Huawei Türkiye Garantili)',
    categoryName: 'Telefon',
    brand: 'Huawei',
    brandId: '8',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Siyah',
    colorId: '4',
    isAddedBasket: false,
    price: 2337.17,
    currentPrice: 3199,
    discountRate: 19,
  },
  {
    id: '32',
    imgUrl: '32.jpg',
    productId: '32',
    productName: 'iPhone 6',
    title: 'Yenilenmiş Apple iPhone 6 16 GB (12 Ay Garantili)',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Gri',
    colorId: '5',
    isAddedBasket: false,
    price: 1062.71,
    currentPrice: 1079,
    discountRate: 2,
  },
  {
    id: '33',
    imgUrl: '33.jpg',
    productId: '33',
    productName: 'iPhone 11',
    title: 'iPhone 11 256 GB',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Beyaz',
    colorId: '6',
    isAddedBasket: false,
    price: 8599,
    currentPrice: 9000,
    discountRate: 6,
  },
  {
    id: '34',
    imgUrl: '34.jpg',
    productId: '34',
    productName: 'iPhone 6',
    title: 'Yenilenmiş Apple iPhone 6 32 GB (12 Ay Garantili)',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Gri',
    colorId: '5',
    isAddedBasket: false,
    price: 1289,
    currentPrice: 1309,
    discountRate: 2,
  },
  {
    id: '35',
    imgUrl: '35.jpg',
    productId: '35',
    productName: 'iPhone 12',
    title: 'iPhone 12 Mini 256 GB',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Kırmızı',
    colorId: '7',
    isAddedBasket: false,
    price: 11499,
    currentPrice: 10499,
    discountRate: 9,
  },
  {
    id: '36',
    imgUrl: '36.jpg',
    productId: '36',
    productName: 'iPhone 6S Plus',
    title: 'Yenilenmiş Apple iPhone 6S Plus 64 GB (12 Ay Garantili)',
    categoryName: 'Telefon',
    brand: 'Apple',
    brandId: '1',
    createdDate: '2021-01-12T00:00:00:+03:00',
    color: 'Gri',
    colorId: '5',
    isAddedBasket: false,
    price: 2461,
    currentPrice: 2499,
    discountRate: 2,
  },
];

export { productList };
