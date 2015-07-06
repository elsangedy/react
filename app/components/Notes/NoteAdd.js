import React from 'react';

class NoteAdd extends React.Component {
  handleSubmit() {
    var newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    this.props.noteAdd(newNote);
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add New Note" />
        <span className="input-group-btn">
          <button type="button" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Add Note</button>
        </span>
      </div>
    )
  }
};

NoteAdd.propTypes = {
  username: React.PropTypes.string.isRequired,
  noteAdd: React.PropTypes.func.isRequired
};

export default NoteAdd;
