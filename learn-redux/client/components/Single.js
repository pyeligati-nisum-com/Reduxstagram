import React from 'react';
import Photo from './Photo';
import Comments from './Comments'


const Single = React.createClass({
  render() {
    const { postid } = this.props.params;

    const i = this.props.posts.findIndex((post) => post.code === postid);
    console.log(i,postid,this.props)
    const post = this.props.posts[i];

    const postComments = this.props.comments[postid] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
