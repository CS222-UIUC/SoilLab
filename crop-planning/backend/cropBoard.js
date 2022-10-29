import { FaLeaf } from "react-icons/fa";
import { Crop } from "./crop";
import { CropModel } from "./cropModel";

// actually Carrot and Corn can be planted together, this is just for testing
let bad_neighbors = { "Corn": ["Tomato"] , "Tomato": ["Corn"], "Carrot": ["Celery", "Parsnip"], "Lettuce": ["Garlic"] };
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
        this.crops = [];
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

        let new_crop = new Crop(crop.name, crop.description, crop.attributes, x, y);

        this.crop_type_number++;
        this.crop_dict[this.crop_type_number] = new_crop;

        for (var i = x - crop.attributes.radius; i <= x + crop.attributes.radius; i++) {
            for (var j = y - crop.attributes.radius; j <= y + crop.attributes.radius; j++) {
                this.board[i][j] =  this.crop_type_number;
            }
        }
        this.crops.push(new_crop);
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

    check_adjacent() {
        let bad_adjacent = []
        console.log("check_adjacent")
        // console.log(this.crops);
        // let boardCopy = JSON.parse(JSON.stringify(this.board));
        for (var i = 0; i < this.crops.length; i++) {
            let crop1 = this.crops[i];
            // console.log(crop1);
            for (var j = 0; j < this.crops.length; j++) {
                let crop2 = this.crops[j];
                if (!this.check_good_neighbor(crop1, crop2) && this.is_adjacent(crop1, crop2)) {
                    bad_adjacent.push([crop1, crop2]);
                }
            }
        }
        // console.log(bad_adjacent);
        return bad_adjacent;
    }

    check_good_neighbor(crop1, crop2) {

        if (crop1.get_name() == crop2.get_name()) return true;

        let bad_n = bad_neighbors[crop1.get_name()];
        for (var i = 0; i < bad_n.length; i++) {
            if (bad_n[i] == crop2.get_name()) {
                return false;
            }
        }
        return true;
    }

    is_adjacent(crop1, crop2) {
        let min_distance_sqaure = 2 * Math.pow(crop1.radius + crop2.radius, 2);
        let actual_distance_square = Math.pow(crop1.xcoord - crop2.xcoord, 2) + Math.pow(crop1.ycoord - crop2.ycoord, 2);
        console.log(min_distance_sqaure, actual_distance_square);
        if (min_distance_sqaure > actual_distance_square) return true;
        return false;
    }

    crops_equal(crop1, crop2) {
        if (crop1.name === crop2.name && crop1.xcoord == crop2.xcoord && crop1.ycoord == crop2.ycoord)
            return true;
        return false;
    }
}

export {CropBoard};