# Pourquoi vous devriez jetez vos souris à la poubelle

Une courte conférence de [Benjamin Legrand](https://www.benjaminlegrad.net)

## Abstract

## Plan

- Introduction
  - Pourquoi ce talk?
  - La réponse
  - Avertissements
- Vim & tmux
  - vim: la navigation (HJKL)
  - vim: les modes
  - vim: les motions
  - démo
  - tmux: c'est quoi? 
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
- Personnalisation
  - waybar
  - wofi
- Bonuses
  - Vimium
  - Lazygit
- Conclusion


## Sources

La source principale de ce quickie est le fichier de configuration de sway ( littéralement, je déroule la config )

<https://github.com/swaywm/sway/blob/master/config.in>

Mais aussi on parle de tout ces outils :

- nomouse <https://nomouse.org/>
- vim
  - [neovim](http://neovim.io/)
  - [mmm oui oui bon article](https://www.emaxilde.net/posts/2017/02/22/vi-l-editeur-de-texte-atypique.html)
  - [Découvrir Vim](https://vim.avec.une-tasse-de.cafe/)
- tmux
  - Wiki officiel : <https://github.com/tmux/tmux/wiki>
  - 
- i3 
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

## Préparation

Avant de lancer le talk : 

0. Lancer les slides avec `pnpm run dev`
1. Lancer [mon fork de wlshowkeys](https://github.com/benjilegnard/wshowkeys) avec `wshowkeys -b#11111b -f#cdd6f4 -s#a6adc8 -atop -m5`
2. Préparer une session `tmux` workspace 1 (comme d'hab, benji)
3. Préparer une session `vim`
4. Mettre toutes les apps en plein écran pour que les transitions ne se voient pas.
5. Penser à la police du terminal, agrandie à 16.
