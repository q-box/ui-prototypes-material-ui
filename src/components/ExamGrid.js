import React, { Component } from "react";

import {
  IconButton,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader
} from "@material-ui/core";

import InfoIcon from "@material-ui/icons/Info";

class ExamGrid extends Component {
  render() {
    return (
      <div>
        <GridList cellHeight={180} cols={2} spacing={2}>
          <GridListTile cols={2}>
            <ListSubheader component="div">Lista de exercícios</ListSubheader>
          </GridListTile>
          <GridListTile key="titulo">
            <img
              src={require("../images/fisica-classica.jpg")}
              alt="Física clássica"
            />
            <GridListTileBar
              title="Física clássica"
              subtitle={<span>by: MINORA</span>}
              actionIcon={
                <IconButton>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}

export default ExamGrid;
