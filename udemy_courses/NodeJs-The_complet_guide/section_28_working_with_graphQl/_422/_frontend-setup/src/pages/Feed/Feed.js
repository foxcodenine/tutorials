import React, { Component, Fragment } from 'react';
// import openSocket from 'socket.io-client';



import Post from '../../components/Feed/Post/Post';
import Button from '../../components/Button/Button';
import FeedEdit from '../../components/Feed/FeedEdit/FeedEdit';
import Input from '../../components/Form/Input/Input';
import Paginator from '../../components/Paginator/Paginator';
import Loader from '../../components/Loader/Loader';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import './Feed.css';

class Feed extends Component {
  state = {
    isEditing: false,
    posts: [],
    totalPosts: 0,
    editPost: null,
    status: '',
    postPage: 1,
    postsLoading: true,
    editLoading: false
  };

  componentDidMount() {
    const url = process.env.REACT_APP_BASE_URL + '/user/status/' + this.props.userId;


    fetch(url, {
      headers: { Authorization: 'Bearer ' + this.props.token }
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch user status.');
        }
        return res.json();
      })
      .then(resData => {
        this.setState({ status: resData.status });
      })
      .catch(this.catchError);

    this.loadPosts();



    // const socket = openSocket(process.env.REACT_APP_BASE_URL);
		// socket.on('posts', data => {
		// 	if (data.action === 'create') {
		// 		this.addPost(data.post);
		// 		console.log('post has been create');

		// 	} else if (data.action === 'update') {
    //     this.updatePost(data.post);

