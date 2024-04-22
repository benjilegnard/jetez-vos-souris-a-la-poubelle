# Pourquoi vous devriez jetez vos souris à la poubelle

Une courte conférence de [Benjamin Legrand](https://www.benjaminlegrand.net)

Slides visibles sur <https://benjilegnard.github.io/jetez-vos-souris-a-la-poubelle/>

## Abstract

```
... et utiliser un gestionnaire de fenêtre en carrelage.

Un gestionnaire de fenêtre en carrelage (ou Tiling Windows Manager dans la langue de Shakespeare) vous permet de reprendre la main sur l'interface de votre système d'exploitation.

Comment peut-on gagner en productivité en débranchant nos souris ?

Quels sont les concepts d'un TWM, pourquoi c'est génial et comment ça s'utilise et se configure au quotidien ?

Retours d'expérience sur mon utilisation de Sway et d'autres petits outils pour être extrêmement productif avec son clavier.
```

## Plan

- Introduction
  - Pourquoi ce talk?
  - La réponse
  - Avertissements
- Vim & tmux
  - vim: la navigation ( H J K L )
  - vim: les modes
  - vim: les motions
  - démo
- tmux
  - tmux: les panels / window / session
  - tmux: naviguer
  - démo
- i3/Sway
  - Bref historique
  - X11 vs Wayland
  - Principes
- Sway : Utilisation au quotidien
  - la touche `<super>`
  - lancer des applications
  - les workspaces
  - les fenêtres
  - changer de layout
  - naviguer
  - redimensionner
  - les sticky windows / le scratchpad
- Waybar : Personnalisation
  - waybar
  - wofi
- Bonuses
  - Vimium
  - Lazygit
  - CMUS
  - Basic terminal shortcuts
- Conclusion

## Sources

La source principale de ce quickie est le fichier de configuration de sway ( littéralement, je déroule la config )

<https://github.com/swaywm/sway/blob/master/config.in>

Mais aussi on parle de tout ces outils :

- vim
  - [neovim](http://neovim.io/)
  - [mmm oui oui bon article](https://www.emaxilde.net/posts/2017/02/22/vi-l-editeur-de-texte-atypique.html)
  - [Découvrir Vim](https://vim.avec.une-tasse-de.cafe/)
- tmux
  - Wiki officiel : <https://github.com/tmux/tmux/wiki>
- i3 
  - la fabuleuse documentation : <https://i3wm.org/docs/userguide.html#default_border>
- sway
  - wikipedia: <https://en.wikipedia.org/wiki/Tiling_window_manager>
  - i3: <https://i3wm.org/>
  - sway: <https://swaywm.org/>
  - wofi: <https://sr.ht/~scoopta/wofi/>
  - waybar: <https://github.com/Alexays/Waybar>

- vimium
  - chrome: <https://chromewebstore.google.com/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb>
  - firefox: <https://addons.mozilla.org/en-US/firefox/addon/vimium-ff/>
- lazygit
  - <https://github.com/jesseduffield/lazygit>
- cmus
  - <https://cmus.github.io/>
- mouvement nomouse <https://nomouse.org/>

## Raccourcis

### Sway

| Raccourci                                                       | Action                                                                                                  |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <kbd>Super</kbd> + <kbd>Enter</kbd>                             | Ouvrir un terminal                                                                                      |
| <kbd>Super</kbd> + <kbd>D</kbd>                                 | Ouvrir un lanceur d'applications                                                                        |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>Q</kbd>              | Fermer la fenêtre ayant le focus                                                                        |
| <kbd>Super</kbd> + <kbd>\[0-9\]</kbd>                           | Aller sur le workspace N                                                                                |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>\[0-9\]</kbd>        | Déplacer la fenêtre sur le workspace N                                                                  |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd>          | Passe la fenêtre active en mode "flottant" et inversement                                               |
| <kbd>Super</kbd> + <kbd>S</kbd>                                 | Passer les fenêtres du workspace en mode "pile"                                                         |
| <kbd>Super</kbd> + <kbd>W</kbd>                                 | Passer les fenêtres du workspace en mode "tab"                                                          |
| <kbd>Super</kbd> + <kbd>E</kbd>                                 | Passer les fenêtres du workspace en mode "tiling"                                                       |
| <kbd>Super</kbd> + <kbd>\[←\|↓\|↑\|→\]</kbd>                    | Naviguer entre les fenêtres                                                                             |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>\[←\|↓\|↑\|→\]</kbd> | Déplacer la fenêtre active dans la direction donnée                                                     |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>              | Redimensionner la fenêtre active: Entre dans le mode resize, puis HJKL (<kbd>Esc</kbd> pour le quitter) |
| <kbd>Super</kbd> + <kbd>F</kbd>                                 | Passe la fenêtre active en plein écran et inversement                                                   |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>              | Quitter Sway                                                                                            |

### Tmux

La touche 'Leader' est par défaut <kbd>Ctrl</kbd> + <kbd>B</kbd>.
Mais elle est bien sûr configurable.

| Raccourci                              | Action                      |
| -------------------------------------- | --------------------------- |
| <kbd>Leader</kbd> + <kbd>C</kbd>       | Créer une nouvelle fenêtre  |
| <kbd>Leader</kbd> + <kbd>%</kbd>       | Split vertical              |
| <kbd>Leader</kbd> + <kbd>"</kbd>       | Split horizontal            |
| <kbd>Leader</kbd> + <kbd>flèche </kbd> | Naviguer entre les panneaux |

### Terminal

| Raccourci                      | Action                     |
| ------------------------------ | -------------------------- |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | Aller au début de la ligne |
| <kbd>Ctrl</kbd> + <kbd>E</kbd> | Aller à la fin de la ligne |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | Erase 1 word backwards     |
| <kbd>Alt</kbd> + <kbd>D</kbd>  | Erase 1 word forwards      |
| <kbd>Ctrl</kbd> + <kbd>U</kbd> | Erase to start of line     |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Erase to end of line       |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | Paste what you just erased |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | Paste what you just erased |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | Effacer l'écran (clear)    |

### Vimium

Voir la documentation : <https://github.com/philc/vimium?tab=readme-ov-file#keyboard-bindings>

| Raccourci                       | Action                        |
| ------------------------------- | ----------------------------- |
| <kbd>Shift</kbd> + <kbd>?</kbd> | Help                          |
| <kbd>f</kbd>                    | Follow link                   |
| <kbd>F</kbd>                    | Follow link in new tab        |
| <kbd>o</kbd>                    | Open URL                      |
| <kbd>O</kbd>                    | Open URL in new tab           |
| <kbd>r</kbd>                    | Reload page                   |
| <kbd>x</kbd>                    | Close current tab             |
| <kbd>X</kbd>                    | Restore closed tab            |
| <kbd>H</kbd>                    | Previous tab                  |
| <kbd>L</kbd>                    | Next tab                      |
| <kbd>h</kbd>                    | Scroll left                   |
| <kbd>j</kbd>                    | Scroll down                   |
| <kbd>k</kbd>                    | Scroll up                     |
| <kbd>l</kbd>                    | Scroll right                  |
| <kbd>d</kbd>                    | Scroll down one page          |
| <kbd>u</kbd>                    | Scroll up one page            |
| <kbd>gg</kbd>                   | Scroll to top                 |
| <kbd>G</kbd>                    | Scroll to bottom              |
| <kbd>yy</kbd>                   | Copy current URL              |
| <kbd>p</kbd>                    | Open clipboard URL            |
| <kbd>P</kbd>                    | Open clipboard URL in new tab |
| <kbd>/</kbd>                    | Enter find mode               |
| <kbd>n</kbd>                    | Cycle forward in find mode    |
| <kbd>N</kbd>                    | Cycle backward in find mode   |
| <kbd>i</kbd>                    | Enter insert mode             |
| <kbd>v</kbd>                    | Enter visual mode             |
| <kbd>g</kbd><kbd>i</kbd>        | Focus first input             |
| <kbd>g</kbd><kbd>I</kbd>        | Focus last input              |

## Préparation

Avant de lancer le talk :

0. Lancer les slides avec `pnpm run dev`
1. Lancer [mon fork de wlshowkeys](https://github.com/benjilegnard/wshowkeys) avec `wshowkeys -b#11111b -f#cdd6f4 -s#a6adc8 -atop -m5`
2. Préparer une session `tmux` workspace 1 (comme d'hab, benji)
3. Préparer une session `vim`
4. Mettre toutes les apps en plein écran pour que les transitions ne se voient pas.
5. Penser à la police du terminal, agrandie à 16.
