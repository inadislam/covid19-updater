import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import styles from './App.module.css';

class App extends React.Component {

    state = {
        data: {},
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    render(){
        return(
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;
