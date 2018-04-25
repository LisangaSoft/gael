INSERT INTO `departements` (`departement_id`, `nomdeparte`, `niveau`) VALUES
(1, 'informatique', 'l1'),
(2, 'finance', 'l2'),
(3, 'reseau et telecom', 'l2'),
(4, 'gestion de risque', 'l1');

//-----------------------------------------------------------------
-------------------------------------------------------------------
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
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO `facultes` (`faculte_id`, `nomfac`, `departement_id`) VALUES
(3, 'upc', 1),
(4, 'isipq', 2),
(5, 'isp', 3),
(6, 'ista', 4);
