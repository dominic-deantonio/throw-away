import './style.css';

function MyButton(props) {

    const {btnText, onClick} = props;
    const buttonStyle = btnText === 'Edit' ? 'btn-warning' : btnText === 'Delete' ? 'btn-danger' : "btn-primary";
    return (
        <button onClick={onClick} className={`btn shadow my-button ${buttonStyle}`}>
            {btnText}
        </button>
        );
}

export default MyButton;