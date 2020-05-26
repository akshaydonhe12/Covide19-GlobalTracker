import React from 'react';

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css';
import {fetchdata} from './api';

class App extends React.Component {

    state = {
        data: {},
    }


    async  componentDidMount(){
        const fetchdata = await fetchdata();

        this.setState(  { data: fetchdata });

    }

    render() {
        const {data} = this.state;
        return (
            <div className= {styles.container}>
               <Cards data = {data} />
               <Chart />
               <CountryPicker />
            </div>
        )
    }
}

export default App;