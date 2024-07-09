# Pourquoi vous devriez jeter vos souris à la poubelle

![image d'un panneau d'interdiction avec ](nomouse.svg)<!-- .element: style="width: 20%; height: auto" -->
---
- Bienvenue dans ce talk un peu troll.
- Je vais vous parler de comment vous pouvez vous passer de votre souris


## Introduction
---
- Avertissement: ça va être un peu à l'arrache
- Je voulais répéter un peu ces mois de juin 2024, et au final bon... j'ai pas eu le temps


### Qui-suis-je ?

- Benjamin Legrand
- Tech Lead / Archi Front<!-- .element: class="fragment" -->
- onepoint / Nantes<!-- .element: class="fragment" -->
- @benjilegnard<!-- .element: class="fragment" -->


### Pourquoi ce talk ?
---
- l'année dernière j'ai fait le tour de france des conférence tech avec un sujets sur les claviers ergonomiques


#### Tech Conférences Tour
- Camping des speakers 2023
- __Riviera DEV 2023__ 🌴
- Voxxed Days Luxembourg 2023
- Devfest Strasbourg 2023
- Volcamp 2023
- BDX/IO 2023
- Touraine Tech 2024
- Sunny Tech 2024
---
- Je l'ai donnée un peu partout.
- Ce slide est juste là pour flex un peu
- Y'a des gens qui l'ont vue l'année dernière ? (salle pas climatisée)


#### "Construire soi-même son clavier mécanique, idée bizarre ou idée de génie?"

![Capture d'écran d'une vidéo youtube: "Construire soi-même son clavier mécanique, idée bizarre ou idée de génie?" par Benjamin Legrand, sur la chaine de VoxxedLu](images/benjilegnard-voxxed-lu.png)<!-- .element: style="width: 80%; height: auto" -->

---
- je parlais d'ergonomie, et très très rapidement
- j'avais un slide un peu simpliste et condesceendant ou je disais : "apprenez les raccourcis de vos app / utilisez les vim motions"
- en vrai c'est pas si simple que ça.
- ici je vais vous parler de comment côté système d'exploitation et logiciels, on peut se passer de souris



## Pourquoi vouloir se séparer de sa souris ?
---
ou tout du moins éviter de l'utiliser


### Fatigue / TMS / Tendinite

- déplacer sa main de son clavier à sa souris,
- c'est fatiguant 😪


### Context-switching

- les devs sont des flemmards
- changement de contexte


### Marre de chercher le curseur

Le curseur quand je le cherche :

![Gif animé de Jurassic Park: "ne bouge plus, il ne nous voit pas si on ne bouge pas"](images/jurassic-park-movement.gif)<!-- .element: style="width: 60%; height: auto" -->


### Accessibilité

- Comme ça vous testerez l'accessibité clavier de vos sites / apps
- 😏
---
Merci, fin du talk. au revoir


### La vraie raison

- réduire la friction / optimiser le chemin critique<!-- .element: class="fragment" -->
- vous pensez à faire faire un truc à votre ordinateur<!-- .element: class="fragment" -->
- il est fait instantanément<!-- .element: class="fragment" -->
---
le vrai but et intéret



### Avertissement #0
- Je suis une bille 🔵
---
- Réellement, les outils que je vais vous présenter là, je ne maitrise pas tout, on va dire 10%.
- Mais le peu que je maitrise me rends déjà 5 à 10 fois plus efficaces que ce que je ne l'étais avant


### Avertissement #1
- Ceci n'est pas un talk à propos de __vi / vim / neovim__
- Mais je vais en parler quand même<!-- .element: class="fragment" -->
---
- Qui utilise vim déjà dans la salle ?
- Qu'est ce que vous faites là, vous êtes déjà convaincu normalement.



## Vim
![vim](images/vim-logo.png)<!-- .element: style="width: 40%; height: auto" -->


### Navigation

- <kbd>H</kbd> <kbd>J</kbd> <kbd>K</kbd> <kbd>L</kbd>
- <kbd>←</kbd> <kbd>↓</kbd> <kbd>↑</kbd> <kbd>→</kbd>
---
- c'est historique
- gauche bas haut droite


### Les modes
- mode `NORMAL`
- mode `INSERT`
- mode `VISUEL`
- et d'autres mais passons<!-- .element: class="fragment" -->
---
- contrairement à d'autres... éditeurs de texte, vim a des modes
- généralement vous êtes en mode édition


