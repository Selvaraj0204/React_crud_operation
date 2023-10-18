import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate=useNavigate();

    const LoadDetail=(id)=>{
        navigate("/employee/details/"+id);
    }
    const LoadEdit=(id)=>{
        navigate("/employee/edit/"+id);
    }
    const RemoveFunction=(id)=>{
        if(window.confirm("do you want to remove?")){
            fetch("http://localhost:8000/employee/"+id,{
        method:"DELETE"
    }).then((res)=>{
        alert("Removed successfully...");
        window.location.reload(); 
    }).catch((err)=>{
        console.log(err.message);
    })
        }
    }



    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])
    return (
        <div className="container">
            <div className="card" style={{backgroundColor:"#424242"}}>
                <div className="card-title">
                    <h3 style={{marginTop:"20px",marginBottom:"-40px",color:"white"}}>Employee List</h3>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" style={{marginBottom:"15px"}} className="btn btn-success">Add new (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success" style={{marginRight:"5px"}}>Edit</a>
                                            <a onClick={()=>{RemoveFunction(item.id)}} className="btn btn-danger" style={{marginRight:"5px"}}>Remove</a>
                                            <a onClick={()=>{LoadDetail(item.id)}} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;