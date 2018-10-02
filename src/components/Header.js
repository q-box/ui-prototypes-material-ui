import React, { Component } from "react";

import {
  AppBar,
  Badge,
  IconButton,
  Input,
  Toolbar,
  Tooltip,
  Typography
} from "@material-ui/core/";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

class Header extends Component {
  renderNavigation = () => {
    return (
      <IconButton color="inherit" aria-label="Open drawer">
        <MenuIcon />
      </IconButton>
    );
  };

  renderTitle = () => {
    return (
      <Typography variant="title" color="inherit" noWrap>
        q box
      </Typography>
    );
  };

  renderActionsItens = () => {
    return (
      <div>
        <Tooltip title="My messages">
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <IconButton color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </div>
    );
  };

  renderSearch = () => {
    return (
      <div>
        <SearchIcon />
        <Input placeholder="Search..." disableUnderline />
      </div>
    );
  };

  renderContextMenu = () => {
    return (
      <div>
        <IconButton
          aria-owns={true ? "material-appbar" : null}
          aria-haspopup="true"
          // onClick={this.handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
      </div>
    );
  };

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          {this.renderNavigation()}
          {this.renderTitle()}
          {this.renderSearch()}
          {this.renderActionsItens()}
          {this.renderContextMenu()}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
