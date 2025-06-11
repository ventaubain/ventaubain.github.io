---
layout: post
title: "Un modèle pour les gouverner tous ?"
author: ventaubain
categories: [théorie de l'apprentissage,ia,intermédiaire]
image: assets/images/free-lunch-front.jpg
featured: false
hidden: false
toc: false
beforetoc:
---

## Un théorème fondamental: Le "No Free Lunch" !

> **_NOTE:_**
> 
> Pour avoir les fondamentaux théoriques pour bien comprendre cet article, je vous invite à lire l'article suivant [<b>Qu'est-ce que l'induction, le concept théorique au coeur du Machine Learning ?</b>]({{ site.baseurl }}/induction/) ! 

<p align="justify"> La quête du modèle "parfait" (i.e meilleurs que tous les autres) d'Intelligence Artificielle anime l'ensemble des ingénieurs en Machine Learning. Mais ce doux rêve (le Modèle Unique) est-il possible ? Un théorème important, le <b>No Free Lunch</b>, apporte une réponse théorique à cette question.</p>

### Définition du No Free Lunch Theorem

<p align="justify">Mais pour commencer, donnons une définition (simplifiée) de ce théorème !</p>

<p align="justify">Supposons deux algorithmes d'apprentissage \(M_1\) et \(M_2\), et \(m\), nombre de données d'apprentissage alors en moyenne uniforme sur toutes les fonctions cible f:</p>

$$E_{M_1}[R_{reel}|f,m]-E_{M_2}[R_{reel}|f,m]=0$$

<p align="justify">Ainsi, nous pouvons donc affirmer:</p>

* <p align="justify"><b>Sur l'ensemble des problèmes possibles, la performance du modèle \(M_1\) et \(M_2\) est identique.</b></p>
<i>Exemple</i>: chaque modèle est aussi performant que le modèle de sélection aléatoire sur l’ensemble des problémes.
* <p align="justify"><b>Si \(M_1\) est meilleur que \(M_2\) sur un sous-ensemble des problèmes, alors \(M_1\) sera moins performant que \(M_2\) sur un autre sous-ensemble des problèmes.</b></p>
<i>Exemple</i>: si un modèle est meilleur que le modèle de sélection aléatoire, alors ce modèle sera significativement moins bon que le modèle de sélection aléatoire sur d'autres problèmes.

* <p align="justify"><b>Il n'existe pas de modèle meilleur qu'un autre sur l'ensemble des problèmes possibles !</b></p>

<p align="center"><img src="/assets/images/no_free.png"/><br></p>

### Conséquences pour l'ingénieur Machine Learning

* <p align="justify"><b>Aucune architecture d'algorithme ne peut être choisie aveuglément</b>.</p>
<p align="justify">Il est confortable de penser ré-utiliser une architecture ayant performée sur un problème passé. Néanmoins, ce comportement est dangereux. En effet, même si cette architecture a déjà fonctionné sur un problème, rien ne garantit qu'elle fonctionnera sur un nouveau problème. Il est donc indispensable d'étudier et de tester plusieurs architectures pour répondre à un problème donné. Par exemple, l'algorithme <i>Random Forest</i> est performant sur des données clients structurées. Cependant, dans le cadre d'un problème de résumé de texte (NLP), ce modèle sera médiocre.</p>

* <p align="justify"><b>Adapter un modèle à un problème est indispensable</b>.</p>
<p align="justify">Chaque problème est différent. De ce fait, un modèle doit être adapté aux spécificités de ce problème. La sélection des hyperparamètres fait fonc partie intégrante de la sélection d'un modèle et doit être traitée avec sérieux par le technicien.</p>

* <p align="justify"><b>Ne cédez pas à la hype pour une classe de modèle !</b></p>
<p align="justify">Le Deep Learning est très populaire et a eu des résultats remarquables sur les problèmes liés aux données multimédia (son, image, texte). Cette bonne réputation ne doit pas vous faire oublier qu'il existe d'autres types de modèles qui, selon le problème, peut dépasser la performance du Deep Learning.</p>

* <p align="justify"><b>Le théorème ne différencie pas les problèmes "réalistes" des problèmes uniquement théoriques</b></p>
  - <p align="justify">Le théorème évalue deux modèles sur une moyenne uniforme de l'ensembles des problèmes possibles. Or, dans le cadre d'applications réelles, des problèmes peuvent ne pas representer un phénomène réel et donc relever que de limitations théoriques.</p>
  - <p align="justify">Les données réelles partagent souvent des caractéristiques communes et de ce fait, sont associés à des problèmes "similaires". Une connaissance en amont d'un problème à traiter permet d'orienter le choix d'une architecture et sa configuration car il est raisonnable de penser qu'un modèle efficace sur un problème peut être performant sur un problème similaire.</p>

* <p align="justify"><b>Le postulat "Aucun modèle est le meilleur pour toutes les tâches" est trop absolutiste</b></p>
<p align="justify">Il est préférable d'interpréter ce théorème avec une vision plus nuancée. Ainsi, il est prérable d'interpréter ce théorème par "Une architecture de modèle est meilleure dans certains domaines qu'une autre". Par exemple, les CNN sont efficaces pour classer des images et les transformers, pour la génération de texte.</p>

### En conclusion
<p align="justify">Le <i>No Free-Lunch Theorem</i> est un résultat important qui conforte l'idée qu'un modèle d'IA doit être réalisé sur mesure pour une problème donné. De ce fait, son développement relève d'un travail empirique, expérimental et nécessite de ne pas se limiter à des architectures populaires qui peuvent être peu performants pour des problèmes donnés. Il n'existe pas de modèle miracle ni de Modèle Unique !</p>

## Références

Wolpert, D. H. and Macready, W. G. (1997). "No Free Lunch Theorems for Optimization"