import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading) return <div>Loading...</div>;

    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return {
      variables: {
        id: props.match.params.id
      }
    }
  }
})(SongDetail);
