---
layout: post
title: "Intelligence artificielle, Apprentissage profond et Deep Learning... Kézako ?"
author: ventaubain
categories: [définition,ia,débutant]
image: assets/images/machine-learning-definition.jpg
featured: false
hidden: false
toc: false
beforetoc:
---

## Apprentissage automatique, intelligence artificielle, apprentissage profond ?

<p align="justify">Dans les articles (médias, réseaux sociaux...), il est commun de voir des termes comme <i>intelligence artificielle</i>, <i>apprentissage automatique</i> ou encore <i>apprentissage profond</i>. Souvent, un terme se substitue à l'autre mais sont-ils vraiment similaires ?</p>

### Définition de l'intelligence artificielle

<p align="justify">Il est difficile de donner une définition de l'intelligence artificielle (artificial intelligence, IA) qui fasse pleinement consensus tant le périmètre que ce terme englobe est vaste et sujet à discussion. Regardons ensemble quelques définitions:</p>

<b>Marvin Minsky</b> (chercheur américain, un des pères de l'IA):

>Science qui consiste à faire faire aux machines ce que l’homme ferait moyennant une certaine intelligence.

<p align="justify">Cette définition soulève une imprécision importante: que signifie <i>une certaine intelligence</i> ? Quel cadre théorique permet d'expliquer ce phénomène ? Aucune réponse claire ne peut être donnée aujourd'hui...</p>

<p align="justify">De plus, cette définition est très anthropocentrée et considère l'Homme comme référentiel qualitatif des algorithmes. Dans l'hypothèse de la Superintelligence (agent dépassant les capacités de l'Homme) ou du développement d'une logique distincte du raisonnement humain, peut-on encore considérer l'Homme comme référence ?</p>

<b>Yann LeCun</b> (chercheur français, Prix Turing):

> Ensemble de techniques permettant à des machines d’accomplir des tâches et de résoudre des problèmes normalement réservés aux humains et à certains animaux.

<p align="justify">Cette définition est similaire à la précédente mais apporte une précision à la notion d'intelligence. En effet, cette définition est moins anthropocentrée et considère le biomimétisme comme une source potentielle de connaissance dans le dévelopement de l'IA.</p>

<b>Jean-Louis Laurière</b> (chercheur français):

>Tout problème pour lequel il n’existe pas d’algorithme connu, ou de coût raisonnable, relève de l’IA.

<p align="justify">Cette définition se concentre sur l'aspect fonctionnel de l'IA. Plus pragmatique, elle permet une limitation plus claire du périmètre de l'IA. Ainsi, l'IA relèverait des algorithmes permettant de résoudre des problèmes qu'on ne sait pas résoudre efficacement, ce qui permet de relier l'IA à la théorie de la complexité.</p>

<hr />

<p align="justify">De part ces définitions, nous pouvons ainsi considérer que l'intelligence artificielle contient des familles d'algorithmes relevant des algorithmes d'optimisation, de recherche opérationnelle, des algorithmes évolutionnistes voire des systèmes experts bien qu'en contradiction avec la dernière définition.</p>

### Définition de l'apprentissage automatique

<p align="justify">L'apprentissage automatique est une sous-famille d'algorithmes d'intelligence artificielle. Elle peut être définie par:</p>

> L'apprentissage automatique (machine learning, ML) est une famille d'algorithmes d'IA capable d'apprendre, à partir de données, un comportement pour lequel ils n'ont pas été spécifiquement conçus.

<p align="justify">L'apprentissage automatique permet ainsi le développement d'algorithmes capables de modéliser de multiples comportements à travers des données d'apprentissage. Du fait de cette forte adaptabilité, cette famille d'algorithmes est très populaire et participe à l'engouement mondial actuel pour l'IA.</p>

<p align="justify">Par exemple, supposons que nous souhaitons créer un algorithme capable de classer des images. Nous disposons de deux jeux de données. L'un possède des images de chats et de chiens, l'autre des images de bateaux et d'avions.</p>

<p align="justify">En appliquant un modèle de ML au premier jeu de données, nous pouvons obtenir un algorithme capable de discriminer des chats et des chiens. En l'appliquant sur le second jeu de données, le modèle discriminera des bateaux et des avions. Et en l'appliquant sur les deux jeux de données, le modèle pourra discriminer les quatres types d'images. Ainsi, le modèle adapte son comportement en fonction des données d'apprentissage en apprenant à discriminer un phénomène donné sans règles expertes venant du programmeur.</p>

### Définition de l'apprentissage profond

<p align="justify">L'apprentissage profond est une sous-famille d'algorithmes d'apprentissage automatique. Elle peut être définie par:</p>

> L'apprentissage profond (deep learning, DL) est une sous-famille du machine learning. L’algorithme s’inspire ici du fonctionnement du cerveau humain, en utilisant des structures similaires aux neurones.

<p align="justify">Ces algorithmes permettent l'apprentissage de patterns avec un haut taux d'abstraction et présentent des performances élevées sur le traitement des données multimédia (image, texte, signal, voix...). Les modèles génératifs (ChatGPT par exemple) font partis de cette catégorie.</p>

## En résumé

Ainsi, malgré ce qui peut être lu/entendu: 

 $$ \textbf{DL} \neq \textbf{ML} \neq \textbf{IA} $$

 $$ \textbf{DL} \in \textbf{ML} \in \textbf{IA} $$

<p align="justify">Bien que ChatGPT et les modèles génératifs aient un impact important du fait des changements qu'ils impliquent dans nos sociétés, l'intelligence artificielle ne se limite pas à ça ! Il existe de nombreuses familles d'algorithmes et l'art de l'ingénieur est de sélectionner le plus adapté à un problème donné.</p>

<p align="center">
  <img src="/assets/images/ml-def-resume.png"/><br><i>Relation IA-ML-DL</i>
</p>
