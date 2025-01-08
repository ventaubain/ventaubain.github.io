---
layout: post
title: "Le Cloud, qu'est-ce que c'est ?"
author: ventaubain
categories: [théorie,cloud,débutant,fondamentaux]
image: assets/images/cloud-computing.jpg
featured: false
hidden: false
toc: false
beforetoc:
---

<p align="justify">Afin de rendre disponible une prestation (site web, boite mail, stockage de fichiers...) via Internet, il est nécessaire que le service soit <u>hébergé sur un serveur connecté à un réseau accessible par l'utilisateur</u>.</p>

<p align="justify">Le serveur-hébergeur possède des capacités de calculs (CPU, GPU), des capacités de stockage (RAM, HDD/SDD) et des capacités de réseaux (interface fibre optique, carte réseau wifi). Ses capacités permettent d'exécuter un programme et ainsi, de fournir la prestation. Il existe plusieurs types de serveurs: les serveurs Web, les serveurs de stockage, les serveurs de calculs... Un ordinateur personnel peut aussi être considéré comme un serveur.</p>

<p align="center">
  <img src="/assets/images/serveur-client.png"/><br><i>Echange client-serveur</i>
</p>

## Les difficultés d'un déploiement local (on-premise)

Plusieurs contraintes sont soulevées par l'utilisation de serveurs localement:

<b><u>Des contraintes matérielles</u></b>:
  * Un serveur est cher à l'achat et durant son utilisation (électricité, refroidissement...)
  * Un serveur nécessite d'être hébergé dans un environnement approprié

<b><u>Des contraintes opérationnelles</u></b>:
   * Evaluer les besoins capacitaires d'un service est difficile
   * Les capacités d'évolution sont limitées
   * La résilience aux avaries (incendie, inondation...) est limitée
   * Présence d'une équipe de maintenance 24/7 nécessaire

<p align="justify">
Afin de limiter ces contraintes, de nombreuses entreprises décident d'externaliser la gestion de leur infrastructure IT. Cette externalisation est possible grâce <b>Cloud computing</b> (en français, « informatique dans les nuages »).
</p>

## Mais qu'est-ce que le Cloud computing ?

<p align="center">
  <img src="/assets/images/cloud.webp"/><br>
</p>

Définition de la *CNIL* (Commission nationale de l'informatique et des libertés):
> Le cloud computing (en français, « informatique dans les nuages ») fait référence à l’utilisation de la mémoire et des capacités de calcul des ordinateurs et des serveurs répartis dans le monde entier et liés par un réseau. Les applications et les données ne se trouvent plus sur un ordinateur déterminé mais dans un nuage (cloud) composé de nombreux serveurs distants interconnectés.

En complément de cette définition, nous pouvons ajouter que:
* <p align="justify">Tout traitement réalisé via Internet n'est pas nécessairement issu du Cloud computing si l'application est hébergée sur un serveur unique.</p>
* <p align="justify">La connaissance de l'emplacement et du fonctionnement des serveurs est acquise ou non par le client.</p>

<p align="justify">Au niveau opérationelle, le Cloud computing possède les caractéristiques suivantes:</p>

* Les ressources sont allouées au client **à la demande**
* Le client peut définir les **ressources exactes** qu'il désire
* Le client peut accéder aux ressources **quasi-instantanément**
* Le client ne **paye que les ressources qu'il consomme**
* Les **coûts sont diminués** grâce aux économies d'échelle d'AWS
* Permet une **exposition mondiale** en quelques minutes

Ainsi, l'utilisation du Cloud computing permet, dans le cadre des coûts de l'infrastructure IT, de passer de dépenses d'investissement (<b>CAPEX</b>) à des dépenses d'exploitation (<b>OPEX</b>).

<p align="justify"><b>CAPEX</b>: Les dépenses d'investissement sont des fonds utilisés par une organisation pour acquérir, améliorer ou entretenir des actifs. Il s'agit souvent de dépenses à long terme, prévisionnées et importantes (exemple: l'achat d'un serveur).</p>

<p align="justify"><b>OPEX</b>: Les dépenses d'exploitation sont les coûts nécessaires pour maintenir les opérations quotidiennes d'une organisation. Ces dépenses sont récurrentes et essentielles au maintien de l'activité (exemple: coûts d'hébergement dans le Cloud).</p>

## Les différents types de déploiement d'une architecture Cloud

<p align="justify">
Afin de répondre aux différents besoins des clients, différents modèles de Cloud computing ont été développés:
</p>

* <p align="justify"><b>On-premise</b>: Les ressources on-premise correspond à un déploiement local de l'infrastructure indépendamment de toute gestion réalisée par un prestataire extérieur. Le client est responsable de l'achat, du déploiement, de l'administration et de la gestion de l'ensemble des ressources nécessaires à son activité.</p>

* <p align="justify"><b>Cloud privé</b>: Les ressources d'un Cloud privé sont exclusivement utilisées <b>par une seule organisation</b>. Cette dernière possède l'ensemble des informations liées à l'infrastructure matérielle (localisation des machines, caractéristiques...). Le Cloud peut être déployé dans les locaux de l'organisation ou dans ceux d'un fournisseur tiers. De même, il est généralement déployé sur un réseau privé non exposé au public.</p>

* <p align="justify"><b>Cloud public</b>: Les ressources d'un Cloud public sont fournis par un fournisseur tiers. Elles sont <b>partagées entre plusieurs organisations</b> et une même machine peut avoir des ressources partagées entre plusieurs clients distincts.</p> 

<p align="center">
  <img src="/assets/images/cloud-public-prive.png"/><br>
</p>

* <p align="justify"><b>Cloud hybride</b>: Les ressources d'un Cloud hybride sont réparties au sein de <b>plusieurs Cloud de plusieurs types</b> notamment le couple public-privé. Au sein d'un Cloud hybride, les applications peuvent être réparties au sein des différents environnements de manière indifférenciée (en considérant les règles de sécurité pouvant virtuellement bloquées le déploiement). Le Cloud hybride repose ainsi souvent sur des technologies d'orchestration/d'intégration.</p>

* <p align="justify"><b>MultiCloud</b>: Les ressources d'un MultiCloud sont réparties au sein de <b>plusieurs Cloud d'un même type</b> (public ou privé) mais proposés par différents fournisseurs. Les applications sont généralement isolées à un certain Cloud et non réparties au sein des différents fournisseurs.</p>

<p align="center">
  <img src="/assets/images/cloud-hybrid-multi.svg"/><br>
</p>

## Les différents types de Cloud

* **Infrastructure as a Service** (IaaS): Le fournisseur met à disposition une infrastructure (serveurs, réseau, virtualisation, stockage) et donne un accès internet au client. Le client est en charge de l'administration de la couche logique de l'infrastructure et de son installation (système d'exploitation, application...).
* **Plaform as a Service** (PaaS): Le fournisseur met à disposition un environnement opérationnelle (infrastructure et interface système-application). Le client est en charge de la gestion des applications déployées et des données exploitées.
* **Software as a Service** (SaaS): Le fournisseur met à disposition une application au client. Cette application est hébergée et maintenue par le fournisseur. Le client devient simple utilisateur et ne fournit que des données nécessaires à son activité.

<p align="center">
  <img src="/assets/images/saas-paas-iaas.jpg"/><br>
</p>