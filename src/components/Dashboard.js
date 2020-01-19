import React from 'react';
import Cell from './presentational/Cell';

class Dashboard extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
                <h3>Dashboard</h3>
                <Cell />
            </>
        )
    }
}

export default Dashboard;