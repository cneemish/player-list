import React from 'react';
import PropTypes from 'prop-types';

const PlayerSingle = ({ player }) => {
  if (!player) {
    return <p className="center">No player selected</p>;
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src={player.image || "chelsea.jpg"} alt={player.currentTeam || "Player"} />
          </div>
          <div className="card-content center">
            <h5 className="player-name">{player.firstName} {player.lastName}</h5>
            <p>
              <strong>Phone:</strong> {player.phone || "N/A"} <br />
              <strong>Email:</strong> {player.email || "N/A"}
            </p>
            <p><strong>Age:</strong> {player.age || "N/A"}</p>
            <p><strong>Coach:</strong> {player.isCoach ? "Yes" : "No"}</p>
            <p>
              <strong>Strength:</strong> {player.strength || "N/A"} - 
              <strong> Endurance:</strong> {player.endurance || "N/A"}
            </p>
          </div>
          <div className="card-action center">
            <strong>Team:</strong> {player.currentTeam || "No team assigned"}
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS for better styling
const styles = `
  .player-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
`;

export default PlayerSingle;
