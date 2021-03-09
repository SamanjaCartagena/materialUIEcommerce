import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles= makeStyles({
buttonStyle:{
    color: props =>(props.cool? "blue":"red")
}
});
function CoolButton(props) {
    const classes= useStyles(props);
    return (
       <Button className={classes.buttonStyle}>Hi There</Button>
    )
}

export default CoolButton
