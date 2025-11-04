import React from "react";

function BotCard({ bot, onClick, onDischarge }) {
    return (
       <div className="bot-card" onClick={onClick}>
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>{bot.bot_class}</p>

        <hr className="divider" />

        <div className="bot-stats">
          <span>❤️ {bot.health}</span>
          <span>⚔️ {bot.damage}</span>
          <span>🛡️ {bot.armor}</span>
        </div>

        {onDischarge && (
          <button
            className="discharge"
            onClick={(e) => {
              e.stopPropagation();
              onDischarge(bot);
            }}
          >
            Discharge
          </button>
        )}
       </div>
    );
}

export default BotCard;