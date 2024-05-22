import './card.css';
import ConfettiButton from '../Button/ConfettiButton.jsx';
function Card(props){
    return(
        <div className="card text-center">
            <img src={props.image} className="card-img-top rounded-circle w-50 align-self-center mt-3" alt="profile-picture"></img>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.job}</p>
                <ConfettiButton/>
            </div>
        </div>
    );
}

Card.defaultProps = {
    name: "Nome",
    job: "Lavoro",
    image: 'https://picsum.photos/200',
}

export default Card