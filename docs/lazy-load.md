## Как использовать Lazy?

Скрипт заменяет data-src на src при загрузке, и наоборот, добавляет skeleton

Добавьте HTML-атрибуты data-src и data-loaded к изображениям, которые хотите лениво загружать.

### Преимущества:

Уменьшает время загрузки страницы.
Экономит трафик пользователей.
Улучшает отзывчивость страницы.

### Минусы:

Не подходит для изображений, которые должны быть видны сразу.

### Пример:

```html
<img data-src="load.jpg" data-loaded="false" />
```