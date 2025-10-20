import React from "react";

function BotCard({ bot, onClick, onDischarge }) {
    return (
        <div className="bot-card" onClick={onClick}>
            <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p> {bot.health}  {bot.damage}  {bot.armor}</p>
      {onDischarge && (
        <button
          className="discharge"
          onClick={(e) => {
            e.stopPropagation();
            onDischarge();
          }}
        >
          Discharge
        </button>
      )}
        </div>
    );
}

export default BotCard;