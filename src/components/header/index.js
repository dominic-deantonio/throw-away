import './style.css';
import React from 'react';

class SearchField extends React.Component {
    state = {
        inputValue: '',
        disableClear: true,
    }

    clear = () => {
        this.setState({ inputValue: '' });
        this.props.runSearch('');        
    }

    doSearch = (event) => {
        const query = event.target.value;
        this.setState({ inputValue: query });
        this.props.runSearch(query);        
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <input value={this.state.inputValue} className='m-2' placeholder='Search cards' onChange={e => this.doSearch(e)}></input>
                <button disabled={this.state.inputValue.length < 1} className="btn btn-primary" onClick={this.clear}>Clear</button>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        const { learnCount, editCount, deleteCount } = this.props;
        return (
            <div className='sticky-top alert bg-light shadow'>
                <div className="d-flex justify-content-center">
                    <div className="alert alert-primary m-2">Learned: {learnCount} </div>
                    <div className="alert alert-warning m-2">Edited: {editCount} </div>
                    <div className="alert alert-danger m-2">Deleted: {deleteCount} </div>
                </div>
                <SearchField {...this.props}/>
            </div>
        );
    }
}



export default Header;