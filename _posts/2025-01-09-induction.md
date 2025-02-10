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

### Composantes d'un problème d'induction

Un problème d'induction est défini par plusieurs composantes:

<p align="justify">
1. <b>L'environnement</b>: L'environnement permet de générer des entités $x_i$ obtenues indépendamment et de manière identiquement distribuées (échantillon i.i.d) selon une distribution $D_\mathbb{X}$ sur un espace $\mathbb{X}$. On supposera l'environnement stationnaire pour des raisons de simplification. Néanmoins, il est possible de considérer l'environnement comme évolutif au cours du temps. Cette particularité est souvent considérée dans le cadre de l'apprentissage en ligne.</p>

<p align="justify">
1. <b>L'oracle</b>: L'oracle retourne une réponse à une entité donné (souvent un label dans le cas d'une approche supervisée) selon une distribution de probabilité $F(y_i|x_i)$ inconnues avec $y_i \in \mathbb{U}$, ensemble des réponses possibles de l'oracle. Plus formellement, l'oracle définit une fonction hypothèse $\hat{h}$ tel que pour $x_i \in D_\mathbb{X}, y_i \in \mathbb{U}, y_i=\hat{h}(x_i)$</p>

<p align="justify">
3. <b>L'apprenant</b>: L'apprenant apprend (approxime) une fonction hypothèse (probabiliste ou déterministe) appartenant à un espace des hypothèses $\mathbb{H}$. La sortie de l'apprenant est ainsi $x_i \in D_\mathbb{X}, y_i \in \mathbb{U}, y_i=h(x_i)$ avec $h \in \mathbb{H}$ et $h \rightarrow \hat{h}$.
</p>

<p align="justify">
1. <b>La tâche d'apprentissage</b>: la tâche d'apprentissage consiste à permettre à l'apprenant de trouver une fonction h, nommée <i><b>fonction hypothèse</b></i>, dans l'espace $\mathbb{H}$ (espaces des fonctions hypothèse possibles) permettant d'approximer (au mieux) la réponse exprimée par l'oracle. Dans le cadre de l'induction, on calcule la proximité entre la fonction hypothèse et la réponse de l'oracle à travers l'<i><b>espérance de perte</b></i> sur l'ensemble des cas possibles, i.e $\mathbb{X} \times \mathbb{U}$.</p>

### Risque réel

<p align="justify">
Soit \(x_i \in D_\mathbb{X}\), $h \in \mathbb{H}$ et réponse de l'apprenant, $y_i \in \mathbb{U}$ et réponse de l'oracle. On définit la <i><b>fonction perte</b></i> $l$ tel que $l(y_i,h(x_i))$ calcule l'erreur d'estimation de $h(x_i)$ lorsque la réponse attendue est $y_i$. On peut alors définir le <i><b>risque réel</b></i> estimant l'erreur cumulée sur l'ensemble de l'environnement:
$$R_{reel}(h) = \int_{\mathbb{X} \times \mathbb{U}}l(y_i,h(x_i))dF(x,y)$$ 
</p>

<p align="justify">
Il s'agit d'une mesure statistique sur l'ensemble des évènements réalisables dans $D_\mathbb{X}$ où $F(x,y)$ peut être une distribution de probabilité ou déterministe. La densité de probabilité de $F(x,y)$ est inconnue. Il s'agit donc de trouver la fonction hypothèse $h^*$ la plus proche de $F$ selon la fonction de perte considérée, i.e <i><b>minimiser le risque réel</b></i>: 
$$h^*=\underset{h \in \mathbb{H}}{argmin}(R_{reel}(h))$$</p>

<p align="justify">
Cependant, <b>estimer le risque réel peut être difficile voire impossible</b>. Il est donc nécessaire de définir un autre problème qui, résolu, permet de calculer $argmin_{h \in \mathbb{H}}(R_{reel}(h))$. Afin de définir ce problème intermédiaire, le <b>principe inductif</b> est utilisée.</p>

<p align="justify">
Ainsi, l'objectif est donc de chercher à <i><b>minimiser le risque réel</b></i> inconnu à <b>partir d'un échantillon (sous-ensemble) d'apprentissage $\mathbb{S}$ avec $\mathbb{S} \in \mathbb{X}$</b> (application de l'approche inductive). Ce sous-ensemble est communément appelé <b>dataset</b>.</p>

<p align="justify">
A partir de l'hypothèse forte qu'est l'utilisation d'un sous-ensemble de $\mathbb{X}$, il reste à définir un critère qui, optimisé, permet de diminuer le risque réel. Ce problème intermédiaire se nomme <b>critère inductif</b>.</p>

<p align="justify">
Le <b>critère inductif</b> permet d'expliciter ce que doit vérifier la fonction $h$ recherchée. Pour cela, il se base sur l'échantillon d'apprentissage $\mathbb{S}={(x_1,y_1),...,(x_n,y_n)}$ afin de minimiser le risque réel.</p>

### Critère inductif

<p align="justify">
En d'autres mots, le principe inductif formalise ce que doit vérifier la fonction hypothèse selon la fonction de perte, l'échantillon d'apprentissage et possiblement d'autres paramètres selon le critère inductif choisi. Il s'agit d'un idéal théorique à ne pas confondre avec la méthode d'apprentissage qui correspond à une application effective du critère inductif (via un algorithme). En effet, pour un critère donné, plusieurs méthodes d'apprentissage peuvent exister. Les contraintes computationnelles ou algorithmiques sont indépendantes du critère inductif.</p>

<p align="justify">
Par exemple, dans le cadre d'une optimisation par une méthode de gradient, la méthode d'apprentissage est associée à la méthode exploitée i.e la méthode de gradient et l'optimum souhaité, l'objectif défini par le critère inductif mais cet optimum peut être obtenu par une autre approche que la méthode de gradient.</p>

