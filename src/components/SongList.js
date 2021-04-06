import React, { Component } from "react";
import { connect } from "react-redux";
class SongList extends Component {
  renderList() {
    return this.props.Songs.map((song) => {
      return (
        <div className="item" Key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
            <div className="content">{song.title}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}
const mapStateToProp = (state) => {
  return { sonng: state.songs };
};
export default connect(mapStateToProp)(SongList);
