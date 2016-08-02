import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
    renderComment (comment,i){
      return(
        <div className="comment" key={i}>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postid, i)}>&times;</button>
        </div>
      )
  },
  handleSubmit(e){
    e.preventDefault();
    const { postid } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postid, author, comment);
    this.refs.commentForm.reset();
  },
  render() {
      const { postComments} = this.props;
      console.log(postComments)
    return (
      <div className="comment">
          {postComments.map(this.renderComment)}
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="author" placeholder="author"/>
            <input type="text" ref="comment" placeholder="comment"/>
            <input type="submit" hidden />
          </form>
      </div>
    )
  }
});

export default Photo;
