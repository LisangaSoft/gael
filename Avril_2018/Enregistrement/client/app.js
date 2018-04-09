/**
 * Created by GAELMP on 02/04/2018.
 */
angular.module('etudiant.auth',[]);
angular.module('etudiant.etude',[]);
angular.module('etudiant.faculte',[]);
angular.module('etudiant.departement',[]);
angular.module('etudiant',['etudiant.auth','etudiant.etude','etudiant.faculte','etudiant.departement','ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when("/",{
            templateUrl:"partials/auth/auth.html",
                controller:"ConnexionController as connexionCtrl"
        })
        .when("/student",{
                templateUrl:"partials/student/student.html",
                controller:"EtudiantController as etudiantCtrl"
            })
            .when("/faculte",{
                templateUrl:"partials/faculte/faculte.html",
                controller:"FaculteController as faculteCtrl"
            })
            .when("/departement",{
                templateUrl:"partials/departement/departement.html",
                controller:"DepartementController as departementCtrl"
            })
            .otherwise({
                redirectTo:'/'
            })

    })
    .run(function(){
        conslole.log('running');
    })
angular.module('etudiant.auth')
    .controller('ConnexionController',ConnexionController)
ConnexionController.$inject=['$location'];

function ConnexionController($location)
{
    var vm=this;
    vm.login=login;
    function login()
    {
        var username=vm.username;
        var password=vm.password;

        if(vm.username=='admin' && vm.password=='12345')
        {
            $location.path('/student')

        }else{
            $location.path('/')

            alert('login ou mots de passe incorrect')
        }

    }
}
angular.module('etudiant.etude')
    .controller('EtudiantController',EtudiantController)
EtudiantController.$inject=['$http'];
function EtudiantController($http){
    var vm=this;
    this.etudiants={};
    this.facultes={};
    this.etudi={};
    this.index={};
    vm.get=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/etudiant')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.etudiants=response.data;
            });
    };
    vm.get();
    vm.enregistreretud=function(addetudiant){
        console.log('appelle methode HTTP POST...')
        $http.post('/etudiant',addetudiant)
            .then(function(response){
                console.log('la reponse est',response.data );
            });
    };
    this.modifieretud=function(ind,etud){
        $http.put('/etudiant/'+ ind, etud)
            .then(function(response){
                console.log('la reponse est ', response.data);
            })
    };
    vm.deleteetud = function (id) {
        console.log('appelle methode HTTP DELETE ...');

        $http.delete('/etudiant/'+id)
            .then(function (response){
                console.log('la reponse est ', response.data);
                //vm.get();
            });
    }

    function Changestate(state)
    {
        vm.state=state;
    }
    function create()
    {
        vm.create=create;
        Changestate('enregistrer');
    }

    function update(apprenant)
    {

        Changestate('modifier');
        vm.apprenant=angular.copy(apprenant);
    }
}
angular.module('etudiant.faculte')
    .controller('FaculteController',FaculteController)
FaculteController.$inject=['$http'];
function FaculteController($http){
    var vm=this;
    this.etudiants={};
    this.facultes={};
    this.etudi={};
    this.index={};
    vm.getfaculte=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/facultes')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.facultes=response.data;
            });
    };
    vm.getfaculte();
    vm.enregistrerfac=function(addfac){
        console.log('appelle methode HTTP POST...')
        $http.post('/facultes',addfac)
            .then(function(response){
                console.log('la reponse est',response.data );
            });
    };
    this.modifierefac=function(ind,fac){
        console.log('appelle methode HTTP PUT...')
        $http.put('/facultes/'+ ind, fac)
            .then(function(response){
                console.log('la reponse est ', response.data);
            })
    }
    vm.deletefac = function (id) {
        console.log('appelle methode HTTP DELETE ...');

        $http.delete('/facultes/'+id)
            .then(function (response){
                console.log('la reponse est ', response.data);
                //vm.get();
            });
    }
    function Changestate(state)
    {
        vm.state=state;
    }
    function create()
    {
        vm.create=create;
        Changestate('enregistrer');
    }

    function update(apprenant)
    {

        Changestate('modifier');
        vm.apprenant=angular.copy(apprenant);
    }

}
angular.module('etudiant.departement')
    .controller('DepartementController',DepartementController)
DepartementController.$inject=['$http']
function DepartementController($http){
    var vm=this;
    this.etudiants={};
    this.facultes={};
    this.etudi={};
    this.index={};
    vm.getdepartement=function(){
        console.log('appelle methode HTTP GET...');
        $http.get('/departements')
            .then(function(response){
                console.log('la reponse est',response.data);
                vm.departements=response.data;
            });
    };
    vm.getdepartement();
    vm.enregistrerdepa=function(adddep){
        console.log('appelle methode HTTP POST...')
        $http.post('/departements',adddep)
            .then(function(response){
                console.log('la reponse est',response.data );
            });
    };
    this.modifieredep=function(ind,dep){
        $http.put('/departements/'+ ind, dep)
            .then(function(response){
                console.log('la reponse est ', response.data);
            })
    }
    vm.deletedep = function (id) {
        console.log('appelle methode HTTP DELETE ...');

        $http.delete('/departements/'+id)
            .then(function (response){
                console.log('la reponse est ', response.data);
                //vm.get();
            });
    }
    this.getitem=function(inde,etud){

        this.etudi=angular.copy(etud);
        this.index=angular.copy(inde);
    }

}


