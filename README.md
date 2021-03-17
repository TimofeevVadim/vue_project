# task_2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

	# task_2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Task1 
```
Просто верстка, игрался с Медиа запросами
```

### Task2
```
Пример работы с API http://api.dev.cakeiteasy.no/api/store/bakeries/?country_code=no

Из полученного массива объектов, получаю рандомное распсания и привожу его в вид:
For {dayNameStart} - {dayNameEnd}: before {order_before}, {days_before_order} day(s) before

Пример: For monday-friday: Before 13:00, 1 day before

основная задача: группировать похожие дни: не показывать расписание на каждый день, если предыдущий
день имеет те же правила.

Для выходных дней используется формат:
{dayName}: closed

Код получился не совсем красивый, но рабочий. В скором времени постараюсь сделать его более оптимальным
```
