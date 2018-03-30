/**
 * Created by GAELMP on 26/08/2017.
 */

const  fileSystem=require('fs');
const archiver=require('archiver');
const output= fileSystem.createWriteStream('./x.zip');
const archive=archiver('zip',{
    gzip:true,
    zlib:{level:9}
});
output.on('close',()=>{
    `${archiver.pointer()}total bytes`;
});
archive.pipe(output);
archive.file('./Etudiant/achanger.txt',{name:'change.txt'});
archive.file('./Etudiant/afterchild.txt',{name:'afterchild.txt'});
archive.file('./Etudiant/commande.txt',{name:'commande.txt'});
archive.on('error',(err)=>{throw err;});
archive.finalize();
