-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2017 at 02:37 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `csv`
--

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE IF NOT EXISTS `result` (
`id` int(11) NOT NULL,
  `question` varchar(144) NOT NULL,
  `yes` int(11) NOT NULL,
  `no` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `question`, `yes`, `no`) VALUES
(1, 'r1.jpg', 0, 3),
(2, 'r7.jpg', 0, 3),
(3, 'r14.jpg', 0, 3),
(4, 'r30.jpg', 0, 3),
(5, 'i2.jpg', 0, 3),
(6, 'i11.jpg', 0, 3),
(7, 'i18.jpg', 0, 3),
(8, 'i26.jpg', 0, 3),
(9, 'a8.jpg', 3, 0),
(10, 'a23.jpg', 2, 1),
(11, 'a27.jpg', 3, 0),
(12, 'a31.jpg', 0, 3),
(13, 's4.jpg', 0, 3),
(14, 's12.jpg', 0, 3),
(15, 's28.jpg', 0, 3),
(16, 's40.jpg', 0, 3),
(17, 'e5.jpg', 0, 3),
(18, 'e16.jpg', 0, 3),
(19, 'e29.jpg', 0, 3),
(20, 'e36.jpg', 0, 3),
(21, 'c6.jpg', 3, 0),
(22, 'c24.jpg', 3, 0),
(23, 'c35.jpg', 3, 0),
(24, 'c38.jpg', 0, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tb`
--

CREATE TABLE IF NOT EXISTS `tb` (
`id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `city` varchar(144) NOT NULL,
  `school` varchar(144) NOT NULL,
  `course` varchar(144) NOT NULL,
  `r` int(11) NOT NULL,
  `i` int(11) NOT NULL,
  `a` int(11) NOT NULL,
  `s` int(11) NOT NULL,
  `e` int(11) NOT NULL,
  `c` int(11) NOT NULL,
  `result` varchar(15) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb`
--

INSERT INTO `tb` (`id`, `name`, `city`, `school`, `course`, `r`, `i`, `a`, `s`, `e`, `c`, `result`) VALUES
(1, 'Glenwin G. Bernabe', '', '', '', 3, 2, 5, 3, 2, 1, ''),
(2, 'null', 'null', 'null', 'null', 0, 0, 3, 0, 0, 3, 'a,c'),
(3, 'null', 'null', 'null', 'null', 0, 0, 2, 0, 0, 3, 'c'),
(4, 'null', 'null', 'null', 'null', 0, 0, 5, 0, 0, 6, 'c');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `result`
--
ALTER TABLE `result`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb`
--
ALTER TABLE `tb`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `tb`
--
ALTER TABLE `tb`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
