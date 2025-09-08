import asus from './img/Asus.png';
import camera from './img/LogiCam.png';
import headPhones from './img/LogiHead.png';
import mice from './img/mice.png';
import klava from './img/Proove Gaming Slicker Pro.png';
import monitore from './img/msi.png';
import kovrik from './img/KoverTrooper.png';
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
      alt: 'Ноутбук стрімера: ASUS ROG Strix G15',
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
      alt: 'Камера стрімера: Logitech C920',
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
      alt: 'Наушники стрімера: Logitech G PRO X',
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
      alt: 'Мишка стрімера: SteelSeries Rival 3',
    },
  },
  {
    name: 'Клавіатура',
    info: 'Proove Gaming Slicker Pro',

    highlights: [
      'Тип клавіатури: Механічні',
      'Тип механічних перемикачів: Gateron G Pro 3.0 Yellow',
      'Вид механічних перемикачів: Лінійні',
      'Підєднання: Комбіноване',
      'Розміри: 384.7 x 145 x 38.3 мм',
      'Вага: 0.998 кг',
    ],
    img: {
      src: klava,
      alt: 'Клавіатура стрімера: Proove Gaming Slicker Pro',
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
      alt: 'Монітор стрімера: MSI Optix MAG273',
    },
  },
  {
    name: 'Ігрова поверхня',
    info: 'RZTK Trooper',

    highlights: [
      'Розмір: Великий',
      'Матеріал: Тканина, гума',
      'Поверхня: Control, Speed',
      'Довжина килимка: 900 мм',
      'Ширина килимка: 400 мм',
    ],
    img: {
      src: kovrik,
      alt: 'Ігрова поверхня стрімера: RZTK Trooper 900 x 400 x 4 мм',
    },
  },
  {
    name: 'Геймпад',
    info: 'DualShock 4',

    highlights: ['Підключення: Бездротове', 'Живлення: Акумулятор'],
    img: {
      src: dual,
      alt: 'Геймпад стрімера: DualShock 4',
    },
  },
];

export default products;
