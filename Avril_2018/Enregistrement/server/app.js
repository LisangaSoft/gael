var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/'));
var db = mysql.createConnection({
  host     : '127.0.0.1',
  user : 'root',
  password : '',
  database : 'enregistrement'
});
db.connect();
app.get('/etudiant', function (req, res) {
    console.log('traitement requette GET ...');
    db.query('select id,nom,postnom,prenom,datenaiss,lieu_naissance,adresse,picture,nomfac,nomdeparte,niveau  from etudiants,facultes,departements  where facultes.faculte_id= etudiants.faculte_id and facultes.departement_id=departements.departement_id', function (err, rows) {
        res.json(rows);
    });    
});
app.post('/etudiant', function (req, res) {
    console.log('Traitement requette POST ...');
    db.query(`INSERT INTO etudiants (nom,postnom,prenom,datenaiss,lieu_naissance,adresse,picture,faculte_id) VALUES ('${req.body.nom}','${req.body.postnom}','${req.body.prenom}','${req.body.datenaiss}','${req.body.lieunaissance}','${req.body.adresse}','${req.body.picture}','${req.body.faculteid}')`, function (err, rows) {//
        res.json(rows);
    });
});
app.put('/etudiant/:id', function (req, res) {
    console.log('Traitement requette PUT ...');

    db.query(`UPDATE etudiants SET nom = '${req.body.nom}',postnom='${req.body.postnom}',prenom='${req.body.prenom}',datenaiss='${req.body.datenaiss}',lieu_naissance='${req.body.lieu_naissance}',adresse='${req.body.adresse}',picture='${req.body.picture}',faculte_id='${req.body.faculteid}' WHERE id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
app.delete('/etudiant/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    db.query(`DELETE FROM etudiants WHERE id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
app.get('/departements', function (req, res) {
    console.log('traitement requette GET ...');
    db.query('select departement_id,nomdeparte,niveau  from departements', function (err, rows) {
        res.json(rows);
    });
});
app.post('/departements', function (req, res) {
    console.log('Traitement requette POST ...');
    db.query(`INSERT INTO departements (nomdeparte,niveau) VALUES ('${req.body.nomdeparte}','${req.body.niveau}')`, function (err, rows) {//
        res.json(rows);
    });
});
app.put('/departements/:id', function (req, res) {
    console.log('Traitement requette PUT ...');

    db.query(`UPDATE departements SET nomdeparte ='${req.body.nomdeparte}',niveau='${req.body.niveau}' WHERE departement_id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
app.delete('/departements/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    db.query(`DELETE FROM departements WHERE departement_id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
app.get('/facultes', function (req, res) {
    console.log('traitement requette GET ...');
    db.query('select faculte_id,nomfac,nomdeparte,niveau  from facultes,departements where facultes.departement_id=departements.departement_id', function (err, rows) {
        res.json(rows);
    });
});
app.post('/facultes', function (req, res) {
    console.log('Traitement requette POST ...');
    db.query(`INSERT INTO facultes (nomfac) VALUES ('${req.body.nomfac}')`, function (err, rows) {//
        res.json(rows);
    });
});
app.put('/facultes/:id', function (req, res) {
    console.log('Traitement requette PUT ...');

    db.query(`UPDATE facultes SET nomfac ='${req.body.nomfac}' WHERE faculte_id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
app.delete('/facultes/:id', function (req, res) {
    console.log('Traitement requette DELETE ...');
    db.query(`DELETE FROM facultes WHERE faculte_id = ${req.params.id}`, function (err, rows) {
        res.json(rows);
    });
});
app.listen(4000, () => {
    console.log('le serveur tourne sur le port 4000');
});
