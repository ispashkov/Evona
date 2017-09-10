-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:4000
-- Время создания: Сен 10 2017 г., 22:38
-- Версия сервера: 5.6.34-log
-- Версия PHP: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `evona`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(5) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `collection` varchar(255) NOT NULL,
  `composition` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `price_opt` int(6) NOT NULL,
  `price_recommended` int(6) NOT NULL,
  `photo_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title`, `brand`, `collection`, `composition`, `color`, `price_opt`, `price_recommended`, `photo_id`) VALUES
(1, 'Блуза ER3C4249L.0360(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'Мультиколор', 53, 10750, 1),
(2, 'ЮБКА ER3Q4324S.0610(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'черный', 53, 8900, 2),
(3, 'ПЛАТЬЕ ER3L4248L.0360(600)', 'Nysense', 'Осень-Зима 2017', '100% полиэстер', 'мультиколор', 125, 25000, 0),
(4, 'Блуза ER3C4249L.0360(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'Мультиколор', 53, 10750, 1),
(5, 'ЮБКА ER3Q4324S.0610(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'черный', 53, 8900, 2),
(6, 'ПЛАТЬЕ ER3L4248L.0360(600)', 'Nysense', 'Осень-Зима 2017', '100% полиэстер', 'мультиколор', 125, 25000, 0),
(7, 'Блуза ER3C4249L.0360(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'Мультиколор', 53, 10750, 1),
(8, 'ЮБКА ER3Q4324S.0610(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'черный', 53, 8900, 2),
(9, 'ПЛАТЬЕ ER3L4248L.0360(600)', 'Nysense', 'Осень-Зима 2017', '100% полиэстер', 'мультиколор', 125, 25000, 0),
(10, 'Блуза ER3C4249L.0360(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'Мультиколор', 53, 10750, 1),
(11, 'ЮБКА ER3Q4324S.0610(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'черный', 53, 8900, 2),
(12, 'ПЛАТЬЕ ER3L4248L.0360(600)', 'Nysense', 'Осень-Зима 2017', '100% полиэстер', 'мультиколор', 125, 25000, 0),
(13, 'Блуза ER3C4249L.0360(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'Мультиколор', 53, 10750, 1),
(14, 'ЮБКА ER3Q4324S.0610(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'черный', 53, 8900, 2),
(15, 'ПЛАТЬЕ ER3L4248L.0360(600)', 'Nysense', 'Осень-Зима 2017', '100% полиэстер', 'мультиколор', 125, 25000, 0),
(16, 'Блуза ER3C4249L.0360(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'Мультиколор', 53, 10750, 1),
(17, 'ЮБКА ER3Q4324S.0610(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'черный', 53, 8900, 2),
(18, 'ПЛАТЬЕ ER3L4248L.0360(600)', 'Nysense', 'Осень-Зима 2017', '100% полиэстер', 'мультиколор', 125, 25000, 0),
(19, 'Блуза ER3C4249L.0360(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'Мультиколор', 53, 10750, 1),
(20, 'ЮБКА ER3Q4324S.0610(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'черный', 53, 8900, 2),
(21, 'ПЛАТЬЕ ER3L4248L.0360(600)', 'Nysense', 'Осень-Зима 2017', '100% полиэстер', 'мультиколор', 125, 25000, 0),
(22, 'Блуза ER3C4249L.0360(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'Мультиколор', 53, 10750, 1),
(23, 'ЮБКА ER3Q4324S.0610(600)', 'Evona', 'Осень-Зима 2017', '100% полиэстер', 'черный', 53, 8900, 2),
(24, 'ПЛАТЬЕ ER3L4248L.0360(600)', 'Nysense', 'Осень-Зима 2017', '100% полиэстер', 'мультиколор', 125, 25000, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `product_photos`
--

CREATE TABLE `product_photos` (
  `id` int(11) UNSIGNED NOT NULL,
  `photo_id` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `product_photos`
--

INSERT INTO `product_photos` (`id`, `photo_id`, `photo`) VALUES
(1, 0, 'http://evona.test30.ru/upload/iblock/b1f/b1f68ad1486a8f50fb2c14313daaae27.jpg'),
(2, 0, 'http://evona.test30.ru/upload/iblock/f5a/f5af4a24deb6d88c60b42bf2e276aec0.jpg'),
(3, 0, 'http://evona.test30.ru/upload/iblock/bcd/bcd86b5892c54181a19d301274e09267.jpg'),
(4, 1, 'http://evona.test30.ru/upload/resize_cache/iblock/39a/360_660_2/39a79a0bb7dd2c116492fd69b86fdac0.jpg'),
(5, 1, 'http://www.evona-nysense.ru/upload/iblock/a78/a780517dc101b20140e0daa6f84528cb.jpg'),
(6, 1, 'http://www.evona-nysense.ru/upload/iblock/099/0991f29e9e684d01fdce745910c936d7.jpg'),
(7, 1, 'http://www.evona-nysense.ru/upload/iblock/db1/db18e445a91e55ad7ffba868e8670694.jpg'),
(8, 2, 'http://evona.test30.ru/upload/iblock/714/714b3a3c534d5458b11cd2d245a5693f.jpg'),
(9, 2, 'http://evona.test30.ru/upload/iblock/ee2/ee2073d1f8aa2a6f3755f3762391847c.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photo_id` (`photo_id`);

--
-- Индексы таблицы `product_photos`
--
ALTER TABLE `product_photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photo_id` (`photo_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT для таблицы `product_photos`
--
ALTER TABLE `product_photos`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
