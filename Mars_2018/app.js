/**
 * Created by GAELMP on 26/08/2017.
 */
const express = require('express');
const bodyParser = require('body-parser');

var  file_system=require('fs');

var archiver=require('archiver');

var output= file_system.createWriteStream('./x.zip');

var archive=archiver('zip',{
    gzip:true,
    zlib:{level:9}
});
var app = express();

output.on('close',function(){
    console.log(archive.pointer()+'total bytes');
    console.log('archiver has bee finalized');
});
archive.pipe(output);
archive.file('./Etudiant/achanger.txt',{name:'change.txt'});
archive.file('./Etudiant/afterchild.txt',{name:'afterchild.txt'});
archive.file('./Etudiant/commande.txt',{name:'commande.txt'});
archive.on('error',function(err){
    throw err;
});
archive.finalize();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client/'));
app.listen(3000,() => {
    console.log('le serveur tourne sur le port 3000');
});

