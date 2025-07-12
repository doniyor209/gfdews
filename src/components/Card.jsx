import './card.css'

function Card(props) {
  return (
    <div>
        <div className="card">
        <img src={props.img} alt="" />
        <div>
            <h2>{props.title}</h2>
            <span>{props.aftor}</span>
            <p>{props.desc}</p>
        </div>
    </div>

    </div>
  )
}

export default Card