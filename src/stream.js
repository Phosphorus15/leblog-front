import React from 'react';
import {load_posts, query_posts} from "./network";
import PageHeader from "./header";
import {Link} from "react-router-dom";

class SinglePostPage extends React.Component {

    state = {
        loaded: false,
        failed: false,
        post: null
    }

    componentDidMount() {
        const {pid} = this.props.match.params
        if (pid && pid.match(/^\d+$/))
            query_posts("id=" + pid).then(res => {
                if (res.data.length > 0) {
                    this.setState({post: res.data[0], loaded: true})
                } else {
                    this.setState({failed: true})
                }
            }).catch(() => {
                this.setState({failed: true})
            })
        else this.setState({failed: true})
    }

    renderInner() {
        if (this.state.loaded) {
            const post = this.state.post
            return <SinglePost id={post.id} poster={post.poster} data={post.data}
                               date={post.date}
                               title={post.title} showContent={true}/>
        } else return <div className="flipping-load" id="loading-text">Now loading...</div>
    }

    render() {
        return <div className="container">
            <PageHeader/>
            <main className="main">
                {this.renderInner()}
            </main>
        </div>
    }
}

class SinglePost extends React.Component {

    renderContent() {
        if (this.props.showContent)
            return <div className="post-content" dangerouslySetInnerHTML={{__html: this.props.data}}/>
        else
            return <Link className="more-link" to={"/p/" + this.props.id}>Read article</Link>
    }

    render() {
        return <article className="post" key={this.props.id}>
            <h1 className="post-title">
                <Link to={"/p/" + this.props.id}>
                    {this.props.title}
                </Link>
            </h1>
            <ul className="post-date">
                <li>
                    <Link to={"/u/" + this.props.poster} className="post-info-user">
                        {this.props.poster}
                    </Link>
                </li>
                <li>{new Date(this.props.date * 1000).toLocaleDateString()}</li>
            </ul>
            <div className="post-content">
                {this.renderContent()}
            </div>
        </article>;
    }
}

class UserPosts extends React.Component {

    render() {
        const {user} = this.props.match.params
        return (<div className="container">
            <PageHeader/>
            <main className="main">
                <PostBillboard user={user}/>
            </main>
        </div>)
    }

}

class PostBillboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            failed: false,
            posts: []
        }
        if(this.props.match) {
            const {user} = this.props.match.params
            this.user = user
        }
    }

    componentDidMount() {
        (this.user && this.user.length > 0 ? query_posts("user=" + this.user) : load_posts()).then(res => {
            this.setState(
                {
                    loaded: true,
                    posts: res.data
                }
            )
        }).catch(() => this.setState({failed: true}))
    }

    renderInner() {
        if (this.state.loaded) {
            return this.state.posts.map(post => <SinglePost id={post.id} poster={post.poster} data={post.data}
                                                            date={post.date}
                                                            title={post.title} showContent={false}/>)
        } else return <div className="flipping-load" id="loading-text">Now loading...</div>
    }

    render() {
        return (<section id="posts-billboard" className="posts">
            {this.renderInner()}
        </section>);
    }
}

export {PostBillboard, SinglePostPage, UserPosts}
