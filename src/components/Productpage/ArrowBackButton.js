import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Link } from "react-router-dom";

class ArrowBackButton extends Component {
  render() {
    return (
      <Link to={'/buy'}>
        <IconButton className="abBtn" style={{width: 50}}>
            <ArrowBackRoundedIcon/>
        </IconButton>
      </Link>
  );
 }
}

export default ArrowBackButton;