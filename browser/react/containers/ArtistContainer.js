'use strict';

import { connect } from 'react-redux';
import Artist from '../components/Artist';
import { fetchAndGoToAlbum } from '../action-creators/albums';
import {receiveArtist, fetchAndGoToArtist} from '../action-creators/artists';

const mapStateToProps = ({ selectedArtist }, ownProps) => ({
  selectedArtist,
  params: ownProps.params
});

const mapDispatchToProps = (dispatch) => {
  return {
    go: album => dispatch(fetchAndGoToAlbum(album)),
    getTheArtist: artistId => dispatch(fetchAndGoToArtist(artistId))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);