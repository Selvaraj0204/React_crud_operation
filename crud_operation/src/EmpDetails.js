import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
    const { empid } = useParams();
    const [empdata, empdatachange] = useState({});


    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div>
            <div className="card" style={{backgroundColor:"#424242",color:"white", textAlign:"left"}}>
                <div className="card-title">
                    <h3 style={{marginLeft:"15px"}}><u>Employee detail</u></h3>
                </div>
                <div className="card-body" style={{marginTop:"-26px"}}>
            {empdata &&
                <div><h5>The employee name is: {empdata.name} and the id is: {empdata.id}</h5>
                <h3 style={{marginTop:"20px",marginBottom:"10px"}}><u>Contact Details</u></h3>
                <h5>Email id is: {empdata.email}</h5>
                <h5>Phone number is: {empdata.phone}</h5>
                <Link className="btn btn-danger" style={{marginLeft:"-3px", marginTop:'3px'}} to="/">Back to Home</Link>
                </div>
            }
            </div>
            </div>
        </div>
    );
}
export default EmpDetails;