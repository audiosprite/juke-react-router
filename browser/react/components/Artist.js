'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default class Artist extends React.Component {
  componentDidMount(){
      this.props.getTheArtist(this.props.params.artistId)
  }

  render (){
        console.log("John wants his artist", this.props.selectedArtist.albums);
    return (<div>
        <h3>{ this.props.selectedArtist.name }</h3>
        <h3>Albums</h3>
        <div className="row">
          {(this.props.selectedArtist.albums) ?this.props.selectedArtist.albums.map(album => (
              <div className="col-xs-4" key={album.id}>
                <a className="thumbnail" href="#" onClick={() => go(album)}>
                  <img src={ album.imageUrl } />
                  <div className="caption">
                    <h5>
                      <span>{ album.name }</span>
                    </h5>
                    <small>{ album.songs.length } songs</small>
                  </div>
                </a>
              </div>
            ))
            : ""
          }
        </div>
        <SongsContainer songs={this.props.selectedArtist.songs} />
      </div>)
  }
}