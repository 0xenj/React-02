import React from 'react';

class AddButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleAdd}>
                Add water
            </button>
        )
    }
}

export default AddButton;