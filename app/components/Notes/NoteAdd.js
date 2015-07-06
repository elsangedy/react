var React = require('react');

var NoteAdd = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  handleSubmit: function() {
    var newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    this.props.addNote(newNote);
  },
  render: function() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add New Note" />
        <span className="input-group-btn">
          <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Add</button>
        </span>
      </div>
    );
  }
});

module.exports = NoteAdd;
