import { useState } from "react";
import { useParams, useRouteMatch, useHistory, Switch, Route } from "react-router-dom";
import NameChange from "./states/NameChange";


function States(){
    // const props = useParams()
    const history = useHistory
    const { url, path } = useRouteMatch()
    const [name, setName] = useState()

    function showNameChange(){
        history.push(`${path}/${name}`)
    }

    return(
        <div className="text-center mt-5">
            {/* <p className="fs-3">
                Nama saya adalah <span className="fw-bold">{name}</span>
            </p>
            <button type="button" class="btn btn-primary" onClick={changeName}>
                Change name
            </button> */}
            <h2>Enter name: </h2>
            <input type="text" name="personName" onChange={(e)=>setName(e.target.value)} />
            <button type="button" class="btn btn-primary" onClick={showNameChange}>Show me</button>

            <Switch>
                <Route exact path={`${path}/:name`}><NameChange /></Route>
            </Switch>
        </div>
    )
}

export default States