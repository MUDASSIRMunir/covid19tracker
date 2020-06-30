import React,{useState, useEffect} from 'react';
import { fetchData } from '../../api/index';
import {Grid,Card,CardContent,Typography} from '@material-ui/core';
import styles from './cards.module.css';
import CountUp from 'react-CountUp';

export const Cards = () => {
    //console.log(props.data);

    const [data,setData]=useState({});

    useEffect(() => {
    
        const datafetched= async () =>{
         // const dataretrived=await fetchData();
          setData(await fetchData());
        }
        datafetched();
       },[data!==data] );

       console.log(data);

       if(!data.confirmed){
        return "Loading..."
    }
    return (
        
        <div className={styles.container} justify="center">
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondry" gutterBottom>Infected</Typography>
                             <Typography variant="h5">
                                <CountUp>
                                    start={0}
                                    end={data.confirmed.value}
                                    duration={10}
                                    separator=","
                                </CountUp>

                             </Typography>
                            <Typography color="textSecondry">REAL DATE</Typography>
                            <Typography variant="body2">Number of active cases of COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondry" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">REAL DATA</Typography>
                            <Typography color="textSecondry">REAL DATE</Typography>
                            <Typography variant="body2">Number of recovered patients from COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondry" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">REAL DATA</Typography>
                            <Typography color="textSecondry">REAL DATE</Typography>
                            <Typography variant="body2">Number of deaths from COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
            <h1>CARDS</h1>
        </div>
    )
}
