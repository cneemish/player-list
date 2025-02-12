import { deletePlayer } from '../controllers/players-controllers.js';
import {
    addNewPlayer,
    getPlayers,
    getPlayerByID,
    updatePlayer
} from '../controllers/players-controllers.js';

// Creating routes 

const route = (app) =>{
    app.route('/players')
        .post(addNewPlayer)     // post endpoints
        .get(getPlayers)     //  get endpoints


    app.route('/player/:PlayerID')
    .get(getPlayerByID)     // get endpoints
    .put(updatePlayer)     // put endpoints
    .delete(deletePlayer)    // delete endpoints
}


export default route;
