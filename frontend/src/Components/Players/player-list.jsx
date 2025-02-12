import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const PlayerList = ({ players, updateCurrentPlayer, fetchPlayers }) => {
  
  // Function to delete a player
  const handleDelete = async (playerId) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      try {
        await axios.delete(`http://localhost:4000/player/${playerId}`);
        fetchPlayers(); // Refresh player list after deletion
      } catch (error) {
        console.error("Error deleting player:", error);
      }
    }
  };

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header"><h4>Players</h4></li>
        {players.length > 0 ? (
          players.map((player) => (
            <li className="collection-item" key={player._id}>
              <span 
                className="player-name" 
                onClick={() => updateCurrentPlayer(player)}
                style={{ cursor: "pointer", color: "teal", fontWeight: "bold" }}
              >
                {player.firstName} {player.lastName}
              </span>
              <button 
                className="btn red btn-small right" 
                onClick={() => handleDelete(player._id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className="collection-item">No players available</li>
        )}
      </ul>
    </div>
  );
};

// Prop Type Validation
PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  updateCurrentPlayer: PropTypes.func.isRequired,
  fetchPlayers: PropTypes.func.isRequired, // Function to refresh the list
};

export default PlayerList;
