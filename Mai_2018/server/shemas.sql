SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET foreign_key_checks=0;
SET names 'utf8';
SET character_set_database = 'utf8';
SET collation_database = 'utf8_unicode_ci';

CREATE TABLE IF NOT EXISTS `beneficiaires`(
`id` int (11)  NOT NULL AUTO_INCREMENT,
`labelle` varchar (25) NOT NULL,
`Departement_id` int(11) NOT NULL,
`type_beneficiaire_id` int(11) NOT NULL,
PRIMARY KEY (`id`),
KEY `Departement_id`(`Departement_id`),
KEY `type_beneficiaire_id`(`type_beneficiaire_id`),
FOREIGN KEY (`Departement_id`) REFERENCES `Departements`(`id`),
FOREIGN KEY (`type_beneficiaire_id`) REFERENCES `type_beneficiaires`(`id`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Materielles`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`nom` varchar(25) NOT NULL,
 `numeros_serie` varchar(25) NOT NULL ,
 `Etat_id` int(11) NOT NULL ,
 `beneficiaire_id` int(11) NOT NULL,
 `marque_id` int(11) NOT NULL,
  PRIMARY KEY(`id`),
  KEY `Etat_id`(`Etat_id`),
  KEY `beneficiaire_id`(`beneficiaire_id`),
  KEY `marque_id`(`marque_id`),
  FOREIGN KEY (`Etat_id`) REFERENCES `Etats`(`id`),
  FOREIGN KEY (`beneficiaire_id`) REFERENCES `beneficiaires`(`id`),
  FOREIGN KEY (`marque_id`) REFERENCES `marques`(`id`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Categorie_mats`(
`id`int(11) NOT NULL AUTO_INCREMENT,
`libelle` varchar(25) NOT NULL,
 PRIMARY KEY(`id`)
)ENGINE=InnoDB;


CREATE  TABLE  IF NOT EXISTS `Etats`(
`id` int(11) NOT NULL AUTO_INCREMENT,
 `libelle` varchar(25) NOT NULL,
  PRIMARY KEY(`id`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Caracteristiques`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`Description` varchar(25) NOT NULL,
`type_id`int(11) NOT NULL,
PRIMARY KEY(`id`),
KEY `type_id`(`type_id`),
FOREIGN KEY (`type_id`) REFERENCES `types`(`id`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Type_utilisateurs`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`libelle` varchar(25) NOT NULL,
PRIMARY KEY(`id`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Utilisateurs`(
`id` int (11) NOT NULL AUTO_INCREMENT,
`prenom`varchar(25) NOT NULL,
`nom`varchar(25) NOT NULL,
`postnom`varchar(25) NOT NULL,
`password`varchar(25) NOT NULL,
`Type_utilisateur_id` int(11) NOT NULL,
PRIMARY KEY(`id`),
KEY `Type_utilisateur_id`(`Type_utilisateur_id`),
FOREIGN KEY (`Type_utilisateur_id`) REFERENCES `Type_utilisateurs`(`id`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Departements`(
`id`int(11) NOT NULL AUTO_INCREMENT,
`libelle` varchar(25) NOT NULL,
PRIMARY KEY(`id`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `types`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`label` varchar(25) NOT NULL,
`Categorie_mat_id` int(11) NOT NULL,
PRIMARY KEY(`id`),
KEY `Categorie_mat_id`(`Categorie_mat_id`),
FOREIGN KEY (`Categorie_mat_id`) REFERENCES `Categorie_mats`(`id`)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `type_beneficiaires`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`labelle` varchar(25) NOT NULL,
PRIMARY KEY(id)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `marques`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`libelle` varchar(25) NOT NULL,
PRIMARY KEY(id)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `materielle_caracteristique`(
`valeur` VARCHAR(25) NOT NULL,
`caracteristique_id` int(11) NOT NULL,
`Materielle_id` int(11) NOT NULL,
PRIMARY KEY(`caracteristique_id`,`Materielle_id`),
FOREIGN KEY (`caracteristique_id`) REFERENCES `Caracteristiques`(`id`),
FOREIGN KEY (`Materielle_id`) REFERENCES `Materielles`(`id`)
)ENGINE=InnoDB;







