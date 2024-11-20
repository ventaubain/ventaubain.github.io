
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                 Kubernetes                              :               Cette page recense les articles en lien avec l’apprentissage de Kubernetes pour un déploiement on-premise. Ces articles abordent les fondamentaux nécessaires à la compréhension théorique. . . :                                                                                                                                                                       ventaubain                                13 Nov 2024                                                                                                                                                                                                                                                                                                                  IA                              :               Cette page recense les articles en lien avec les bases théoriques/pratiques de l’IA, notamment le Machine Learning. Ces articles abordent les fondamentaux théoriques, les outils. . . :                                                                                                                                                                       ventaubain                                13 Nov 2024                                                                                                                                                                                                                                                                                                                  AWS                              :               Cette page recense les articles en lien avec l’apprentissage de Amazon Web Services (AWS). Ces articles abordent les notions théoriques et pratiques pour explorer les. . . :                                                                                                                                                                       ventaubain                                13 Nov 2024                                                                                                                      All Stories:                                                                                                     Le Cloud, qu'est-ce que c'est ?              :       Afin de rendre disponible une prestation (site web, boite mail, stockage de fichiers. . . ) via Internet, il est nécessaire que le service soit hébergé sur un serveur connecté à un réseau. . . :                                                                               ventaubain                18 Nov 2024                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/cloud-overview/",
    "title": "Le Cloud, qu'est-ce que c'est ?",
    "body": "2024/11/18 - Afin de rendre disponible une prestation (site web, boite mail, stockage de fichiers. . . ) via Internet, il est nécessaire que le service soit hébergé sur un serveur connecté à un réseau accessible par l'utilisateur. Le serveur-hébergeur possède des capacités de calculs (CPU, GPU), des capacités de stockage (RAM, HDD/SDD) et des capacités de réseaux (interface fibre optique, carte réseau wifi). Ses capacités permettent d'exécuter un programme et ainsi, de fournir la prestation. Il existe plusieurs types de serveurs: les serveurs Web, les serveurs de stockage, les serveurs de calculs. . . Un ordinateur personnel peut aussi être considéré comme un serveur.  Echange client-serveur Les difficultés d’un déploiement local (on-premise): Plusieurs contraintes sont soulevées par l’utilisation de serveurs localement: Des contraintes matérielles:  Un serveur est cher à l’achat et durant son utilisation (électricité, refroidissement…) Un serveur nécessite d’être hébergé dans un environnement appropriéDes contraintes opérationnelles:  Evaluer les besoins capacitaires d’un service est difficile Les capacités d’évolution sont limitées La résilience aux avaries (incendie, inondation…) est limitée Présence d’une équipe de maintenance 24/7 nécessaireAfin de limiter ces contraintes, de nombreuses entreprises décident d'externaliser la gestion de leur infrastructure IT. Cette externalisation est possible grâce Cloud computing (en français, « informatique dans les nuages »). Mais qu’est-ce que le Cloud computing ?:  Définition de la CNIL (Commission nationale de l’informatique et des libertés):  Le cloud computing (en français, « informatique dans les nuages ») fait référence à l’utilisation de la mémoire et des capacités de calcul des ordinateurs et des serveurs répartis dans le monde entier et liés par un réseau. Les applications et les données ne se trouvent plus sur un ordinateur déterminé mais dans un nuage (cloud) composé de nombreux serveurs distants interconnectés. En complément de cette définition, nous pouvons ajouter que:    Tout traitement réalisé via Internet n'est pas nécessairement issu du Cloud computing si l'application est hébergée sur un serveur unique.     La connaissance de l'emplacement et du fonctionnement des serveurs est acquise ou non par le client.  Au niveau opérationelle, le Cloud computing possède les caractéristiques suivantes:  Les ressources sont allouées au client à la demande Le client peut définir les ressources exactes qu’il désire Le client peut accéder aux ressources quasi-instantanément Le client ne paye que les ressources qu’il consomme Les coûts sont diminués grâce aux économies d’échelle d’AWS Permet une exposition mondiale en quelques minutesAinsi, l’utilisation du Cloud computing permet, dans le cadre des coûts de l’infrastructure IT, de passer de dépenses d’investissement (CAPEX) à des dépenses d’exploitation (OPEX). CAPEX: Les dépenses d'investissement sont des fonds utilisés par une organisation pour acquérir, améliorer ou entretenir des actifs. Il s'agit souvent de dépenses à long terme, prévisionnées et importantes (exemple: l'achat d'un serveur). OPEX: Les dépenses d'exploitation sont les coûts nécessaires pour maintenir les opérations quotidiennes d'une organisation. Ces dépenses sont récurrentes et essentielles au maintien de l'activité (exemple: coûts d'hébergement dans le Cloud). Les différents types de déploiement d’une architecture Cloud: Afin de répondre aux différents besoins des clients, différents modèles de Cloud computing ont été développés:    On-premise: Les ressources on-premise correspond à un déploiement local de l'infrastructure indépendamment de toute gestion réalisée par un prestataire extérieur. Le client est responsable de l'achat, du déploiement, de l'administration et de la gestion de l'ensemble des ressources nécessaires à son activité.     Cloud privé: Les ressources d'un Cloud privé sont exclusivement utilisées par une seule organisation. Cette dernière possède l'ensemble des informations liées à l'infrastructure matérielle (localisation des machines, caractéristiques. . . ). Le Cloud peut être déployé dans les locaux de l'organisation ou dans ceux d'un fournisseur tiers. De même, il est généralement déployé sur un réseau privé non exposé au public.     Cloud public: Les ressources d'un Cloud public sont fournis par un fournisseur tiers. Elles sont partagées entre plusieurs organisations et une même machine peut avoir des ressources partagées entre plusieurs clients distincts.       Cloud hybride: Les ressources d'un Cloud hybride sont réparties au sein de plusieurs Cloud de plusieurs types notamment le couple public-privé. Au sein d'un Cloud hybride, les applications peuvent être réparties au sein des différents environnements de manière indifférenciée (en considérant les règles de sécurité pouvant virtuellement bloquées le déploiement). Le Cloud hybride repose ainsi souvent sur des technologies d'orchestration/d'intégration.     MultiCloud: Les ressources d'un MultiCloud sont réparties au sein de plusieurs Cloud d'un même type (public ou privé) mais proposés par différents fournisseurs. Les applications sont généralement isolées à un certain Cloud et non réparties au sein des différents fournisseurs.    Les différents types de Cloud:  Infrastructure as a Service (IaaS): Le fournisseur met à disposition une infrastructure (serveurs, réseau, virtualisation, stockage) et donne un accès internet au client. Le client est en charge de l’administration de la couche logique de l’infrastructure et de son installation (système d’exploitation, application…).  Plaform as a Service (PaaS): Le fournisseur met à disposition un environnement opérationnelle (infrastructure et interface système-application). Le client est en charge de la gestion des applications déployées et des données exploitées.  Software as a Service (SaaS): Le fournisseur met à disposition une application au client. Cette application est hébergée et maintenue par le fournisseur. Le client devient simple utilisateur et ne fournit que des données nécessaires à son activité.  "
    }, {
    "id": 6,
    "url": "http://localhost:4000/k8s-path/",
    "title": "Kubernetes",
    "body": "2024/11/13 - Cette page recense les articles en lien avec l’apprentissage de Kubernetes pour un déploiement on-premise. Ces articles abordent les fondamentaux nécessaires à la compréhension théorique de K8S, le déploiement d’un cluster, son administration et sa sécurisation. (A VENIR) DébutantIntermédiaireAvancé"
    }, {
    "id": 7,
    "url": "http://localhost:4000/ia-path/",
    "title": "IA",
    "body": "2024/11/13 - Cette page recense les articles en lien avec les bases théoriques/pratiques de l’IA, notamment le Machine Learning. Ces articles abordent les fondamentaux théoriques, les outils de développement et des explications de papiers de recherche. (A VENIR) DébutantIntermédiaireAvancé"
    }, {
    "id": 8,
    "url": "http://localhost:4000/aws-path/",
    "title": "AWS",
    "body": "2024/11/13 - Cette page recense les articles en lien avec l’apprentissage de Amazon Web Services (AWS). Ces articles abordent les notions théoriques et pratiques pour explorer les possibilités d’AWS. Débutant Le Cloud computing, qu’est-ce que c’est ?IntermédiaireAvancé"
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