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

**1.5 Dans la fonction `run` du `app.js`, vérifiez si l'utilisateur à déjà vu l'introduction.**  
À l'aide d'un simple `if / else`, vérifiez si l'utilisateur à déjà vu les slides d'introductions. Si oui, redirigez le vers la homepage. Si non, redirigez-le vers les slides.

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


**3.1 Style de la page `details`**  
À l'aide de votre propre `css` et des ressources ci-dessus, re-créez les éléments tels qu'ils sont représentés dans le mockup de la `details`.

**3.2 ActionSheet et Navigation Mode**  
Créez un `Action Sheet` tel que présenté dans le mockup `details-overlay`. Les boutons de l'overlay représenterons les différents mode de transports possible et le `tap` sur chacun d'entre eux changera l'icon présent dans la `navbar`, ainsi que le trajet (pour cette question, vous aurez besoin de `ng-class`) :

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
http://ionicframework.com/docs/components/#item-dividers  

*Mockups pour cette partie (`/mockups`)*  
`homepage filtered`  

**5.1 Reproduisez la page `mockups/homepage filtered`**  


### 6. Directives & Components 

*Qu'est-ce qu'une directive?*  

Au cours des dernières années, le web s'est transformé : D'un web de **page**, nous sommes passés a un web de **components**. Cette migration ouvre des possibilités infinies :

- Un web plus `scalable` : En utilisant une logique de `blocs fonctionnels` (comprendre Lego), nous pouvons composer et décomposer des pages en déplaçant simplement nos components.
- Un web plus `social` : Un component pouvant être ré-utilisé indépendamment de la logique de l'application dans laquelle il existe, le partage est simple et évident (millions de blocs partagés à travers le monde).
- Un web plus `haut niveau` : Les développeurs n'ont plus besoin de ré-inventer la roue à chaque fois qu'ils démarrent un projet, et n'ont plus besoin de comprendre la logique derrière un component afin de s'en servir (ie. *Lorsque j'achète une lampe, je n'ai pas besoin de savoir comment fonctionne les circuits imprimés à l'intérieur, juste que le bouton `on` l'allume, et `off` l'éteint.*).

**Angular et les components**  

Angular implémente les components à sa manière et, sans le savoir, vous en avez déjà utilisé beaucoup :  
`ng-repeat`, `ng-show`, `<ion-slide>`... 

La liste est très longue, tout le système d'angular reposant sur ces briques élémentaires. Chez Angular, ces components s'appellent en réalité des `Directives`.

**Comment s'écrit une directive ?**

Tout comme pour les `controllers`, les `services` ou les `factories`, les `directives s'initialisent comme-suit :

*sayHelloDirective.js*
```
 angular.module('Places')
 .directive("sayhello", function () {
 	return {
		// Ici le code de votre directive
 	}
 });
```

**Paramètres de base d'une directive**  

Une liste des propriétés des directives est accessible (ici)[https://docs.angularjs.org/guide/directive]. Pour cette exercice, nous ne verrons que les paramètres de base


#### Restrict

*sayHelloDirective.js*
```
 angular.module('Places')
 .directive("sayhello", function () {
 	return {
		restrict : 'E'
 	}
 });
```

Le premier paramètre que nous verrons est restrict : `restrict` permet de définir le `type` de la directive. Il existe trois grand type de `restrict` :

**E (pour Element)**  

Les restricts de type E servent à déclarer que la directive sera un `element HTML`.

*Dans le cas de la directive `sayhello` décrite ci-dessus, un restrict de type `E` s'écrit :*  

```
<sayhello></sayhello>
```


**A (pour Attribute)**  

Les restricts de type A servent à déclarer que la directive sera un `attribut HTML`.

*Dans le cas de la directive `sayhello` décrite ci-dessus, un restrict de type `A` s'écrit :*  

```
<div sayhello></div>
```


**C (pour Class)**  

Les restricts de type A servent à déclarer que la directive sera une `classe HTML`.

*Dans le cas de la directive `sayhello` décrite ci-dessus, un restrict de type `C` s'écrit :*  

```
<div class="sayhello"></div>
```

#### TemplateUrl

*sayHelloDirective.js*
```
 angular.module('Places')
 .directive("sayhello", function () {
 	return {
		restrict : 'E',
		templateUrl : 'template.html'
 	}
 });
```

Le second paramètre que nous verrons est templateUrl : `templateUrl` permet de définir le `template` utilisé par la  directive.

Prenons pour exemple ce `template.html`, associé à la directive décrite ci-dessus :

*template.html*
```
<div>
	<h2>Hello</h2>
	<p>I'm a directive</p>
</div>
```

Après avoir défini le template utilisé par ma directive, je peux dans une de mes vues appeler :

*mavue.html*
```
<sayhello></sayhello>
``` 

qui sera alors remplacé par 

*mavue.html*
```
<div>
	<h2>Hello</h2>
	<p>I'm a directive</p>
</div>
``` 

#### scope

Tout comme pour `$scope`, `scope` (attention, ici, pas de `$`) définit le **périmètre de la directive.** 

*sayHelloDirective.js*
```
 angular.module('Places')
 .directive("sayhello", function () {
 	return {
		restrict : 'E',
		templateUrl : 'template.html',
		scope: {
			name : 'Pierre'
		}
 	}
 });
```

Dans le template de ma directive, je peux donc maintenant faire :

*template.html*
```
<div>
	<h2>Hello</h2>
	<p>I'm {{title}}</p>
</div>
``` 

Ce qui, dans ma vue, affichera :

*mavue.html*
```
<div>
	<h2>Hello</h2>
	<p>I'm Pierre</p>
</div>
``` 

Mais évidemment, le `scope` ne s'arrête pas là : Il est temps de faire passer des données à notre directive. Avec Angular, nous pouvons faire la chose suivante :

*sayHelloDirective.js*
```
 angular.module('Places')
 .directive("sayhello", function () {
 	return {
		restrict : 'E',
		templateUrl : 'template.html',
		scope: {
			name : '@' // Ici, nous utilisons @, mais il existe d'autre méthode que nous n'aborderons pas.
		}
 	}
 });
```

Ici, `@` **lie la valeur de `name` à celle de `l'attribut HTML` de la directive**. Pour faire plus simple, je peux maintenant faire :


*mavue.html*
```
<sayhello name="Jean"></sayhello>
``` 

qui m'affichera alors : 

*mavue.html*
```
<div>
	<h2>Hello</h2>
	<p>I'm Jean</p>
</div>
```

#### Finalement nous pouvons faire :

*maVueController.js*
```
...
$scope.name = 'Jacques';
...
``` 

*mavue.html*
```
<sayhello name="{{name}}"></sayhello> // Ici name correspond au $scope.name définit plus haut
``` 

ce qui finalement affichera

*mavue.html*
```
<div>
	<h2>Hello</h2>
	<p>I'm Jacques</p>
</div>
```


#### Voilà, vous savez tout ce qu'il faut savoir sur les directives !


**6.1 Transformer l'élément `place` en une directive `place`, qui prendra pour paramètre un title, un subtitle et une image.**