-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2020 at 07:17 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactjscrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `gid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `greetings` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`gid`, `title`, `greetings`) VALUES
(15, ' Hey, Hey man', 'You can use “hey” and “hi” to greet someone instead of “hello”. Both are particularly popular among younger people. While “hi” is appropriate to use in any casual situation, “hey” is for people who have already met. If you say “hey” to a stranger, it might be confusing for that person because he or she will try to remember when you met before! You can also add “man” to the end of “hey” when greeting males. Some people also use “hey man” to casually greet younger women, but only do this if you kn'),
(16, 'How’s your day? or How’s your day going?', 'These questions mean “how are you?” not just right now, but how you’ve been all day. You would use these greetings later in the day and with someone you see regularly. For example, you might ask a co-worker one of these questions in the afternoon, or a cashier that you see at the grocery store every evening. “It’s going well” is the grammatically correct response, but many people simply answer with “fine”, “good” or “alright”. By the way, notice that “good”, “fine” or “not bad” are perfect answe'),
(19, 'Good to see you ', 'These casual greetings are used with friends, co-workers or family members that you haven’t seen in a while. It’s common for close friends to hug when they greet each other, particularly if they haven’t seen each other in some time; so you might use this greeting along with a hug or handshake depending on your relationship with the person.'),
(20, 'Hello', 'World'),
(21, '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`gid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `gid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
