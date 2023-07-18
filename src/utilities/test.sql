
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";




CREATE TABLE `companies` (
  `company_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `website` varchar(200) DEFAULT NULL,
  `phone` varchar(12) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `logo` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `companies` (`company_id`, `name`, `website`, `phone`, `email`, `logo`, `created_at`, `updated_at`) VALUES
(1, 'comapny x', 'roblassuplychain.com', '2519088838', 'supplychain@gmial.com', '', '2023-07-14 19:33:06', '2023-07-14 19:33:06'),
(2, 'company y', 'agelgileco-package.com', '251908883837', 'age@gmail.com', '', '2023-07-14 19:34:07', '2023-07-14 19:34:07');



CREATE TABLE `news` (
  `id` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `products` (
  `product_id` int NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `company` int NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `products` (`product_id`, `product_name`, `description`, `company`, `price`, `image`, `updated_at`, `created_at`) VALUES
(1, 'product one', 'cool product', 1, '4500.67', NULL, '2023-07-14 19:34:54', '2023-07-14 19:34:54'),
(2, 'product two', 'amazing product two', 2, '8800.99', NULL, '2023-07-14 19:35:34', '2023-07-14 19:35:34');



CREATE TABLE `teams` (
  `first_name` varchar(75) NOT NULL,
  `last_name` varchar(75) NOT NULL,
  `role` varchar(100) NOT NULL,
  `profile` varchar(200) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `teams` (`first_name`, `last_name`, `role`, `profile`, `phone`, `email`, `updated_at`, `created_at`, `id`) VALUES
('Kaleb', 'Asnake', 'supplier', '', '251908883869', 'kaya@supply.com', '2023-07-14 19:38:38', '2023-07-14 19:38:38', 1),
('akrem ', 'beshir', 'provider', '', '251908883839', 'akrem@provide.com', '2023-07-14 19:39:24', '2023-07-14 19:39:24', 2);



CREATE TABLE `users` (
  `username` varchar(75) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `users` (`username`, `password`, `role`, `created_at`, `updated_at`, `id`) VALUES
('test', 'test', 'developer', '2023-07-14 19:39:46', '2023-07-14 19:39:46', 1);


ALTER TABLE `companies`
  ADD PRIMARY KEY (`company_id`);

ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `company` (`company`);

ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `companies`
  MODIFY `company_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `news`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;


ALTER TABLE `products`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


ALTER TABLE `teams`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `products`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;