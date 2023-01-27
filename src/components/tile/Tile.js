import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {renderTileValues(props.tile)}
    </div>
  );
};

const renderTileValues = (tile) => {
    return Object.values(tile).map((value, index) => {
      if(index === 0) {
        return <p className="tile-title">{value}</p>
      } else {
        return <p className="tile">{value}</p>
      }
    })
  }



