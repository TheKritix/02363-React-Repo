import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

class ArrowBackButton extends Component {
  render() {
    return (
        <IconButton onClick={event => window.location.href='/buy'}>
            <ArrowBackRoundedIcon/>
        </IconButton>
  );
 }
}

export default ArrowBackButton;