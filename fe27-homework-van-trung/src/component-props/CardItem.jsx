import "./CardItem.scss";
export const CardItem =(props)=> {
    return ( <div className="CardItem_Container">
        <p className="CardItem_number">{props.number}</p>
        <img src={props.images} className="CardItem_img" alt=""  />
        <div className="container">
        <p className="CardItem_title">{props.title}</p>
        <p className="CardItem_creator">By  <b>{props.creator} </b></p>
        <p className="CardItem_subTitle">{props.subTitle}</p>
        
        </div>
    </div> );
}

export default CardItem; 