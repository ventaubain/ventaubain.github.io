
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/mediumish-theme-jekyll/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/mediumish-theme-jekyll/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/mediumish-theme-jekyll/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/mediumish-theme-jekyll/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Kubernetes - Learning Path                              :               Le Learning Path Kubernetes (K8S) recense les articles en lien avec l’apprentissage de Kubernetes pour un déploiement on-premise. Ces articles abordent les fondamentaux nécessaires à. . . :                                                                                                                                                                       ventaubain                                13 Nov 2024                                                                                                                                                                                                                                                                                                                  IA - Learning Path                              :               Le Learning Path IA recense les articles en lien avec les bases théoriques/pratiques de l’IA, notamment le Machine Learning. Ces articles abordent les fondamentaux théoriques,. . . :                                                                                                                                                                       ventaubain                                13 Nov 2024                                                                                                                                                                                                                                                                                                                  AWS - Learning Path                              :               Le Learning Path AWS recense les artiles en lien avec l’apprentissage de Amazon Web Services (AWS). Ces articles abordent les notions théoriques et pratiques pour. . . :                                                                                                                                                                       ventaubain                                13 Nov 2024                                                                                                                      All Stories:             "
    }, {
    "id": 4,
    "url": "http://localhost:4000/mediumish-theme-jekyll/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/mediumish-theme-jekyll/k8s-path/",
    "title": "Kubernetes - Learning Path",
    "body": "2024/11/13 - Le Learning Path Kubernetes (K8S) recense les articles en lien avec l’apprentissage de Kubernetes pour un déploiement on-premise. Ces articles abordent les fondamentaux nécessaires à la compréhension théorique de K8S, le déploiement d’un cluster, son administration et sa sécurisation. (A VENIR) DébutantIntermédiaireAvancé"
    }, {
    "id": 6,
    "url": "http://localhost:4000/mediumish-theme-jekyll/ia-path/",
    "title": "IA - Learning Path",
    "body": "2024/11/13 - Le Learning Path IA recense les articles en lien avec les bases théoriques/pratiques de l’IA, notamment le Machine Learning. Ces articles abordent les fondamentaux théoriques, les outils de développement et des explications de papiers de recherche. (A VENIR) DébutantIntermédiaireAvancé"
    }, {
    "id": 7,
    "url": "http://localhost:4000/mediumish-theme-jekyll/aws/",
    "title": "AWS - Learning Path",
    "body": "2024/11/13 - Le Learning Path AWS recense les artiles en lien avec l’apprentissage de Amazon Web Services (AWS). Ces articles abordent les notions théoriques et pratiques pour explorer les possibilités d’AWS. (A VENIR) DébutantIntermédiaireAvancé"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});