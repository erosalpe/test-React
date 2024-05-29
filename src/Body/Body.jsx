import React, { useState, useEffect } from 'react';
import './body.css';
import Card from '../Card/Card.jsx';
import FormCard from '../FormCard/FormCard.jsx';

function Body() {
    const [usersData, setUsersData] = useState([]);

    const [usersDataLength, setUsersDataLength] = useState();

    const addUsersDataLength = () => {
        setUsersDataLength(usersDataLength = usersData.length());
    }

    const addUser = (user) => {
        setUsersData([...usersData, user]);
      };

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                setUsersData(data);
            })
            .catch(error => console.error('Error loading JSON:', error));
    }, []);

    return (
        <div className="bodyBg">
            <div className="container py-5">
                <h4>Il Nostro Team:</h4>
                <div className="d-flex flex-wrap gap-4">
                    {usersData.map((element) => (
                        <Card
                            key={element.id}
                            id={element.id}
                            name={element.name}
                            job={element.job}
                            image={element.image}
                        />
                    ))}
                </div>

                <FormCard addUser={addUser} usersDataLength={addUsersDataLength}/>
            </div>
        </div>
    );
}

export default Body;
