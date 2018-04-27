INSERT INTO `departements` (`id`, `libele`, `niveau`, `faculte_id`) VALUES
(5, 'informatique', 'l1', 7),
(6, 'finance', 'l2', 7),
(7, 'reseau et telecom', 'l2', 8),
(8, 'gestion de risque', 'l1', 8);


//-----------------------------------------------------------------
-------------------------------------------------------------------
INSERT INTO `etudiants` (`id`, `nom`, `postnom`, `prenom`, `datenaiss`, `lieu_naissance`, `adresse`, `picture`, `departement_id`) VALUES
(22, 'mapwata', 'gael', 'gael', '2018-04-18', 'kinshasa', 'kisako', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 5),
(23, 'mapwata', 'djoy djoy', 'mpongo', '2018-04-19', 'kinshsa', 'kasavubu', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 5),
(24, 'mbole', 'jeluc', 'jeluc', '2018-04-12', 'kinshasa', 'lemba terminus', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 6),
(25, 'mbole', 'mbolehfhfh', 'gegeegtz', '2018-04-25', 'kinshsa', 'lemba', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA', 6);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO `facultes` (`id`, `libele`) VALUES
(7, 'upc'),
(8, 'isipa'),
(9, 'isp'),
(10, 'ista');

