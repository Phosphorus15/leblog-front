import React from 'react';

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
