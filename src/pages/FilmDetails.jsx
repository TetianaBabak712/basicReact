import { Link, useParams } from "react-router-dom";

function FilmDetails() {
    const {filmId} = useParams();
    return (
     <>
        <h1>this is film with id : {filmId}</h1>
        <Link to={"/home"}>Home</Link>
     </>
    )
}


export default FilmDetails; 