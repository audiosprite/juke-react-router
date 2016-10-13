'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default class Album extends React.Component{

  componentDidMount(){
       fetch('/api/albums/' + this.props.params.albumId)
      .then(album => album.json())
      .then(jsoned => this.props.getTheAlbum(jsoned));
    console.log('Album mounting');
  }

  render (){
    console.log("John wants his album", this.props.selectedAlbum);
    return (<div className="album">
              <div>
                <h3>{ this.props.selectedAlbum.name }</h3>
                <img src={ this.props.selectedAlbum.imageUrl } className="img-thumbnail" />
              </div>
              <SongsContainer songs={ this.props.selectedAlbum.songs } />
            </div>)
    }
} 