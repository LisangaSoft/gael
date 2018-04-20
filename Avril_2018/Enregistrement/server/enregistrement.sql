-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2018 at 12:21 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `enregistrement`
--

-- --------------------------------------------------------

--
-- Table structure for table `departements`
--

CREATE TABLE IF NOT EXISTS `departements` (
  `departement_id` int(11) NOT NULL AUTO_INCREMENT,
  `nomdeparte` varchar(25) NOT NULL,
  `niveau` varchar(25) NOT NULL,
  PRIMARY KEY (`departement_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `departements`
--

INSERT INTO `departements` (`departement_id`, `nomdeparte`, `niveau`) VALUES
(1, 'informatique', 'l1'),
(2, 'finance', 'l2'),
(3, 'reseau et telecom', 'l2'),
(4, 'gestion de risque', 'l1');

-- --------------------------------------------------------

--
-- Table structure for table `etudiants`
--

CREATE TABLE IF NOT EXISTS `etudiants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(25) NOT NULL,
  `postnom` varchar(25) NOT NULL,
  `prenom` varchar(25) NOT NULL,
  `datenaiss` date NOT NULL,
  `lieu_naissance` varchar(100) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `picture` varchar(100) NOT NULL,
  `faculte_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `faculte_id` (`faculte_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Dumping data for table `etudiants`
--

INSERT INTO `etudiants` (`id`, `nom`, `postnom`, `prenom`, `datenaiss`, `lieu_naissance`, `adresse`, `picture`, `faculte_id`) VALUES
(1, 'mapwata', 'gael', 'gael', '2018-04-10', 'kinshasa', 'kisako', 'image', 5),
(13, 'zilstra', 'kabatengo', 'joseph', '2018-05-15', 'butembo', 'gombe', 'undefined', 3),
(14, 'asqngo', 'kalonji', 'daniel', '2018-04-15', 'kinshsa', 'kasavubu', 'undefined', 4),
(16, 'kasasa', 'fiston', 'fiston', '2018-01-05', 'kinshasa', 'lemba', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 5),
(17, 'mapwata', 'gael', 'gael', '2018-05-06', 'kinshasa', 'lemba', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 5),
(18, 'djoy djoy', 'mpongo', 'alex', '2018-02-15', 'kinshsa', 'kasavubu', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 6),
(19, 'mbole', 'jeluc', 'jeluc', '2015-02-02', 'kinshasa', 'lemba terminus', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 6),
(20, 'mapwata', 'gael', 'gael', '2018-01-14', 'kinshasa', 'lemba', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 5),
(21, 'kevin', 'bokanga', 'nille', '1994-10-31', 'kinshasa', 'lezmba', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 5);

-- --------------------------------------------------------

--
-- Table structure for table `facultes`
--

CREATE TABLE IF NOT EXISTS `facultes` (
  `faculte_id` int(11) NOT NULL AUTO_INCREMENT,
  `nomfac` varchar(25) NOT NULL,
  `departement_id` int(11) NOT NULL,
  PRIMARY KEY (`faculte_id`),
  KEY `departement_id` (`departement_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `facultes`
--

INSERT INTO `facultes` (`faculte_id`, `nomfac`, `departement_id`) VALUES
(3, 'upc', 1),
(4, 'isipq', 2),
(5, 'isp', 3),
(6, 'ista', 4);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `etudiants`
--
ALTER TABLE `etudiants`
  ADD CONSTRAINT `etudiants_ibfk_1` FOREIGN KEY (`faculte_id`) REFERENCES `facultes` (`faculte_id`);

--
-- Constraints for table `facultes`
--
ALTER TABLE `facultes`
  ADD CONSTRAINT `facultes_ibfk_1` FOREIGN KEY (`departement_id`) REFERENCES `departements` (`departement_id`);
