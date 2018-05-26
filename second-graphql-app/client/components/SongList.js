import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';

class SongList extends Component {
  onSongDelete(id) {
    const isYes = confirm('Are you sure to delete?');
    
    if(isYes) {
      this.props.mutate({variables: { id }})
        .then(() => {
          // why not use refetchQueries in SongCreate? it is possible to use refetchQueries here.
          // this props.data(song list query) is associated with this SongList component.
          // in SongCreate song list query is not linked, so then there comes to refetchQueries
          // more specifically, in SongCreate we cannot use this.props.data.refetch() to
          // fetch a list of songs
          this.props.data.refetch();
        })
    }
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }, index) =>
      <li key={index} className='collection-item'>
        <Link to={`/songs/${id}`}>{title}</Link>
        <i
          className='material-icons'
          onClick={() => this.onSongDelete(id)}
        >
          delete
        </i>
      </li>
    );
  }

  render() {
    if (this.props.data.loading) return <div>Loading...</div>;

    return (
      <div>
        <ul className='collection'>
          {this.renderSongs()}
        </ul>
        <Link to='/songs/new' className='btn-floating btn-large red right' >
          <i className='material-icons'>add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);
