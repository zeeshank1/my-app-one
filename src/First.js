import React from 'react';
import './First.css';

class First extends React.Component {
    render() {
        return (
            <div className='First-div'>
                Hello {this.props.name}
            </div>
        );
    }
}

export default First;