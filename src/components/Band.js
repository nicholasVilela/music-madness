import React, { Component } from 'react';
// import Bands from './Bands'
import BandList from './BandList'

export class Band extends Component {
    state = {
        band: {}
    }

    componentDidMount() {
        const currentBand = BandList.filter(
            band => band.name === this.props.match.params.name
        )[0]
        this.setState({
            band: currentBand
        })
        console.log(currentBand)
        // console.log(this.state.band)
    }

    showAlbums = () => {
        const albums = this.state.band.albums
        // for()
    }

    render() {
        return (
            <div>
                <h1>Name: {this.state.band.name}</h1>
                <ul>
                    {this.showAlbums()}
                </ul>
            </div>
        );
    }
}

export default Band;
