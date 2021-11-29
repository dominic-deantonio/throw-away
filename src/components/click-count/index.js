import './style.css';

function ClickCount(props) {
    const { learnCount, editCount, deleteCount, runSearch } = props;
    return (
        <div className='sticky-top alert bg-light shadow'>
            <div className="d-flex justify-content-around">
                <div className="alert alert-primary">Learned: {learnCount} </div>
                <div className="alert alert-warning">Edited: {editCount} </div>
                <div className="alert alert-danger">Deleted: {deleteCount} </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <input className='m-2' id='search-field' placeholder='Search cards' onChange={doSearch}></input>
                <button id='clear-button' className="btn btn-primary" onClick={clearSearch}>Clear</button>
            </div>
        </div>
    );

    function clearSearch() {
        document.getElementById('search-field').value = '';
        doSearch();
    }

    function doSearch() {
        const query = document.getElementById('search-field').value;
        document.getElementById('clear-button').disabled = !(query.length > 0);
        runSearch(query);
    }
}

export default ClickCount;