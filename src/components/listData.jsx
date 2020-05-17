import React, { Component } from "react";
import { postDataJson } from "./../services/fakeDataService.js";

class ListData extends Component {
  state = {
    postList: postDataJson,
  };

  deletePost = (post) => {
    const postList = this.state.postList.filter((p) => p.id !== post.id);
    this.setState({
      postList,
    });
  };

  render() {
    const { postList } = this.state;
    return (
      <React.Fragment>
        <h4>Post List</h4>
        <br />

        {postList.length === 0 ? (
          <p>No post in database</p>
        ) : (
          <React.Fragment>
            <p>Showing {postList.length} post from database.</p>
            <table className="table">
              <thead>
                <tr>
                  <th>Post ID</th>
                  <th>Post Title</th>
                  <th>Post Body</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {postList.map((post) => {
                  return (
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                      <td>
                        <button
                          onClick={() => this.deletePost(post)}
                          className="btn btn-sm btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default ListData;
