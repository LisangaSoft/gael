
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET foreign_key_checks=0;
SET names 'utf8';
SET character_set_database = 'utf8';
SET collation_database = 'utf8_unicode_ci';
--
-- Table structure for table `departements`
--
CREATE TABLE IF NOT EXISTS `departements` (
  `departement_id` int(11) NOT NULL AUTO_INCREMENT,
  `nomdeparte` varchar(25) NOT NULL,
  `niveau` varchar(25) NOT NULL,
  `faculte_id` int(11) NOT NULL,
  PRIMARY KEY (`departement_id`),
  KEY `faculte_id` (`faculte_id`),
  FOREIGN KEY (`faculte_id`) REFERENCES `facultes` (`faculte_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;
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
  `departement_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `departement_id` (`departement_id`),
  FOREIGN KEY (`departement_id`) REFERENCES `departements` (`departement_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;
--
-- Dumping data for table `etudiants`
--
-- --------------------------------------------------------
--
-- Table structure for table `facultes`
--
CREATE TABLE IF NOT EXISTS `facultes` (
  `faculte_id` int(11) NOT NULL AUTO_INCREMENT,
  `nomfac` varchar(25) NOT NULL,
  PRIMARY KEY (`faculte_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;
