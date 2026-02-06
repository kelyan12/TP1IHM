import ObjetGraphique from "./objetGraphique.js";

export default class player extends objetGraphique {
    constructor(x, y, couleur, taille) {
        // x, y, couleur, largeur, hauteur
        super(x, y, couleur, taille, taille);
        this.speed = 1;
    }

    draw(ctx) {
        ctx.save();

        // cercle avec deux yeux, nez et une bouche
        ctx.fillStyle = this.couleur;
        // le cercle étant en mode "path" ou "buffer", on doit faire un beginPath
        // sinon ça redessine tous les cerles précédents qui sont restés dans le
        // "path" du contexte graphique (c'est-à dire dans le buffer graphique de la
        // carte graphique
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.largeur / 2, 0, 2 * Math.PI);

        ctx.fill(); //dessine en forme plein tout le contenu du buffer de la
                    // carte graphique. beginPath remet à zero ce buffer.

        ctx.restore();
    }
}   