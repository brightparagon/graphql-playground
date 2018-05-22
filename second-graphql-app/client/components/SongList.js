import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map((song, index) =>
      <li key={index}>
        {song.title}
      </li>
    );
  }

  render() {
    if (this.props.data.loading) return <div>Loading...</div>;

    return (
      <div className='container'>
        <div>
          {this.renderSongs()}
        </div>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
