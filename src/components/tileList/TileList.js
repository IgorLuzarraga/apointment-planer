import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {renderTileList(props.tileList)}
    </div>
  );
};

const renderTileList = (tileList) => {
  return tileList.map((tile, index) => <Tile tile={tile} key={index} />)
}


