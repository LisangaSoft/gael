INSERT INTO `departements` (`departement_id`, `nomdeparte`, `niveau`, `faculte_id`) VALUES
(5, 'informatique', 'l1', 7),
(6, 'finance', 'l2', 8),
(7, 'reseau et telecom', 'l2', 8),
(8, 'gestion de risque', 'l1', 7);

//-----------------------------------------------------------------
-------------------------------------------------------------------
INSERT INTO `etudiants` (`id`, `nom`, `postnom`, `prenom`, `datenaiss`, `lieu_naissance`, `adresse`, `picture`, `departement_id`) VALUES
(22, 'mapwata', 'gael', 'gael', '2018-04-12', 'kinshasa', 'kisako', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 5),
(23, 'djoy djoy', 'mpongo', 'alex', '2018-04-24', 'kinshsa', 'kasavubu', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 6),
(24, 'mbole', 'jeluc', 'jeluc', '2018-04-18', 'kinshasa', 'lemba terminus', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 6),
(25, 'kevin', 'bokanga', 'nille', '2018-04-13', 'kinshasa', 'lemba', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 7);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO `facultes` (`faculte_id`, `nomfac`) VALUES
(7, 'upc'),
(8, 'isipa'),
(9, 'isp'),
(10, 'ista');

