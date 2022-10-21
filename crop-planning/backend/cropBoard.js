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
        
        // storing the number representing certain crop type: {"CropName": CropNumber}
        this.crop_dict = {};
        this.crop_type_number = 0;
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

        if (!(crop.name in this.crop_dict)) {
            this.crop_dict[crop.name] = this.crop_type_number + 1;
            this.crop_type_number++;
        }

        for (var i = x - crop.attributes.radius; i <= x + crop.attributes.radius; i++) {
            for (var j = y - crop.attributes.radius; j <= y + crop.attributes.radius; j++) {
                this.board[i][j] = this.crop_dict[crop.name];
            }
        }

        return true;
    }

    clear() {
        for (var i = 0; i < this.height; i++) {
            for (var j = 1; j < this.width; j++) {
                this.board[i][j] = 0;
            }
        }
        this.crop_type_number = 0;
        this.crop_dict = {};
        console.log("crop board cleared");
    }
}

export {CropBoard};