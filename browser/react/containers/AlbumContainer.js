'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { receiveAlbum } from '../action-creators/albums.js';

const mapStateToProps = ({ selectedAlbum }, ownProps) => ({
  selectedAlbum,
  params: ownProps.params
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTheAlbum: (albumId) => dispatch(receiveAlbum(albumId))
  }
}

// function mapStateToProps (state) {
//   var selectedAlbum = state.selectedAlbum
//   return {
//     selectedAlbum: selectedAlbum
//   }
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);

