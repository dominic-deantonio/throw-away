import MyButton from "../button";

function MyCard(props) {
  const { title, text, imgUrl, creator, onDelete, onEdit, onLearnMore, index } = props;

  const isOwner = creator === 'nellysugu';

  return (
    <div className="card m-2 shadow-lg " style={{ width: "18rem" }}>
      <img className="card-img-top" src={imgUrl}  alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="d-flex justify-content-center">
          <MyButton btnText='Learn more' onClick={onLearnMore} />
          {isOwner && <MyButton btnText='Edit' onClick={onEdit}/>}
          {isOwner && <MyButton btnText='Delete' onClick={()=>onDelete(index)} />}
        </div>

      </div>
    </div>
  );
}

export default MyCard;