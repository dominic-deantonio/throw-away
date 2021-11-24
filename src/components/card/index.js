import MyButton from "../button";

function MyCard(props) {
  const { title, text, imgUrl, creator, handleDefaultBtnClick } = props;

  const isOwner = creator === 'nellysugu';

  return (
    <div className="card m-2 shadow-lg " style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={imgUrl}
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="d-flex justify-content-center">
          <MyButton btnText='Learn more' onClick={handleDefaultBtnClick} />
          {isOwner && <MyButton btnText='Edit' />}
          {isOwner && <MyButton btnText='Delete' />}
        </div>

      </div>
    </div>
  );
}

export default MyCard;