# RkTechnologies
# 🐱 Cat Gallery App

Простое приложение для отображения случайных изображений котов с использованием [TheCatAPI](https://thecatapi.com/). Проект создан в рамках отборочного задания.

## 🚀 Технологии

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [styled-components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [TheCatAPI](https://thecatapi.com/)

## 📸 Функциональность

- Получение случайного изображения кота по нажатию кнопки
- Автоматическое обновление изображения каждые 5 секунд (по желанию пользователя)
- Возможность включения/отключения функционала
- Интуитивный и отзывчивый UI

## 📁 Структура проекта

```bash
src/
├── api/
│   └── fetchCat.ts          # Функция запроса к API
├── components/
│   ├── Controls.tsx         # Компоненты управления
│   ├── CatImage.tsx         # Компонент отображения изображения
│   └── Wrapper.tsx          # Обёртка с layout стилями
├── App.tsx                  # Главный компонент
├── main.tsx                 # Точка входа
