import './card.css';
import ConfettiButton from '../Button/ConfettiButton.jsx';
import { useState } from 'react';
function Card(props){

    const [points, setPoints] = useState(0);

    const incrementPoints = () =>{
        setPoints(points + 1);
    }

    const decrementPoints = () =>{
        if(points > 0){
            setPoints(points - 1);
        }
    }

    return(
        <div className="card text-center">
            <img src={props.image} className="card-img-top rounded-circle w-50 align-self-center mt-3" alt="profile-picture"></img>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.job}</p>
                <p>Punti totali: {points}</p>
                <div className="d-flex align-items-center justify-content-center gap-3 pb-3">
                    <button onClick={() => incrementPoints()} className="btn btn-success px-3 fs-4">+</button>
                    <button onClick={() => decrementPoints()} className="btn btn-danger px-3 fs-4">-</button>
                </div>
                    
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