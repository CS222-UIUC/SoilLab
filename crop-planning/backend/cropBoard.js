import { FaLeaf } from "react-icons/fa";
import { Crop } from "./crop";
import { CropModel } from "./cropModel";

// actually Carrot and Corn can be planted together, this is just for testing
let bad_neighbors = { "Corn": ["Tomato", "Carrot"] , "Tomato": ["Corn"], "Carrot": ["Celery", "Parsnip", "Corn"], "Lettuce": ["Garlic"] };
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
        console.log(this.crops);
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

    suggestion(weather) {
        let problems = {
            /* will add more attributes once the weather data is organized into a class or inside CropBoard */
            Temperature: this.check_temperature(weather.temperature),
            Irrigation: this.check_irrigation(weather.irrigation),
            Sunlight: this.check_sunlight(weather.sunlightHour),
            BadNeigborPairs: this.check_adjacent(),
        };
        return problems;
    }

    /* function to check temperature for all the crops in the board */
    check_temperature(temp) {
        // an array of Crop that won't grow well in this temperature
        console.log("running check_temperature");
        let temp_inappropriate = [];

        if (Array.isArray(temp)) {
            if (temp.length == 2) {
                // the array is in format [a, b], which means the upper and lower range of temperature

                for (var i = 0; i < this.crops.length; i++) {
                    if (!(this.crops[i].check_temperature(temp[0]) && this.crops[i].check_temperature(temp[1]))) {
                        temp_inappropriate.push(this.crops[i]);
                    }
                }
            } else {
                /* the array is an array of multiple temperatures, 
                check if all these temperatures are good temperatures
                */
                for (var i = 0; i < this.crops.length; i++) {
                    for (var j = 0; j < temp.length; j++) {
                        if (!(this.crops[i].check_temperature(temp[j]))) {
                            temp_inappropriate.push(this.crops[i]);
                            break;
                        }
                    }
                }
            }

        } else {
            /* there is only one single  temperature */

            for (var i = 0; i < this.crops.length; i++) {
                if (!(this.crops[i].check_temperature(temp))) {
                    temp_inappropriate.push(this.crops[i]);
                }
            }

        }
        return temp_inappropriate;
    }

    /* function to check irrigation for all the crops in the board */
    check_irrigation(depth) {
        // an array of Crop that won't grow well in this irrigation amount
        console.log("running check_irrigation");
        let irri_inappropriate = [];

        if (Array.isArray(depth)) {
            if (depth.length == 2) {
                // the array is in format [a, b], which means the upper and lower range of irrigation(depth)

                for (var i = 0; i < this.crops.length; i++) {
                    if (!(this.crops[i].check_irrigation(depth[0]) && this.crops[i].check_irrigation(depth[1]))) {
                        irri_inappropriate.push(this.crops[i]);
                    }
                }
            } else {
                /* the array is an array of multiple irrigation(depth), 
                check if all these irrigation(depth) amount are good
                */
                for (var i = 0; i < this.crops.length; i++) {
                    for (var j = 0; j < depth.length; j++) {
                        if (!(this.crops[i].check_irrigation(depth[j]))) {
                            irri_inappropriate.push(this.crops[i]);
                            break;
                        }
                    }
                }
            }

        } else {
            /* there is only one single irrigation value */

            for (var i = 0; i < this.crops.length; i++) {
                if (!(this.crops[i].check_irrigation(depth))) {
                    irri_inappropriate.push(this.crops[i]);
                }
            }

        }
        return irri_inappropriate;
    }

    /* function to check sunlight hours for all the crops in the board */
    check_sunlight(hour) {
        console.log("running check_sunlight");
        // an array of Crop that won't grow well in this number of sunlight hour
        let light_inappropriate = [];

        if (Array.isArray(hour)) {
            /* the array is an array of multiple sunlight hours, 
            check if all these sunlight hour amount are good
            */
            for (var i = 0; i < this.crops.length; i++) {
                for (var j = 0; j < hour.length; j++) {
                    if (!(this.crops[i].check_sunlight(hour[j]))) {
                        light_inappropriate.push(this.crops[i]);
                        break;
                    }
                }
            }

        } else {
            /* there is only one single sunlight hour value */

            for (var i = 0; i < this.crops.length; i++) {
                if (!(this.crops[i].check_sunlight(hour))) {
                    light_inappropriate.push(this.crops[i]);
                }
            }

        }
        return light_inappropriate;
    }

    check_adjacent() {
        let bad_adjacent = []
        let bad_coord_set = new Set();
        console.log("running check_adjacent");
        
        for (var i = 0; i < this.crops.length; i++) {
            let crop1 = this.crops[i];
            for (var j = 0; j < this.crops.length; j++) {
                let crop2 = this.crops[j];
                if (!this.check_good_neighbor(crop1, crop2) && this.is_adjacent(crop1, crop2)) {
                    let alter_coord_list = String([crop2.xcoord, crop2.ycoord, crop1.xcoord, crop1.ycoord]);
                    if (!bad_coord_set.has(alter_coord_list)) {
                        bad_coord_set.add(String([crop1.xcoord, crop1.ycoord, crop2.xcoord, crop2.ycoord]));
                        bad_adjacent.push([crop1, crop2]);
                    }
                }
            }
        }
        
        return bad_adjacent;
    }

    /* 

    Helper function of check_adjacent 
    Check whether two crops can be grown next to each other

    */
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

    /* 

    Helper function of check_adjacent 
    Check whether two crops are adjacent
    Defined by the distance between center points & the radiuses

    */
    is_adjacent(crop1, crop2) {
        let min_distance_sqaure = 2 * Math.pow(crop1.attributes.radius + crop2.attributes.radius, 2);
        let actual_distance_square = Math.pow(crop1.xcoord - crop2.xcoord, 2) + Math.pow(crop1.ycoord - crop2.ycoord, 2);
        if (min_distance_sqaure > actual_distance_square) return true;
        return false;
    }

    /* 

    Helper function of check_adjacent 
    Check whether the two crops are the same crop

    */
    crops_equal(crop1, crop2) {
        if (crop1.name === crop2.name && crop1.xcoord == crop2.xcoord && crop1.ycoord == crop2.ycoord)
            return true;
        return false;
    }
}

export {CropBoard};