#### Principe ERM

<p align="justify">
Il existe plusieurs principes ( ou critères) inductifs et aujourd'hui encore, il s'agit d'un champ de recherche théorique important. En effet, la théorie actuelle est jugée imparfaite par le milieu scientifique (d'où la grande attention et la rigueur à avoir lors de l'utilisation de l'IA dans sa globalité).</p>

<p align="justify">
Deux principes inductifs sont très fréquents en Machine Learning: le <b>principe ERM</b> et le <b>principe de décision bayésienne</b>. Il en existe de nombreux autres mais pour limiter d'alourdir inutilement cette partie théorique, nous n'étudierons que le plus utilisé i.e le principe ERM.</p>

<p align="justify">
Le principe ERM (<i>Empirical Risk Minimization</i>) repose sur l'hypothèse qu'il faut minimiser le <b><i>risque empirique</i></b>. Le risque empirique correspond à la perte moyenne (ou encore l'erreur) mesurée sur l'échantillon d'apprentissage $\mathbb{S}$ (de taille $n$). Il est défini par:
$$R_{emp}(h)=\frac{1}{n}\sum_{i=1}^nl(y_i,h(x_i))$$
</p>

<p align="justify">
Le principe ERM repose sur une hypothèse forte. Il suppose que la fonction hypothèse qui s'accorde le mieux aux données d'apprentissage est une fonction capable de correctement décrire le phénomène général observé. Elle repose sur l'axiome qu'une caractéristique observée sur les données connues est aussi vérifiée par les autres données générées par le phénomène considéré. Ainsi:
$$ h_{ERM}=\underset{h \in \mathcal{H}}{argmin}(R_{emp}(h)) $$
</p>

<p align="justify">
Ce critère inductif est le plus populaire et est exploité pour l'Intelligence Artificielle moderne, notamment par le Machine Learning. L'apprentissage d'un modèle de Machine Learning cherche ainsi une fonction hypothèse qui tend à avoir un risque empirique nul.</p>

> **_NOTE:_**
> 
> Dans les faits, atteindre cette valeur est souvent synonyme de mauvais apprentissage du fait du phénomène appelé <b>sur-apprentissage</b> !

## Evaluation de l'apprentissage

<p align="justify">
Dans la partie précédente, nous avons proposé deux approches pour <i>apprendre</i>. Cependant, il est fondamental de pouvoir analyser l'apprentissage et de pouvoir déterminer son comportement intrasèque.</p>

<p align="justify">
Un problème d'apprentissage est dépendant de l'environnement, de l'oracle et de la fonction de perte choisie. Lorsqu'on évalue la performance espérée d'un apprenant, il est nécessaire de déterminer le cadre liant l'environnement et l'oracle.</p>

<p align="justify">Trois cas sont possible:</p>

1. <p align="justify"><b>L'analyse dans le pire des cas</b>: Cette approche suppose qu'on ne connaît rien <i>a priori</i> sur l'environnement ni sur son comportement avec l'oracle. On cherche donc à quantifier la performance de l'apprenant dans la pire des situations. Cette approche est indépendante de l'oracle et de l'environnement (et même de la fonction-cible). Il s'agit donc d'un cadre d'étude très généraliste sans hypothèse préalable forte sur les constituantes du phénomène et de l'apprentissage. Néanmoins, les conditions identifiées seront très fortes et souvent loin de la réalité expérimentale et applicative. </p>
    
2. <p align="justify"><b>L'analyse en cas moyen</b>: Cette approche cherche à mesurer une espérance de performance. Néanmoins, il est nécessaire de faire une hypothèse sur la distribution $D_\mathbb{X}$ (environnement) et $D_\mathbb{F}$ (fonction-cible possible). Théoriquement, cette méthode permet une mesure de performance plus fine que l'approche précédente mais dans les faits, il est difficile de l'exploiter véritablement à cause de la difficulté à estimer les probabilités <i>a priori</i> et de l'obligation d'utiliser des méthodes d'approximation qui nuisent à la précision du résultat.</p>
    
3. <p align="justify"><b>L'analyse dans le meilleur des cas</b>: Cette approche est caractérisée par l'analyse de l'apprentissage dans le meilleur des cas, i.e lorsque l'oracle et l'environnement favorisent l'apprentissage en aidant l'apprenant. Cependant, la notion d'aide est difficile à évaluer, notamment la différence entre la bienveillance (professeur) et la collusion (l'oracle devient un complice). Ce type d'analyse est aujourd'hui, peu exploité et peu établi théoriquement parlant.</p>

<p align="justify">
L'objectif de la <b>Théorie de l'apprentissage</b> est de développer un socle théorique permettant le développement et l'analyse d'algorithmes dit d'apprentissage. Elle cherche à démontrer la faisabilité de l'apprentissage d'un <i>concept</i> (aussi appelé <i>règle de prédiction</i>), le volume de données nécessaire à son apprentissage et les garanties théoriques associées (borner l'erreur et la complexité). Dans un cas plus général, elle étudie aussi l'efficacité (ou non) d'algorithmes selon des conditions spécifiques. Parmi ces cadres d'études théoriques, nous pouvons notamment citer le <b>PAC Learning</b> (<i>Probably Approximately Correct</i>).</p>

> **_NOTE:_**
> 
> Bien que plusieurs cadres théoriques aient déjà été proposés, aucun ne fait consensus auprès du milieu scientifique. Il s'agit donc d'un domaine de recherche très actif et crucial étant donné l'engouement pour l'intelligence artificielle.