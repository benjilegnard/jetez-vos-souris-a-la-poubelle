# Pourquoi vous devriez jeter vos souris à la poubelle

![image d'un panneau d'interdiction avec ](nomouse.png)<!-- .element: style="width: 20%; height: auto" -->



## Introduction


### Qui-suis-je ?

- Benjamin Legrand
- "Lead" Développeur - Onepoint
- [benjaminlegrand.net](https://www.benjaminlegrand.net)


### Pourquoi ce talk ?

![Capture d'écran d'une vidéo youtube: "Construire soi-même son clavier mécanique, idée bizarre ou idée de génie?" par Benjamin Legrand, sur la chaine de VoxxedLu](public/images/benjilegnard-voxxed-lu.png)<!-- .element: style="width: 80%; height: auto" -->
---
- l'année dernière j'ai fait le tour de france des conférence tech
- je parlais d'ergonomie, et très très rapidement j'avais un slide ou je disais : "apprenez les raccourcis de vos app"
- ici je vais vous parler de comment côté système d'exploitation et logiciels, on peut se passer de souris


### Pourquoi vouloir se séparer de sa souris ?

#### Fatigue / TMS / Tendinite

- déplacer sa main de son clavier à sa souris, c'est fatiguant


#### Context-switching

- les devs sont des flemmards, changement de contexte

#### Marre de chercher le curseur

Le curseur quand je le cherche :

![Gif animé de Jurassic Park: "ne bouge plus, il ne nous voit pas si on ne bouge pas"](images/jurassic-park-movement.gif)<!-- .element: style="width: 40%; height: auto" -->

#### Accessibilité

- et puis comme ça vous testez l'accessibité clavier
- je dis ça je dis rien...

---
Merci, fin du talk. au revoir
// todo: découper en 3 slides


### Aprenez les raccourcis de vos applications

- conseil que je donnais
- mais c'est pas suffisant<!-- .element: class="fragment" -->
---
Il n'y a pas que des applications finales qui doivent être utilisables au clavier, votre système d'exploitation doit l'être aussi.
Et c'est là que les gestionnaires de fenêtres en carrelage entrent en jeu.


### Avertissement #1

- Ceci n'est pas un talk à propos de __vi/vim/neovim__
- Mais je vais en parler quand même<!-- .element: class="fragment" -->

---
Qui utilise vim déjà dans la salle ?



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


### Easymotion

- principe: active un mode ou chaque lettre va être marquée en gras d'une autre lettre
- permets de sauter instantanément à une position
---


### Demo


<textarea style="width: 80%;height:80%" height="320">
Lorem ipsum doloris ta mère
</textarea>
---
ok vim c'est cool, mais c'est uniquement une application
C'est çe qui m'a permis néanmoins de comprendre qu'il y a un monde sans souris


### Avertissement #2

- Ceci n'est pas un talk à propos de __tmux__
- Mais je vais en parler quand même<!-- .element: class="fragment" -->



## Tmux
![tmux](images/tmux-logo.png)<!-- .element: style="width: 40%; height: auto" -->

<https://github.com/tmux/tmux/wiki>
---
Le premier outil que je voudrais présenter, c'est tmux


### Multiplexeur de terminal
// schema de 1 
---
Tmux est un multiplexeur de terminal: dans un terminal, vous pouvez avoir plusieurs sessions, chaque session peut avoir plusieurs fenêtres, chaque fenêtre peut avoir plusieurs panneaux


### Vocabulaire

- Session
- Panel
- Window

### La touche `<Leader>`


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


### Gestionnaire de fenêtres ? tu veux dire OS ?
- on est dans linux, tout est configurable / changeable
- distribution !== environnement
---
Dans le cas d'i3 et sway, on parle de gestionnaire de fenêtres tiling, c'est-à-dire que les fenêtres sont disposées de manière non superposée, sans chevauchement, de sorte que toutes les fenêtres soient visibles en permanence.


### Un peu d'histoire...
- X11 vs Wayland
- i3 vs sway
---
Quand on parle de gestionnaire de fenêtres, on parle de la couche qui gère les fenêtres, pas de l'OS en lui-même.
Un compositeur de fenêtres est un logiciel qui gère les fenêtres, les déplacements, les redimensionnements, les superpositions, etc.


### Principe 

- Les workspaces
- Les fenêtres


### La touche `<Super>`

- c'est la touche `windows` <kbd>⊞</kbd>
- ou touche `command` sur mac <kbd>⌘</kbd>
- `KC_GUI` / Super 


### Lancer des applications
- dmenu
- wofi
- rofi
- ou simplement le terminal<!-- .element: class="fragment" -->

---
Quand on arrive dans une session sway, il n'y a pas de fenêtre ouverte, il n'y a pas de barre de tâche, il n'y a pas de menu démarrer, rien n'est cliquable.
C'est un peu déroutant au début, mais c'est aussi très libérateur. Vous pouvez tout configurer à votre guise, et vous pouvez tout faire au clavier.


### Navigation


### Démo



## Personnalisation


### Waybar


#### Widgets


#### CSS



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
- dessin / 3d / gaming / etc
- interfaces javascript qui n'y ont pas pensé.


### Avantages

- gain de temps
- performance
- ergonomie
- accessibilité
- personnalisation
---
- gain de temps: pas besoin de chercher sa souris
- performance: pas besoin de bouger sa main, on reste concentré sur la tâche à réaliser
- ergonomie: moins de mouvements, moins de douleurs vous bougez très peu les doigts
- accessibilité: tout le monde n'a pas de souris, tout le monde n'a pas de bras
- personnalisation: on peut tout configurer à sa guise


### Inconvénients

- courbe d'apprentissage
- vimium: 
  - un site inaccessbile au clavier, sera inaccessible avec vimium
- sway / tmux / nvim : vous êtes seul avec votre config.


### Hors de linux
- Windows:
  - [GlazeWM](https://github.com/glzr-io/glazewm)
  - [HashTWM](https://github.com/ZaneA/HashTWM)
- Macos:
  - [amethist](https://github.com/ianyh/Amethyst)
  - [yabai](https://github.com/koekeishiya/yabai)


### Conclusion
- jetez vos souris à la poubelle
- essayez de vous passer de votre souris
- vous verrez, c'est pas si difficile
- le but c'est de réduire la friction entre vous et votre ordinateur
- et de vous concentrer sur ce que vous avez à faire



## Merci

@benjilegnard

<div class="row">
  <div class="col-6">
    <a href="https://rivieradev.fr/">
      <img src="images/riviera-dev.svg" alt="Logo de la conférence Riviera Dev" style="width: 20%; height: auto">
    </a>
  </div>
  <div class="col-6">
    <img src="images/github-logo.png" alt="github" style="width: 20%; height: auto">
  </div>
</div>


---
- Vous pouvez m'envoyez vos questions ou m'insulter sur twitter
- Merci de m'avoir écouté, bisous.