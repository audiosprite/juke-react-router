'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default class Album extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('Album mounting');
  }

  componentWillUnmount(){
    console.log('Album unmounting')
  }

  render (){
    console.log(this.props);
    return
      (<div className="album">
        <div>
          <h3>{ selectedAlbum.name }</h3>
          <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
        </div>
        <SongsContainer songs={selectedAlbum.songs} />
      </div>)
  }
} 

// export default ({ selectedAlbum }) => (
//   <div className="album">
//     <div>
//       <h3>{ selectedAlbum.name }</h3>
//       <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
//     </div>
//     <SongsContainer songs={selectedAlbum.songs} />
//   </div>
// );