import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { postData, fetchData } from '../store/actions/action';

const useStyles = makeStyles(theme=>({
    inputBlock:{
        flexWrap:'noWrap'
    },
    inputs:{
        width:'400px'
    }
}));



const MainPage = () => { 
    const dispatch = useDispatch();
    const classes = useStyles();

    const [input, setInput] = useState({
        encode:'',
        password:'',
        decode:'',
    });


    const onChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        setInput(prevState=>({
            ...prevState,
            [name]:value
        }));
    };

    const onDecodeClick = () => {
        const newData = {
            message: input.decode,
            password: input.password
        };
        dispatch(postData('/encode', newData));
        dispatch(fetchData('/encode','encoded',setInput,'encode'));        
    };

    const onEncodeClick = () => {
        const newData = {
            message: input.encode,
            password: input.password
        };
        dispatch(postData('/decode', newData));
        dispatch(fetchData('/decode','decoded',setInput,'decode'));
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
                        value={input.decode} 
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

                        <IconButton onClick={onDecodeClick} 
                        disabled={input.password.length<1}>
                            <ArrowDownwardIcon/>
                         </IconButton>

                         <IconButton onClick={onEncodeClick}
                         disabled={input.password.length<1}>
                            <ArrowUpwardIcon/>
                         </IconButton>
                </Grid>

                <Grid item >
                    <Box m={3}>
                        <TextField
                        className={classes.inputs} 
                        label='Encode' 
                        value={input.encode}
                        variant='outlined'
                        multiline 
                        rows={5}
                        name='encode'
                        onChange={(e)=>onChangeHandler(e)}/>
                    </Box>
                </Grid>
                
            </Grid>
        </Grid>
    );
};

export default MainPage;