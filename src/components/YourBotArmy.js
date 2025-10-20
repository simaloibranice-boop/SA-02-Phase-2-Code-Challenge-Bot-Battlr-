import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
    return(
        <div className="your-bot-army">
            <h2>YourBotArmy</h2>\
            <div className="bot-list">
                {army.map((bot) => (
                    <BotCard
                    key={bot.id}
                    bot={bot}
                    onClick={() => onRelease(bot)}
                    onDischarge={() => onDischarge(bot)}
                    />
                ))}
            </div>
        </div>
    );
}

export default YourBotArmy;