### La touche `<Leader>`
- concept commun à plein d'applis linux.
- active une "couche" clavier
---
- Une notion qu'on va retrouver dans pas mal d'applications un peu complexe
- c'est une touche qui va permettre de lancer des commandes selon la touche qui va suivre
- par défaut sur tmux c'est <kbd>Ctrl</kbd> + <kbd>b</kbd>


### Démo

---
- ok vim c'est cool, mais c'est uniquement un éditeur de texte
- C'est çe qui m'a permis néanmoins de comprendre qu'il y a un monde sans souris
- maintenant on ne fait pas que de l'édition de texte dans la vie, y'a aussi le terminal :D. On va vouloir lancer des commandes



### Avertissement #2

- Ceci n'est pas un talk à propos de __tmux__
- Mais je vais en parler quand même<!-- .element: class="fragment" -->



## Tmux
![tmux](images/tmux-logo.png)<!-- .element: style="width: 40%; height: auto" -->

<https://github.com/tmux/tmux/wiki>
---
Le premier outil que je voudrais présenter, c'est tmux


### Multiplexeur de terminal

- Session
- Window
- Panel
---
- Tmux est un multiplexeur de terminal: dans un terminal, vous pouvez avoir plusieurs sessions
- chaque session peut avoir plusieurs fenêtres, chaque fenêtre peut avoir plusieurs panneaux



### Démo
---
- Créer une session
- Split vertical
- Split horizontal
- passer de l'un a l'autre
- sélectionner du texte dans la sortie



## i3 / sway
![Sway](images/sway-logo.png)<!-- .element: style="width: 40%; height: auto" -->

<https://swaywm.org/>
---
- Sway c'est un gestionnaire de fenêtre en carrelage
- de la même maniére que dans tmux on peut passer de panel en panel on fait pareil avec i3 sway


### Tu veux dire OS / Distribution ?

| Windows | MacOS | Linux |
| - | - | - |
| <img src="/images/os-windows.webp" class="fragment" /> | <img src="/images/os-macosx.webp" class="fragment" />  | <img src="/images/os-linux.webp" class="fragment" /> |


### Gestionnaire de fenêtres ? 
- on est dans linux, tout est configurable / changeable<!-- .element: class="fragment" -->
- gérer l'affichage de vos fenêtres UNIQUEMENT<!-- .element: class="fragment" -->
- en carrelage<!-- .element: class="fragment" -->
---
- Dans le cas d'i3 et sway, on parle de gestionnaire de fenêtres tiling, c'est-à-dire que les fenêtres sont disposées de manière non superposée, sans chevauchement, de sorte que toutes les fenêtres soient visibles en permanence.


### Un peu d'histoire...
| | |
| --- | ------- |
| X11 | Wayland |
| i3  | sway    |
---
- Quand on parle de gestionnaire de fenêtres, on parle de la couche qui gère les fenêtres, pas de l'OS en lui-même.
- Un compositeur de fenêtres est un logiciel qui gère les fenêtres, les déplacements, les redimensionnements, les superpositions, etc.


### Principe 
- Les workspaces
- Les fenêtres
---
- Organise vos fenêtres d'applications.


### La touche `<Super>`

- c'est la touche `windows` <kbd>⊞</kbd>
- ou touche `command` sur mac <kbd>⌘</kbd>
- `KC_GUI` / Super


### Welcome

<img src="images/sway-schema.svg"/>
---
-la première fois qu'on lance sway ou i3, c'est perturbant
- il nous manque quelque chose pour lancer nos applications.


### Lancer des applications
- dmenu
- wofi
- rofi
- ou simplement le terminal<!-- .element: class="fragment" -->
---
- Quand on arrive dans une session sway, il n'y a pas de fenêtre ouverte, il n'y a pas de barre de tâche, il n'y a pas de menu démarrer, rien n'est cliquable.
- C'est un peu déroutant au début, mais c'est aussi très libérateur. Vous pouvez tout configurer à votre guise, et vous pouvez tout faire au clavier.
- example emoji picker, vous pouvez en faire


### Démo
---
- lancer une application
- changer de workspace
- redimensionner une fenêtre
- naviguer entre les fenêtres
- déplacer une fenêtre
- scratchpad



## Personnalisation

🎨


### Waybar


#### Widgets
~/.config/waybar/config


