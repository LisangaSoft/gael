/**
 * Created by GAELMP on 24/05/2018.
 */
angular.module('parc.acceuil',[]);
angular.module('parc.connect',[]);
angular.module('parc.materiel',[]);
angular.module('parc.list',[]);
angular.module('parc.benefic',[]);
angular.module('parc.listbenef',[]);
angular.module('parc.caract',[]);
angular.module('parc.lismatcar',[]);
angular.module('parc',['parc.acceuil','parc.connect','parc.materiel','parc.list','parc.benefic','parc.listbenef','parc.caract','parc.lismatcar','ngRoute','swxSessionStorage'])
    .config(function($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl:"partials/connect/connect.html"
               // controller:"ConnectController as connectCtrl"
            })
            .when("/acceuil",{
                templateUrl:"partials/acceuil/acceuil.html"
            })
            .when("/enregistrementMat",{
                templateUrl:"partials/enregistrementMat/enregistrementMat.html",
                controller:"MaterielleController as mateCtrl"
            })
            .when("/listeMat",{
                templateUrl:"partials/listeMat/listeMat.html",
                controller:"ListContronller as listCtrl"
            })
            .when("/Enregistrementben",{
                templateUrl:"partials/Enregistrementben/Enregistrementben.html",
                controller:"BeneficController as beneficCtrl"
            })
            .when("/Listebeneficiaire",{
                templateUrl:"partials/Listebeneficiaire/Listebeneficiaire.html",
                controller:"ListbenfController as listbenCtrl"
            })
            .when("/Enregistrementcarct",{
                templateUrl:"partials/Enregistrementcarct/Enregistrementcarct.html",
                controller:"CaracteristiqueController as caractCtrl"
            })
            .when("/Listematcaract",{
                templateUrl:"partials/Listematcaract/Listematcaract.html",
                controller:"LismatcarController as listmatcarCtrl"
            })
            .otherwise({
                redirectTo:"/"
            })
    })
angular.module('parc.acceuil')
    .controller('AcceuilController',AcceuilController);
AcceuilController.$inject=[];
function AcceuilController(){
    this.changeState=changeState;

    function changeState(state){
        this.state=state;
    }
}
angular.module('parc.connect')
    .controller('ConnectController',ConnectController);
ConnectController.$inject=['$location','$sessionStorage','$http'];
function ConnectController($location,$sessionStorage,$http)
{
    var vm=this;
    this.usernames={};
    var affch=vm.afficher;
    vm.usernames=function(adduser){
        $http.post('/connexion',adduser)
            .then(function(response) {
                console.log('la reponse est:', response.data);
                    $location.path('/acceuil');
                    $sessionStorage.put('nom',response.data[0].nom);
                    vm.afficher=$sessionStorage.get('nom');
                console.log('la reponse est:',response.data[0].nom +' '+ response.data[0].password )
            })
    };
}
angular.module('parc.materiel')
    .controller('MaterielleController',MaterielleController);
MaterielleController.$inject=['$http'];
function MaterielleController($http){
    var vm=this;
    this.materielle={};
    this.etat={};
    this.beneficiaire={};
    this.marque={};

    vm.enregistrementMat=function(addmat){
        console.log('appelle methode HTTP POST...')
        $http.post('/materielle',addmat)
            .then(function(response){
                console.log('la reponse est',response.data );
                alert("enregistrement effectuer avec succes");
            });
    }
    vm.getetat=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/etat')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.etat=response.data;
            });
    }
    vm.getetat();
    vm.getbeneficiaire=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/beneficiaire')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.beneficiaire=response.data;
            });
    }
    vm.getbeneficiaire();
    vm.getmarque=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/marque')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.marque=response.data;
            });
    }
    vm.getmarque();
    vm.enregistrementMarque=function(addr){
        console.log('appelle methode HTTP POST...')
        $http.post('/marque',addr)
            .then(function(response){
                console.log('la reponse est',response.data );
            });
    }
}
angular.module('parc.list')
    .controller('ListContronller',ListContronller);
ListContronller.$inject=['$http'];
function ListContronller($http){
    var vm=this;
    this.materiel={};
    vm.getMat=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/materielle')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.materiel=response.data;
            });
    }
    vm.getMat();
}
angular.module('parc.benefic')
    .controller('BeneficController',BeneficController);
BeneficController.$inject=['$http'];
function BeneficController($http){
    var vm=this;
    vm.enregistrementbenef=function(addbenef){
        console.log('appelle methode HTTP POST...')
        $http.post('/beneficiaire',addbenef)
            .then(function(response){
                console.log('la reponse est',response.data );
                alert("enregistrement effectuer avec succes");
            });
    }
    vm.departement=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/departement')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.departement=response.data;
            });
    }
    vm.departement();
    vm.typeben=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/typebenef')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.typeben=response.data;
            });
    }
    vm.typeben();
    vm.enregistrementtype=function(addtype){
        console.log('appelle methode HTTP POST...')
        $http.post('/typebenef',addtype)
            .then(function(response){
                console.log('la reponse est',response.data );
                alert("enregistrement effectuer avec succes");
            });
    }
    vm.enregistrementdep=function(adddepart){
        console.log('appelle methode HTTP POST...')
        $http.post('/departement',adddepart)
            .then(function(response){
                console.log('la reponse est',response.data );
                alert("enregistrement effectuer avec succes");
            });
    }
}
angular.module('parc.listbenef')
    .controller('ListbenfController',ListbenfController);
ListbenfController.$inject=['$http'];
function ListbenfController($http){
    var vm=this;
    this.benefi={};
    vm.getBen=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/beneficiaire')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.benefi=response.data;
            });
    }
    vm.getBen();
}
angular.module('parc.caract')
    .controller('CaracteristiqueController',CaracteristiqueController)
CaracteristiqueController.$inject=['$http'];
function CaracteristiqueController($http){
    var vm=this;
    this.caracteri={};
    this.caracteris={};
    this.type={};
    this.categorie={};
    vm.getcaract=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/matcaract')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.caracteri=response.data;
            });
    }
    vm.getcaract();
    vm.enregistrementcaract=function(adddecar){
        console.log('appelle methode HTTP POST...')
        $http.post('/matcaract',adddecar)
            .then(function(response){
                console.log('la reponse est',response.data );
                alert("enregistrement effectuer avec succes");
            });
    }
    vm.getcaracteristique=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/caracteri')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.caracteriS=response.data;
            });
    }
    vm.getcaracteristique();
    vm.enregistrementcatr=function(adddecaract){
        console.log('appelle methode HTTP POST...')
        $http.post('/caracteri',adddecaract)
            .then(function(response){
                console.log('la reponse est',response.data );
                alert("enregistrement effectuer avec succes");
            });
    }
    vm.getmaterielle=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/materielle')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.caracteris=response.data;
            });
    }
    vm.getmaterielle();
    vm.gettype=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/type')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.type=response.data;
            });
    }
    vm.gettype();
    vm.enregistrementtype=function(adddetype){
        console.log('appelle methode HTTP POST...')
        $http.post('/type',adddetype)
            .then(function(response){
                console.log('la reponse est',response.data );
                alert("enregistrement effectuer avec succes");
            });
    }
    vm.getcategorie=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/categorie')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.categorie=response.data;
            });
    }
    vm.getcategorie();

}
angular.module('parc.lismatcar')
    .controller('LismatcarController',LismatcarController)
LismatcarController.$inject=['$http'];
function LismatcarController($http){
    var vm=this;
    this.caracteri={};
    vm.getcaract=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/matcaract')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.caracteri=response.data;
            });
    }
    vm.getcaract();
}


