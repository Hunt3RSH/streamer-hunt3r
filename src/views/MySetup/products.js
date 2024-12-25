import asus from './img/Asus.png';
import camera from './img/LogiCam.png';
import headPhones from './img/LogiHead.png';
import mice from './img/mice.png';
import klava from './img/Klava.png';
import monitore from './img/msi.png';
import kovrik from './img/Kover.png';
import dual from './img/dual.png';

const products = [
  {
    name: 'Ноутбук',
    info: 'ASUS ROG Strix G15',
    highlights: [
      'Процессор: Ryzen 9 5900HX',
      'Відео: Radeon RX 6800M 12GB',
      "Пам'ять: Kingston Fury SODIMM DDR4 32Gb (3200mhz)",
      'SSD диск Samsung 980 1TB M.2 до (3500mb)',
      'SSD диск SAMSUNG 1TB M.2 до (3000mb)',
    ],
    img: {
      src: asus,
      alt: 'Ноутбук ASUS ROG Strix G15',
    },
  },
  {
    name: 'Веб-камера',
    info: 'Logitech C920',

    highlights: [
      'Роздільна здатність відео: FullHD (1920x1080)',
      'Фокусування: Автофокус',
      'Частота кадрів (кадрів / с):	30',
      'Кут огляду:	78°',
      'Додатково: фотографії до 15 МП',
    ],
    img: {
      src: camera,
      alt: 'Камера',
    },
  },
  {
    name: 'Наушники',
    info: 'Logitech G PRO X',

    highlights: [
      'Тип: Дротові',
      'Активне шумозаглушення',
      'Вага, г: 320',
      'Спосіб підключення: Звукова карта',
    ],
    img: {
      src: headPhones,
      alt: 'Наушники',
    },
  },
  {
    name: 'Мишка',
    info: 'SteelSeries Rival 3',

    highlights: [
      'Інтерфейс комунікації з ПК: USB',
      'Тип сенсора: оптичний',
      'Роздільна здатність, dpi: 8500',
      'Розмір миші, мм:	120,6x67x37,9',
      'Вага миші, г: 77',
    ],
    img: {
      src: mice,
      alt: 'Мишка',
    },
  },
  {
    name: 'Клавіатура',
    info: 'A4Tech Bloody B120',

    highlights: [
      'Тип клавіатури: Мембранні',
      'Підєднання: Дротове',
      'Розміри: 458 x 37 x 180 мм',
    ],
    img: {
      src: klava,
      alt: 'Клавіатура',
    },
  },
  {
    name: 'Монітор',
    info: 'MSI Optix MAG273',

    highlights: [
      'Максимальна частота оновлення: 144hz',
      'Діагональ дисплея: 27" ',
      'Роздільна здатність дисплея: 1920x1080 (FullHD)',
      'Тип матриці: IPS',
    ],
    img: {
      src: monitore,
      alt: 'Монітор',
    },
  },
  {
    name: 'Коврик',
    info: 'Hator NaVi Out of space L',

    highlights: [
      'Розмір: великий',
      'Матеріал: тканина, гума',
      'Поверхня: Speed',
      'Довжина килимка: 420 мм',
      'Ширина килимка: 500 мм',
    ],
    img: {
      src: kovrik,
      alt: 'Коврик',
    },
  },
  {
    name: 'Геймпад',
    info: 'DualShock 4',

    highlights: ['Підключення: Бездротове', 'Живлення: Акумулятор'],
    img: {
      src: dual,
      alt: 'Геймпад',
    },
  },
];

export default products;