#### CSS
~/.config/waybar/style.css


## Vimium

![vimium](images/vimium-logo.svg)<!-- .element: style="width: 40%; height: auto" -->

<https://vimium.github.io/>


### Extension navigateur

- Firefox
- Chrome


### Reprends les principes et keymaps de vim

- HJKL
- les modes


### Démo



## Bonuses


### Bonus #1: lazygit

<https://github.com/jesseduffield/lazygit>

---
Une des dernières applications que j'arrivais pas à me passser de ma souris, c'était git.
Pas l'usage simple en cli.
Les patchs, navigation dans les branches et l'historique, c'était un peu compliqué.
enter lazygit, le meilleur client git en cli (à mon avis)


### Bonus #2 : cmus

<https://cmus.github.io/>

Lecteur de musique en ligne de commande


### Bonus #3 : Basic terminal shortcuts

Chercher une commande dans l'historique...

![Roan Atkinson alias Mr Bean qui tape sur un clavier](images/mrbean-onekey.gif)<!-- .element: style="width: 40%; height: auto" -->

Source: https://itsfoss.com/linux-terminal-shortcuts/


## Conclusion


### Limites

- évidemment: pas adapté à tout
- dessin / design / 3d / jeux-vidéos / etc


### Avantages

- gain de temps<!-- .element: class="fragment" -->
- performance<!-- .element: class="fragment" -->
- ergonomie<!-- .element: class="fragment" -->
- accessibilité<!-- .element: class="fragment" -->
- personnalisation<!-- .element: class="fragment" -->
---
- gain de temps: pas besoin de chercher sa souris
- performance: pas besoin de bouger sa main, on reste concentré sur la tâche à réaliser
- ergonomie: moins de mouvements, moins de douleurs vous bougez très peu les doigts
- accessibilité: tout le monde n'a pas de souris, tout le monde n'a pas de bras
- personnalisation: on peut tout configurer à sa guise


### Inconvénients

- courbe d'apprentissage<!-- .element: class="fragment" -->
- connaissances linux nécéssaires<!-- .element: class="fragment" -->
- vimium: <!-- .element: class="fragment" -->
  - un site inaccessbile au clavier, sera inaccessible avec vimium<!-- .element: class="fragment" -->
- sway / tmux / nvim : vous êtes seul avec votre config.<!-- .element: class="fragment" -->
---
- services en taches de fonc pas nécéssaires
- galérer avec les agents ssh, service d'impression
- c'est aussi un intéret, mais vu que vous personnalisez un maximum les outils, c'est difficilement partageable/ pas standardisé


### Hors de linux
- Windows:
  - [GlazeWM](https://github.com/glzr-io/glazewm)
  - [HashTWM](https://github.com/ZaneA/HashTWM)
- Macos:
  - [amethist](https://github.com/ianyh/Amethyst)
  - [yabai](https://github.com/koekeishiya/yabai)


### Conclusion
- ~~jeter sa souris à la poubelle~~<!-- .element: class="fragment" -->
- essayez de vous en passer<!-- .element: class="fragment" -->
- vous verrez, c'est pas si difficile<!-- .element: class="fragment" -->
- prenez ça comme un jeu<!-- .element: class="fragment" -->
---
- le but c'est pas de flexer parce que je connais tous ces raccourcis
- le but c'est de réduire la friction entre vous et votre ordinateur
- et de pouvoir vous concentrer uniquement sur ce que vous avez à faire et pas les à côtés
- qu'entre penser l'action, et faire l'action, ca soit indolore, voire instantané



## Merci

@benjilegnard

<div class="qr-codes">
  <div class="slides-link">
    <h4>⬇️ Slides ⬇️</h4>
    <a href="https://github.com/benjilegnard/jetez-vos-souris-a-la-poubelle#README">
      <img src="images/qrcode-slides.png" alt="QRCode du lien vers les slides">
    </a>
  </div>
  <img src="images/riviera-dev.svg" style="width: 30%"/>
  <div class="openfeedback-link">
    <h4>⬇️ Feedback ⬇️</h4>
    <a href="https://openfeedback.io/rivieradev24/0/254">
      <img src="images/qrcode-openfeedback-rivieradev.png" alt="QRCode du lien vers openfeedback">
    </a>
  </div>
</div>


---
- Vous pouvez m'envoyez vos questions ou m'insulter sur twitter
- Merci de m'avoir écouté, bisous.
