
function Card(props) {
     return(
        <>
      <div className="cards">
<div className="card">
<img src={props.imgsrc} className="card_img"></img>
<div className="card_info">
<span className="card-category">{props.title}</span>
<h3 className="card-title"></h3>
<a href={props.link} target="_blank">
    <button>watch now</button>
</a>
</div><div></div>
</>
)
}
export default Card;