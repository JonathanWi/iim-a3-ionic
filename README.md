# Places — Your favorite spots.

Pour ce cours, nous allons reprendre l'application créée pendant la semaine [PhoneGap/Cordova](https://github.com/JonathanWi/iim-a3-cordova-ionic) (ici corrigée), et y ajouter une couche de style à l'aide de `Ionic` et de notre propre `CSS` (pour cette exercice, nous utiliserons [SASS](http://sass-lang.com/), déjà inclu dans le projet).

Pour cette semaine, nous n'aurons pas besoin d'utiliser `Genymotion` (nous n'utiliserons aucune des ressources du téléphone). Ceci aura pour avantage que nous pourrons profiter du `livereload` inclu dans ce `repository` (changements automatique dans le navigateur).

# Pré-requis

### Installation

Commencez par telechargez le `repository` ([`Download Zip`](https://github.com/JonathanWi/iim-a3-ionic/archive/master.zip) ou, pour les plus courageux `git clone`).

Une fois téléchargé, `cd` à la racine du dossier téléchargé, et lancez les commandes suivantes :

```
$ npm install
$ bower install
```

Les dépendances installées, nous allons pouvoir lancer le projet :

```
$ gulp
```

Vous devriez voir une fenêtre de navigateur se lancer avec l'application. Grâce à `Livereload`, vous n'aurez pas besoin de recharger votre page, les modifications `html`, `js` ou `css` se feront automatiquement.

# Exercice

Afin de visualiser l'application que vous allez réaliser, vous trouverez ci-dessous un prototype interactif de Places :

### [Lien du Prototype](https://invis.io/HC5MI0Z63)

### 1. Slides d'introduction

*Ressource nécessaire pour cette partie.*  
http://ionicframework.com/docs/api/directive/ionSlideBox/

*Mockups pour cette partie (`/mockups`)*
`slide intro 1`, `slide intro 2`, `slide intro 3`

Dans cette première partie, le but est d'afficher 3 slides d'introduction à l'utilisateur lors de sa première connexion.

**1.1 Créez une nouvelle page `intro`**  
Comme pour l'exercice précédent, dans le `app.js` creéz une nouvelle route `intro`, ayant pour template `intro.html` et un controller `introController`.

**1.2 À l'aide de la documentation fournie plus haut (`ionSlideBox`), Créez 3 slides sur le modèle des mockups**  
*Conseil: pour cette partie, vous aurez besoin d'utiliser `hide-nav-bar="true"` sur le `ion-view` afin de masquer la navigation.*

**1.3 Naviguez jusqu'à la Homepage**  
Sur la 3ème slide — comme sur le mockup — ajoutez un [bouton](http://ionicframework.com/docs/components/#full-buttons) dont le tap (`on-tap`) déclenchera une fonction `$scope.goToHome()` dans le `introController`. Vous aurez besoin pour cette question d'injecter `$state` et d'utiliser `$state.go()` comme vu au cours précédent. 

**1.3 Empêchez le retour sur les slides** 
Si vous cliquez sur le bouton précédent, vous pouvez encore accéder aux slides. Afin d'éviter ce comportement, vous aurez besoin de `$ionicHistory` et du code suivant :

```
$ionicHistory.nextViewOptions({
    disableAnimate: true,
    disableBack: true
});
```

**1.4 Stockez en `$localstorage` si l'utilisateur à déjà vu les slides d'introduction**
Injectez `$localstorage` et stockez une valeur `seenIntro` qui prendra pour valeur `true` au `tap` sur le bouton.

**1.5 Dans la fonction `run` du `app.js`, vérifiez si l'utilisateur à déjà vu l'introduction. Si oui, redirigez le vers la homepage.**


### 2. Style de la `HomePage`

*Ressource nécessaire pour la question.*
http://ionicframework.com/docs/api/directive/ionNavTitle/
http://ionicframework.com/docs/components/#bar-inputs

*Mockups pour cette partie (`/mockups`)*
`homepage`

**2.1 Style de la `navbar`**  
À l'aide des ressource ci-dessus, imitez la `navbar` fournie dans le mockup de la `homepage`

**2.2 Style des elements**  
À l'aide de votre propre `css`, re-créez les éléments tels qu'ils sont représentés dans le mockup de la `homepage`

**2.3 Bouton flottant**
À l'aide de ce [`forum post`](https://forum.ionicframework.com/t/material-design-floating-action-button-z-index-problem/12234/14), reproduiez le bouton flottant présent dans le mockup.


### 3. Style de la page `Detail`

*Ressource nécessaire pour la question.*
http://ionicframework.com/docs/components/#grid
http://ionicframework.com/docs/components/#range
http://ionicframework.com/docs/components/#select
http://ionicframework.com/docs/components/#forms-stacked-labels
http://ionicframework.com/docs/api/service/$ionicActionSheet/

*Mockups pour cette partie (`/mockups`)*
`details`, `details-overlay`


**3.1 GeoLocation Service**  
À l'aide de votre propre `css` et des ressources ci-dessus, re-créez les éléments tels qu'ils sont représentés dans le mockup de la `details`.

**3.2 ActionSheet et Navigation Mode**  
Créez un `Action Sheet` tel que présenté dans le mockup `details-overlay`. Les boutons de l'overlay représenterons les différents mode de transports possible et le `tap` sur chacun d'entre eux changera l'icon présent dans la `navbar`, ainsi que le trajet :

```
Walking : .ion-android-walk
Driving : .ion-model-s
Subway : .ion-android-train
```

**3.3 Parallax de la map**
Créez un effet de `Parallax` imitant le codepen suivant : `http://codepen.io/xAlien95/pen/QwGwOg`  


### 4. Filtres

*Ressource nécessaire pour la question.*
http://ionicframework.com/docs/api/service/$ionicModal/
http://ionicframework.com/docs/components/#select
http://ionicframework.com/docs/components/#forms-stacked-labels

*Pour cette partie, la logique des filters a déjà été créée dans le `filterController` et le template `filter`.*

**4.1 Reproduisez le modal `filters` présenté dans `mockups/filters`**  


### 5. HomePage et Filtres

*Ressource nécessaire pour la question.*
http://ionicframework.com/docs/components/#grid
http://ionicframework.com/docs/components/#range
http://ionicframework.com/docs/components/#select
http://ionicframework.com/docs/components/#forms-stacked-labels
http://ionicframework.com/docs/api/service/$ionicActionSheet/

*Mockups pour cette partie (`/mockups`)*
`homepage filtered`


