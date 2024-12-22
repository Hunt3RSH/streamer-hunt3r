# React template

## Реакт 
```jsx
import React, { Component } from 'react';
```

## REDUX
```jsx
npm install redux
```
```jsx
npm install react-redux;
```

Redux Toolkit устанавливается как стандартный NPM пакет.
```jsx
npm install @reduxjs/toolkit react-redux
```

Если вы инициализируете создание стартовых файлов приложения используя Create React App, без заранее заготовленного шаблона проекта, как например для домашних работ, в таком случае стоит использовать официальный шаблон. 
Для этого команде npx create-react-app нужно передать флаг --template со значением redux.
```jsx
npx create-react-app my-app --template redux
```
## Axios 
```jsx
npm i axios
```

## Стайл компоненты
```jsx
npm install --save styled-components
```
```jsx
import styled from 'styled-components';
```


## Проп тайпс
```jsx
import PropTypes from 'prop-types';
```

## Реакт-Роутер
```jsx
npm install react-router-dom
```
```jsx
import { Routes, Route } from "react-router-dom";
```
Все что необходимо сделать, это обернуть компонентом BrowserRouter все приложение.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

## Импорт Иконок
```jsx
npm install react-icons --save
```
```jsx
import { Имя иконки} from "react-icons/io";
```

## Добавлять уведомления в приложение
### Toastyfy
```jsx
npm i react-toastify
```
```jsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
```
### Notiflix 
```jsx
npm i notiflix
```
```jsx
import Notiflix from 'notiflix';
```

## Nano ID
```jsx
npm i nanoid
```
```jsx
import { nanoid } from 'nanoid';
```

## ThemeProvider
В index.js 
```jsx
import { ThemeProvider } from 'styled-components';
import { theme } from './Utils/Theme';
```

 ```jsx
 // и покрываем APP в 
<ThemeProvider theme={theme}></ThemeProvider>
```
## Loader spiner
```jsx
npm i react-loader-spinner
```
```jsx
import { Blocks } from 'react-loader-spinner'
// в разметке:
<Blocks
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
/>
```
выбрать спинер можно 
[здесь](https://mhnpd.github.io/react-loader-spinner/docs/category/components/).

## Аватарки юзера

```jsx
npm i react-avatar
```
```jsx
import Avatar from 'react-avatar';
```
```jsx
<Avatar name="{name}" />
```

## Bootstrap
```jsx
npm install react-bootstrap bootstrap
```
```jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // в индекс.js
```
Getting Started Bootstrap
[link](https://react-bootstrap.netlify.app/getting-started/introduction).
