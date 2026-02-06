# TP1IHM
proto jeu canvas fait par Kelyan et Youssef

Arborescence du projet

projet/
├── index.html              # Menu principal
├── game.html               # Page du jeu
├── css/
│   ├── menu.css           # Style du menu
│   └── game.css           # Style du jeu
├── js/
│   ├── core/
│   │   ├── Game.js        # Boucle principale, gestion du jeu
│   │   ├── InputManager.js # Gestion des 2 touches (saut + altération)
│   │   └── Camera.js      # Scrolling auto
│   ├── entities/
│   │   ├── Player.js      # Cube avec physique améliorée (glisse)
│   │   ├── Obstacle.js    # Pics, blocs, pièges
│   │   └── Powerup.js     # Orbes d'altération
│   ├── systems/
│   │   ├── Physics.js     # Gravité, collisions, friction
│   │   └── Abilities.js   # Dash, inversion gravité, phase
│   ├── levels/
│   │   ├── Level.js       # Classe niveau
│   │   └── level1.json    # Données du niveau 1
│   └── main.js            # Point d'entrée du jeu
└── assets/
    └── sounds/            # (optionnel)

