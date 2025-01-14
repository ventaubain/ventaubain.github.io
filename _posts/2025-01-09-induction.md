---
layout: post
title: "Qu'est-ce que l'induction, le concept théorique au coeur du Machine Learning ?"
author: ventaubain
categories: [théorie de l'apprentissage,ia,intermédiaire]
image: assets/images/induction.jpg
featured: false
hidden: false
toc: false
beforetoc:
---

## Qu'est-ce que l'Induction ?

<p align="justify"> Supposons un chat et un cheval. Ces deux entités se distinguent de part leur silhouette, leur dimension, leur vitesse de déplacement etc... Il est aisé de discriminer ces deux animaux et ce, sans erreur notable. Cependant, l'observateur n'a jamais pu observer l'intégralité des spécimens de chats et de chevaux. A partir d'un volume limité d'observations, il a appris à discriminer, i.e isoler des caractéristiques permettant de réaliser une identification. Ce comportement est appelé <b>induction</b> ou encore <b>généralisation</b>.</p>

> **_NOTE:_**
> <p align="justify"> Le paragraphe ci-dessus illustre un cas d'induction implicite. En effet, dire que "tout le monde peut discriminer..." est une généralisation. Afin d'être rigoureux, il aurait fallu indiquer l'environnement où cette affirmation se vérifie (pays, régions, aptitudes de l'observateur...). Et même dans cette situation, le phénomène de généralisation est encore présent. </p>
>
> <p align="justify">En réalité, la seule affirmation véritablement valide serait comparable à "La quasi-totalité des individus observés respectant des conditions spécifiques sont capables de réaliser cette discrimination". La notion de conditions est primordiale car elle détermine les spécificités de l'environnement. Pour illustrer, il est évident qu'un individu valide et un aveugle réalisent une discrimination de ce phénomène de manière distincte.</p>

<p align="justify">L'objectif de l'induction artificielle est de déterminer un ensemble de règles de décision de manière automatique à partir d'un échantillon limité de données illustrant le phénomène étudié. Cette ensemble de règles peut avoir deux objectifs (non exclusifs):</p>

1. <p align="justify"><b>Réaliser une prédiction sur une observation spécifique</b>: Par exemple, "Cette image représente un chat ou un chien ?".</p>

2. <p align="justify"><b>Extraire une théorie du phénomène observé</b>: En d'autres mots, être capable de faire une prédiction et d'expliquer le phénomène. Par exemple, "Cet animal est un chat car il chasse une souris".</p>

<p align="justify"> Trois questions fondamentales constituent la problématique de l'induction:</p>

1. <p align="justify">Ais-je le droit de généraliser à partir d'un échantillon fini de donné ?</p>
2. <p align="justify">Comment réaliser l'extrapolation ? Comment savoir si comprendre les données disponibles permettra une bonne compréhension du phénomène durant la phase de prédiction ?</p>
3. <p align="justify">Quelle garantie peut-on avoir sur l'extrapolation réalisée ?</p>

> **_NOTE:_**
> 
> L'induction est complémentaire à la déduction. En effet, alors que l'induction cherche à extraire une "règle" (théorie) d'un ensemble d'observations, la déduction prédit un phénomène (observations) à partir de règles (théorie).
> <p align="center">
  <img src="/assets/images/induction-deduction.png"/><br>
> </p>

## Formalisation d'un problème d'Induction

Un problème d'induction est défini par plusieurs composantes:

1. <b>L'environnement</b>: <p align="justify">L'environnement permet de générer des entités $x_i$ obtenues indépendamment et de manière identiquement distribuées (échantillon i.i.d) selon une distribution $D_x$ sur un espace $\mathbb{X}$. On supposera l'environnement stationnaire pour des raisons de simplification. Néanmoins, il est possible de considérer l'environnement comme évolutif au cours du temps. Cette particularité est souvent considérée dans le cadre de l'apprentissage en ligne.