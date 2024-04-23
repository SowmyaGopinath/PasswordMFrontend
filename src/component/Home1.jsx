import React from "react";
import AddIcon from '@mui/icons-material/Add';
import AddAppForm from './AddAppForm';
import AppCard1 from './AppCard1';
import {useSelector } from "react-redux";
import {Link} from 'react-router-dom';


function Home1(){
    const user = useSelector(store => store.user);
    return <div>
        <h4 className= "home-page-header">Welcome {user.username}
        <Link className='flex-end'to='/'>Home</Link>
        </h4>
        <AddAppForm />
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 row-cols-sm-3 cards-container">
                <div className="col mb-4 app-card">
                    <div className="card h-100">
                            <div className="card-body add-card">
                                <button data-bs-toggle="modal" data-bs-target="#addAppModal"><AddIcon/></button>
                            </div>
                    </div>
                </div>
                {user.apps && user.apps.map((app, index) => (<AppCard1 key={index} appName={app.name} appPassword={app.password} />))}
            </div>
        </div>
    </div>
}

export default Home1;