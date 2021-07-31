SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE ArtDB;
USE ArtDB;

CREATE TABLE `Artwork` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `medium` varchar(255) NOT NULL,
  `year` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `Artwork` (`id`, `title`, `artist`, `medium`, `year`) VALUES
(1, 'Mona Lisa', 'Leonardo da Vinci', 'Oil on poplar panel', 1506),
(2, 'The Persistence of Memory', 'Salvador Dali', 'Oil on canvas', 1931);


ALTER TABLE `Artwork`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `Artwork`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
