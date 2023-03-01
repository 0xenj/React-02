import React from 'react';

class RemoveButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleRemove}>
                Remove water
            </button>
        )
    }
}

export default RemoveButton;