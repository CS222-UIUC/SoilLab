import { Crop } from "./crop";
import { CropModel } from "./cropModel";

class CropBoard {
    constructor (width, height) {
        if (width < 1 || height < 1) {
            throw "invalid crop board size";
        }
        this.width = width;
        this.height = height;
        this.board = new Array(height);
        for (var i = 0; i < height; i++) {
            this.board[i] = new Array(width).fill(0);
        }
        console.log(this.board);
    }

    visualization() {
        let board_str = "CropBoard Visualization:\n\nWidth: " + String(this.width) + "  Height: " + String(this.height) + "\n\n";
        for (var i = 0; i < this.height; i++) {
            board_str += String(this.board[i][0]);
            for (var j = 1; j < this.width; j++) {
                board_str += " " + String(this.board[i][j]);
            }
            board_str += '\n';
        }
        console.log(board_str);
    }

    add_crop(crop, x, y) {
        if (!(crop instanceof CropModel)) {
            throw "crop has wrong type";
        } else if (x < 0 || y < 0 || x >= this.height || y >= this.width) {
            throw "coordinate out of board";
        } else if (x - crop.attributes.radius < 0 || y - crop.attributes.radius < 0 || 
            x + crop.attributes.radius>= this.height || y + crop.attributes.radius >= this.width) {
            throw "plant out of board edges";
        }

        for (var i = x - crop.attributes.radius; i < x + crop.attributes.radius; i++) {
            for (var j = y - crop.attributes.radius; j < y + crop.attributes.radius; j++) {
                if (this.board[i][j] != 0) {
                    return false;
                }
            }
        }

        for (var i = x - crop.attributes.radius; i < x + crop.attributes.radius; i++) {
            for (var j = y - crop.attributes.radius; j < y + crop.attributes.radius; j++) {
                this.board[i][j] = 1;
            }
        }

        return true;
    }

    /*
    semicircle_width(r) {
        // r is the radius of this semicircle
        if (r < 1) {
            throw "invalid radius";
        }
        let semicircle = new Array(r);
        semicircle[0] = r;
        for (var i = 1; i < r; i++) {
            semicircle[i] = Math.round(r * Math.cos(2 * Math.atan(i / r)));
        }
        console.log(semicircle)
        return semicircle;
    }
    */
}

export {CropBoard};