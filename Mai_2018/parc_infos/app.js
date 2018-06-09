/**
 * Created by GAELMP on 24/05/2018.
 */
var express = require('express');
var bodyParser = require('body-parser');
var mysql=require('mysql');
var app = express();
var nodesession=require('node-session');
var flash=require('connect-flash');
var passport=require('passport');
var session=require('express-session');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('www/'));
app.set('trust proxy',1)
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:true}
}))
var db = mysql.createConnection({
    host     : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'parc_infos'
});
db.connect();
/*
 login script
 create and stored in the session
 */
app.post('/connexion',function(req,res){
    console.log('traitement requette GET ...')
   db.query(`select id, nom,password  from utilisateurs where nom= "${req.body.name}" and password="${req.body.pass}" `, function (err, rows) {
        res.json(rows);
        req.session.nom =rows[0].nom ;
        req.session.password =rows[0].password ;
         console.log('notre session est:', req.session);
    });
});
/*
 crud for table materielles
 this scipt contains inserting, the modified, and removing the table material
 */
app.get('/materielle',function(req,res){
    console.log('traitement requette GET ...')
    db.query('select materielles.id as ids,materielles.nom as noms,materielles.numeros_serie as nums,etats.libelle as fonctionnement ,beneficiaires.labelle as  beneficiaires ,marques.libelle as marques  from materielles,etats,beneficiaires,marques where materielles.Etat_id=etats.id and materielles.beneficiaire_id=beneficiaires.id and materielles.marque_id=marques.id  ', function (err, rows) {
        res.json(rows);
    });
});
app.post('/materielle',function(req,res){
    console.log('Traitement requette POST ...');
    db.query(`insert into materielles(nom,numeros_serie,Etat_id,beneficiaire_id,marque_id) values ('${req.body.nom}','${req.body.numeros_serie}','${req.body.Etat_id}','${req.body.beneficiaire_id}','${req.body.marque_id}')`, function (err, rows) {//
        res.json(rows);
    });
});
app.put('/materielle/:id',function(req,res){
    console.log('Traitement requette PUT ...');
    db.query(`UPDATE materielles SET nom = '${req.body.nom}',numeros_serie='${req.body.numeros_serie}',Etat_id='${req.body.Etat_id}',beneficiaire_id='${req.body.beneficiaire_id}',marque_id='${req.body.marque_id}' WHERE id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
app.delete('/materielle/:id',function(req,res){
    console.log('Traitement requette DELETE ...');
    db.query(`DELETE FROM materielles WHERE id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
/*
 crud for table etat
 this scipt contains inserting, the modified, and removing the table material
 */
app.get('/etat',function(req,res){
    console.log('traitement requette GET ...')
    db.query('select id , libelle from etats ', function (err, rows) {
        res.json(rows);
    });
});
/*
 crud for table marque
 this scipt contains inserting, the modified, and removing the table material
 */
app.get('/marque',function(req,res){
    console.log('traitement requette GET ...')
    db.query('select id , libelle from marques ', function (err, rows) {
        res.json(rows);
    });
});
app.post('/marque',function(req,res){
    console.log('Traitement requette POST ...');
    db.query(`insert into marques(libelle) values ('${req.body.libelle}')`, function (err, rows) {//
        res.json(rows);
    });
});
/*
 crud for table beneficiaire
 this scipt contains inserting, the modified, and removing the table beneficiaire
 */
app.get('/beneficiaire',function(req,res){
    console.log('traitement requette GET ...');
    db.query('select beneficiaires.id as ids ,beneficiaires.labelle as beneficiaire,departements.libelle as departements,type_beneficiaires.labelle as type_beneficiaire from beneficiaires,departements,type_beneficiaires where beneficiaires.Departement_id=departements.id and  beneficiaires.type_beneficiaire_id=type_beneficiaires.id ', function (err, rows) {
        res.json(rows);
    });
});
app.post('/beneficiaire',function(req,res){
    console.log('Traitement requette POST ...');
    db.query(`insert into beneficiaires(labelle,Departement_id,type_beneficiaire_id) values('${req.body.labelle}','${req.body.Departement_id}','${req.body.type_beneficiaire_id}')`, function (err, rows) {//
        res.json(rows);
    });
});
app.put('/beneficiaire/:id',function(req,res){
    console.log('Traitement requette PUT ...');
    db.query(`UPDATE beneficiaires SET labelle = '${req.body.labelle}',Departement_id='${req.body.Departement_id}',type_beneficiaire_id='${req.body.type_beneficiaire_id}' WHERE id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
app.delete('/beneficiaire/:id',function(req,res){
    console.log('Traitement requette DELETE ...');
    db.query(`DELETE FROM beneficiaires WHERE id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
/*
 crud for table departement
 this scipt contains inserting, the modified, and removing the table departement
 */
app.get('/departement',function(req,res){
    console.log('traitement requette GET ...');
    db.query('select id,libelle from departements', function (err, rows) {
        res.json(rows);
    });
});
app.post('/departement',function(req,res){
    console.log('Traitement requette POST ...');
    db.query(`insert into departements(libelle) values ('${req.body.libelles}')`, function (err, rows) {//
        res.json(rows);
    });
});
/*
 crud for table type_beneficiaire
 this scipt contains inserting, the modified, and removing the table type_beneficiaire
 */
app.get('/typebenef',function(req,res){
    console.log('traitement requette GET ...');
    db.query('select id,labelle from type_beneficiaires', function (err, rows) {
        res.json(rows);
    });
});
app.post('/typebenef',function(req,res){
    console.log('Traitement requette POST ...');
    db.query(`insert into type_beneficiaires(labelle) values ('${req.body.labelles}')`, function (err, rows) {//
        res.json(rows);
    });
});
/*
 crud for table materielle_caracteristique
 this scipt contains inserting, the modified, and removing the table materielle_caracteristique
 */
app.get('/matcaract',function(req,res){
    console.log('traitement requette GET ...');
    db.query('select materielles.nom as noms,materielles.numeros_serie as nuser,etats.libelle as fonctionnement ,beneficiaires.labelle as  beneficiaires ,marques.libelle as marques,caracteristiques.Description as dscript,types.label as type,categorie_mats.libelle as categorie from materielle_caracteristique, materielles,etats,beneficiaires,marques,caracteristiques,types,categorie_mats where materielles.Etat_id=etats.id and materielles.beneficiaire_id=beneficiaires.id and materielles.marque_id=marques.id and materielle_caracteristique.caracteristique_id=caracteristiques.id and caracteristiques.type_id=types.id and types.Categorie_mat_id=categorie_mats.id  ', function (err, rows) {
        res.json(rows);
    });
});
app.post('/matcaract',function(req,res){
    console.log('Traitement requette POST ...');
    db.query(`insert into materielle_caracteristique(valeur,caracteristique_id,Materielle_id) values('${req.body.valeur}','${req.body.caracteristique_id}','${req.body.Materielle_id}')`, function (err, rows) {//
        res.json(rows);
    });
});
app.put('/matcaract/:id',function(req,res){
    console.log('Traitement requette PUT ...');
    db.query(`UPDATE materielle_caracteristique SET valeur = '${req.body.valeur}',caracteristique_id='${req.body.caracteristique_id}',Etat_id='${req.body.caracteristique_id}' WHERE id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
app.delete('/matcaract/:id',function(req,res){
    console.log('Traitement requette DELETE ...');
    db.query(`DELETE FROM materielle_caracteristique WHERE id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
/*
 crud for table caracteristique
 this scipt contains inserting, the modified, and removing the table caracteristique
 */
app.get('/caracteri',function(req,res){
    console.log('traitement requette GET ...');
    db.query('select caracteristiques.id as idc, caracteristiques.Description as description ,types.label as types from caracteristiques, types where caracteristiques.type_id=types.id', function (err, rows) {
        res.json(rows);
    });
});
app.post('/caracteri',function(req,res){
    console.log('Traitement requette POST ...');
    db.query(`insert into caracteristiques(Description,type_id) values('${req.body.Description}','${req.body.type_id}')`, function (err, rows) {//
        res.json(rows);
    });
});
/*
 crud for table type
 this scipt contains inserting, the modified, and removing the table type
 */
app.get('/type',function(req,res){
    console.log('traitement requette GET ...');
    db.query('select types.id as ids,types.label as labele,categorie_mats.libelle as libelle from types,categorie_mats where types.Categorie_mat_id=categorie_mats.id', function (err, rows) {
        res.json(rows);
    });
});
app.post('/type',function(req,res){
    console.log('Traitement requette POST ...');
    db.query(`insert into types(label,Categorie_mat_id) values('${req.body.label}','${req.body.Categorie_mat_id}')`, function (err, rows) {//
        res.json(rows);
    });
})
/*
 crud for table categorie
 this scipt contains inserting, the modified, and removing the table categorie
 */
app.get('/categorie',function(req,res){
    console.log('traitement requette GET ...');
    db.query('select id,libelle from categorie_mats', function (err, rows) {
        res.json(rows);
    });
});
app.listen(3010, () => {
    console.log('le serveur tourne sur le port 3010');
});
