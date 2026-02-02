export default class ObjetGraphique {
    x = 0;
    y = 0;
    couleur = "black";
    largeur = 5;
    hauteur = 5;


    vitesseY = 0;
    gravite = 0.8;
    jumpForce = -12;
    enSaut = false;


    constructor(x, y, couleur, largeur, hauteur) {
        this.x = x;
        this.y = y;
        this.couleur = couleur;
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    draw(ctx) {
        ctx.save();

        ctx.fillStyle = this.couleur;
        ctx.arc(this.x, this.y, this.largeur / 2, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
    }

    jump() {
        if (!this.enSaut) {
            this.vitesseY = this.jumpForce;
            this.enSaut = true;
        }
    }

    update() {
        // gravité
        this.vitesseY += this.gravite;
        this.y += this.vitesseY;

        // retour au sol
        if (this.y >= this.ySol) {
            this.y = this.ySol;
            this.vitesseY = 0;
            this.enSaut = false;
        }
    }
}