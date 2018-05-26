import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading) return <div>Loading...</div>;

    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate />
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
