# 🎣 Коллекция кастомных React-хуков

Набор переиспользуемых хуков для типовых задач в React-приложениях.

## 📜 Список хуков

### `useViewportSize()`

Отслеживает размеры окна браузера.

const { width, height } = useViewportSize();

Возвращает:

width (number) - Ширина вьюпорта в пикселях

height (number) - Высота вьюпорта в пикселях

### `useFetch(url)`

Выполняет запросы с обработкой состояния загрузки и ошибок.

const { data, isLoading, error, refetch } = useFetch('https://api.example.com/posts');

Параметры:

url (string) - Конечная точка API

Возвращает:

data (array) - Полученные данные

isLoading (boolean) - Флаг загрузки

error (string|null) - Текст ошибки

refetch (function) - Функция повторного запроса

### `useHover()`

Определяет наведение курсора на элемент.

const { hovered, ref } = useHover();
return <div ref={ref}>{hovered ? 'Наведено' : 'Не наведено'}</div>;

Возвращает:

hovered (boolean) - Состояние наведения

ref (React ref) - Ref для присоединения к элементу

### `useLocalStorage(key)`

Работает с localStorage как с React-состоянием.

const [value, { setItem, removeItem }] = useLocalStorage('my-key');

Параметры:

key (string) - Ключ в localStorage

Возвращает:

Массив содержащий:

value (string|null) - Текущее значение

Объект с методами:

setItem (function) - Установить новое значение

removeItem (function) - Удалить значение

```

```
