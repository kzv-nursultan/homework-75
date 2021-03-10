import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import { IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(theme=>({
    inputBlock:{
        flexWrap:'noWrap'
    },
    inputs:{
        width:'400px'
    }
}));



const MainPage = () => {    
    const [input, setInput] = useState({
        incode:'',
        password:'',
        decode:'',
    });

    const classes = useStyles();

    const onChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        setInput(prevState=>({
            ...prevState,
            [name]:value
        }));
        console.log(input);
    };

    return (
        <Grid container spacing={2} justify="center" xl>
            <Grid item container
            className={classes.inputBlock} 
            direction='column' 
            xl={10} 
            alignItems="center">
                
                <Grid item xl={10}>
                    <Box m={3}>
                        <TextField
                        className={classes.inputs} 
                        label='Decode' 
                        variant='outlined'
                        multiline 
                        rows={5}
                        name='decode'
                        onChange={(e)=>onChangeHandler(e)}/>
                    </Box>
                </Grid>

                <Grid item>
                    <TextField
                        label="Password"
                        multiline
                        rowsMax={4}
                        variant="outlined"
                        name='password'
                        onChange={(e)=>onChangeHandler(e)}
                        required/>

                        <IconButton>
                            <ArrowDownwardIcon/>
                         </IconButton>

                         <IconButton>
                            <ArrowUpwardIcon/>
                         </IconButton>
                </Grid>

                <Grid item >
                    <Box m={3}>
                        <TextField
                        className={classes.inputs} 
                        label='Incode' 
                        variant='outlined'
                        multiline 
                        rows={5}
                        name='incode'
                        onChange={(e)=>onChangeHandler(e)}/>
                    </Box>
                </Grid>
                
            </Grid>
        </Grid>
    );
};

export default MainPage;