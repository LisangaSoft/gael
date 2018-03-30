/**
 * Created by GAELMP on 26/08/2017.
 */
const express = require('express');


let  fileSystem=require('fs');

const archiver=require('archiver');

const output= fileSystem.createWriteStream('./x.zip');

const archive=archiver('zip',{
    gzip:true,
    zlib:{level:9}
});
let app = express();

output.on('close',function() => {
    `${archiver.pointer()}total bytes`;
});
archive.pipe(output);
archive.file('./Etudiant/achanger.txt',{name:'change.txt'});
archive.file('./Etudiant/afterchild.txt',{name:'afterchild.txt'});
archive.file('./Etudiant/commande.txt',{name:'commande.txt'});
archive.on('error',(err)=>{throw err;});
archive.finalize();
app.use(express.static('client/'));
app.listen(4000,() => {
    console.log('le serveur tourne sur le port 4000');
});

