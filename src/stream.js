import React from 'react';

class SinglePost extends React.Component {
    render() {
        return <article className="post">
            <h1 className="post-title">
                <a href={"/p/" + this.props.id}>
                    {this.props.title}
                </a>
            </h1>
            <ul className="post-date">
                <li>
                    <a href={"/u/" + this.props.poster} className="post-info-user">
                        {this.props.poster}
                    </a>
                </li>
                <li>{new Date(this.props.date * 1000).toLocaleDateString()}</li>
            </ul>
            <div className="post-content">
                <a className="more-link" href={"/p/" + this.props.id}>Read article</a>
            </div>
        </article>;
    }
}

class PostBillboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    renderInner() {
        if (this.state.loaded) {
            return <div/>
        } else return <div className="flipping-load" id="loading-text">Now loading...</div>
    }

    render() {
        return (<section id="posts-billboard" className="posts">
            {this.renderInner()}
        </section>);
    }
}

export default PostBillboard
