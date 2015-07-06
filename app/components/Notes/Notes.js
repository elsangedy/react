import React from 'react';
import NotesList from './NotesList';
import NoteAdd from './NoteAdd';

class Notes extends React.Component {
  render() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <NoteAdd username={this.props.username} noteAdd={this.props.noteAdd} />
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
};

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  noteAdd: React.PropTypes.func.isRequired
};

export default Notes;
