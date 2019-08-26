import React, { Component } from 'react';
import BandList from './BandList'
import {Link} from 'react-router-dom'

export class Bands extends Component {
    render() {
        return (
            <div>
                <ul>
                    {BandList.map((band, i) => {
                        return (
                            <li key={i}>
                                <Link to={`/bands/${band.name}`}>
                                    <h1>{band.name}</h1>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Bands;