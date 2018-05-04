--
-- Contenu de la table `beneficiaires`
--
INSERT INTO `beneficiaires` (`id`, `labelle`, `Departement_id`, `type_beneficiaire_id`) VALUES
(1, 'asango kalonji', 1, 1),
(2, 'Mapwata gael', 2, 1),
(3, 'dedrick', 2, 1),
(4, 'erithier', 1, 1);
-- --------------------------------------------------------

--
-- Contenu de la table `caracteristiques`
--
INSERT INTO `caracteristiques` (`id`, `Description`, `type_id`) VALUES
(1, 'hdd/500 pr/2.5ghz ram/4go', 1),
(2, 'hdd/300 pr/2.5ghz ram/4go', 1),
(3, 'hdd/500 pr/2.5ghz ram/8go', 2),
(4, 'hdd/500 pr/2.5ghz ram/8go', 1);
-- --------------------------------------------------------

--
-- Contenu de la table `categorie_mats`
--
INSERT INTO `categorie_mats` (`id`, `libelle`) VALUES
(1, 'informatique/ordinateur'),
(2, 'informatique/autre'),
(3, 'informatique/reseau'),
(4, 'informatique/securité');
-- --------------------------------------------------------

--
-- Contenu de la table `departements`
--
INSERT INTO `departements` (`id`, `libelle`) VALUES
(1, 'fincom'),
(2, 'domops'),
(3, 'IT'),
(4, 'FOREIGN');
-- --------------------------------------------------------

--
-- Contenu de la table `etats`
--
INSERT INTO `etats` (`id`, `libelle`) VALUES
(1, 'fonctionnelle'),
(2, 'non fonctionnelle');

-- --------------------------------------------------------

--
-- Contenu de la table `marques`
--
INSERT INTO `marques` (`id`, `libelle`) VALUES
(1, 'Hp'),
(2, 'lenovo');
-- --------------------------------------------------------

--
-- Contenu de la table `materielles`
--
INSERT INTO `materielles` (`id`, `nom`, `numeros_serie`, `Etat_id`, `beneficiaire_id`, `marque_id`) VALUES
(1, 'ordinateur', 'cdki00978456987', 1, 1, 1),
(2, 'ordinateur', 'cdki008974566987', 1, 2, 2);
-- --------------------------------------------------------

--
-- Contenu de la table `materielle_caracteristique`
--
INSERT INTO `materielle_caracteristique` (`valeur`, `caracteristique_id`, `Materielle_id`) VALUES
('tres robuste', 1, 1);
-- --------------------------------------------------------

--
-- Contenu de la table `materielle_caracteristique`
--
INSERT INTO `types` (`id`, `label`, `Categorie_mat_id`) VALUES
(1, 'portable', 1),
(2, 'fixe', 1);
-- --------------------------------------------------------

--
-- Contenu de la table `types`
--
INSERT INTO `types` (`id`, `label`, `Categorie_mat_id`) VALUES
(1, 'portable', 1),
(2, 'fixe', 1);
-- --------------------------------------------------------

--
-- Contenu de la table `type_beneficiaires`
--
INSERT INTO `type_beneficiaires` (`id`, `labelle`) VALUES
(1, 'personne physique'),
(2, 'agence');
-- --------------------------------------------------------

--
-- Contenu de la table `type_utilisateurs`
--
INSERT INTO `type_utilisateurs` (`id`, `libelle`) VALUES
(1, 'admin'),
(2, 'simple user');
-- --------------------------------------------------------

--
-- Contenu de la table `utilisateurs`
--
INSERT INTO `utilisateurs` (`id`, `prenom`, `nom`, `postnom`, `password`, `Type_utilisateur_id`) VALUES
(1, 'gael', 'mpawata', 'gael', '1234567', 1),
(2, 'danny', 'asango', 'kalonji', '0810351614', 1);






