import './style.css';

function ClickCount(props){
    const {count} = props;
    return(<div className="alert alert-success sticky-top counter-container shadow">Clicked: {count} times</div>);
}

export default ClickCount;