# Ток в Дом

Сайт электромонтажных услуг (React + Vite + React Router).

## Требования

- Node.js 18+
- npm

## Установка

```bash
npm install
```

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Локальная разработка на [http://localhost:5173](http://localhost:5173) |
| `npm run build` | Сборка в папку `dist` |
| `npm run preview` | Просмотр production-сборки |

## Структура

```
src/
  app/           — корневой App и маршруты
  pages/         — страницы маршрутов
  components/    — layout, секции, UI
  assets/        — изображения
  styles/        — глобальные стили и переменные
  main.jsx       — точка входа
```

## Деплой

После `npm run build` содержимое папки `dist` можно разместить на любом статическом хостинге.