    //   } else if (data.action === 'delete') {
    //     this.loadPosts();
    //   }
		// });

  }

  // -------------------------------------------------------------------
  /*
  addPost = post => {
    this.setState(prevState => {
      const updatedPosts = [...prevState.posts];
      if (prevState.postPage === 1) {
        if (prevState.posts.length >= 2) {
          updatedPosts.pop();
        }
        updatedPosts.unshift(post);
      }
      return {
        posts: updatedPosts,
        totalPosts: prevState.totalPosts + 1
      };
    });
  }

  // -------------------------------------------------------------------

  updatePost = post => {
    this.setState(prevState => {
      const updatedPosts = [...prevState.posts];
      const updatedPostIndex = updatedPosts.findIndex(p => p._id === post._id);
      if (updatedPostIndex > -1) {
        updatedPosts[updatedPostIndex] = post;
      }
      return {
        posts: updatedPosts
      };
    });
  };
  */
  // -------------------------------------------------------------------

  loadPosts = direction => {
    if (direction) {
      this.setState({ postsLoading: true, posts: [] });
    }
    let page = this.state.postPage;
    if (direction === 'next') {
      page++;
      this.setState({ postPage: page });
    }
    if (direction === 'previous') {
      page--;
      this.setState({ postPage: page });
    }
    // eslint-disable-next-line
    fetch(process.env.REACT_APP_BASE_URL + '/feed/posts' + '?page=' + page, {
      headers: { Authorization: 'Bearer ' + this.props.token }
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch posts.');
        }
        return res.json();
      })
      .then(resData => {
        this.setState({
          // posts: resData.posts,
          posts: resData.posts.map(post => {
            return {
              ...post,
              imagePath: post.imageUrl
            }
          }),
          totalPosts: resData.totalItems,
          postsLoading: false
        });
      })
      .catch(this.catchError);
  };
  // 0 -----------------------------------------------------------------
  statusUpdateHandler = event => {
    event.preventDefault();

    const status = document.querySelector('input').value;
    const url = process.env.REACT_APP_BASE_URL + '/user/status/' + this.props.userId;

    const formData = new FormData();
    formData.append('status', status);

    fetch(url, {
      method: 'PUT',
      body: formData,
      headers: { Authorization: 'Bearer ' + this.props.token }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Can't update status!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(this.catchError);
  };
  // 0 -----------------------------------------------------------------

  newPostHandler = () => {
    this.setState({ isEditing: true });
  };

  startEditPostHandler = postId => {
    this.setState(prevState => {
      const loadedPost = { ...prevState.posts.find(p => p._id === postId) };

      return {
        isEditing: true,
        editPost: loadedPost
      };
    });
  };

  cancelEditHandler = () => {
    this.setState({ isEditing: false, editPost: null });
  };
  // -------------------------------------------------------------------
  finishEditHandler = postData => {
    this.setState({
      editLoading: true
    });

    // Set up data (with image!)
    let url = process.env.REACT_APP_BASE_URL + '/feed/posts';

    let method = 'POST';

    // let body = JSON.stringify({
    //   title: postData.title,
    //   content: postData.content,
    // });

    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('image', postData.image);


    // let headers = { "Content-Type": "application/json", };
    
    /*
    if (this.state.editPost) {
      url = process.env.REACT_APP_BASE_URL + '/feed/post/' + this.state.editPost._id;
      method = 'PUT';
    }
    fetch(url, {
      method,
      body: formData,
      headers: { Authorization: 'Bearer ' + this.props.token }
    })
    */

    let graphqlQuery = {
      query: `
        mutation {
          createPost(postInput: {
            title: "${postData.title}",
            content: "${postData.content}",
            imageUrl: "some url"
          }) {
            _id
            title
            content
            imageUrl
            creator {
              name
            }
            createdAt
          }
        }`
    };
    console.log(123456)
    console.log(this.props.token)

    fetch(process.env.REACT_APP_BASE_URL + '/graphql', {
      method: 'POST',
      body: JSON.stringify(graphqlQuery),
      headers: {
        'Authorization': `Bearer ${this.props.token}`,
        'Content-Type': 'application/json'
      }
    })


      .then(res => {
        // if (res.status !== 200 && res.status !== 201) {
        //   throw new Error('Creating or editing a post failed!');
        // }
        return res.json();
      })
      .then(resData => {
        if (resData.errors && resData.errors[0].status == 401) {
          throw new Error(
              resData.errors[0].message
            );
        }
        if (resData.errors) {
          console.log(resData.errors)
          throw new Error(
              "User login failed"
            );
        }
        console.log(resData);
        const post = {
          _id: resData.post._id,
          title: resData.post.title,
          content: resData.post.content,
          creator: resData.post.creator,
          createdAt: resData.post.createdAt
        };
  
        this.setState(prevState => {
          // let updatedPosts = [...prevState.posts];
          // if (prevState.editPost) {
          //   const postIndex = prevState.posts.findIndex(
          //     p => p._id === prevState.editPost._id
          //   );
          //   updatedPosts[postIndex] = post;
          // } 
					// else if (prevState.posts.length < 2) {
          //   updatedPosts = prevState.posts.concat(post);
          // }
          return {
            // posts: updatedPosts,
            isEditing: false,
            editPost: null,
            editLoading: false
          };
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isEditing: false,
          editPost: null,
          editLoading: false,
          error: err
        });
      });
  };

  statusInputChangeHandler = (input, value) => {
    this.setState({ status: value });
  };

  // -------------------------------------------------------------------

  deletePostHandler = postId => {

    
    this.setState({ postsLoading: true });
    const url = process.env.REACT_APP_BASE_URL + '/feed/post/' + postId;

    fetch(url, {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + this.props.token }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Deleting a post failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.loadPosts();
        // this.setState(prevState => {
        //   const updatedPosts = prevState.posts.filter(p => p._id !== postId);
        //   return { posts: updatedPosts, postsLoading: false };
        // });
      })
      .catch(err => {
        console.log(err);
        this.setState({ postsLoading: false });
      });
  };

  // -------------------------------------------------------------------

  errorHandler = () => {
    this.setState({ error: null });
  };

  catchError = error => {
    this.setState({ error: error });
  };

  render() {
    return (
      <Fragment>
        <ErrorHandler error={this.state.error} onHandle={this.errorHandler} />
        <FeedEdit
          editing={this.state.isEditing}
          selectedPost={this.state.editPost}
          loading={this.state.editLoading}
          onCancelEdit={this.cancelEditHandler}
          onFinishEdit={this.finishEditHandler}
        />
        <section className="feed__status">
          <form onSubmit={this.statusUpdateHandler}>
            <Input
              type="text"
              placeholder="Your status"
              control="input"
              onChange={this.statusInputChangeHandler}
              value={this.state.status}
            />
            <Button mode="flat" type="submit">
              Update
            </Button>
          </form>
        </section>
        <section className="feed__control">
          <Button mode="raised" design="accent" onClick={this.newPostHandler}>
            New Post
          </Button>
        </section>
        <section className="feed">
          {this.state.postsLoading && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Loader />
            </div>
          )}
          {this.state.posts.length <= 0 && !this.state.postsLoading ? (
            <p style={{ textAlign: 'center' }}>No posts found.</p>
          ) : null}
          {!this.state.postsLoading && (
            <Paginator
              onPrevious={this.loadPosts.bind(this, 'previous')}
              onNext={this.loadPosts.bind(this, 'next')}
              lastPage={Math.ceil(this.state.totalPosts / 2)}
              currentPage={this.state.postPage}
            >
              {this.state.posts.map(post => (
                <Post
                  key={post._id}
                  id={post._id}
                  author={post.creator.name}
                  date={new Date(post.createdAt).toLocaleDateString('en-US')}
                  title={post.title}
                  image={post.imageUrl}
                  content={post.content}
                  onStartEdit={this.startEditPostHandler.bind(this, post._id)}
                  onDelete={this.deletePostHandler.bind(this, post._id)}
                />
              ))}
            </Paginator>
          )}
        </section>
      </Fragment>
    );
  }
}

export default Feed;
