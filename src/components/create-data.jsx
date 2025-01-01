import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer } from "react-toastify";
import DepositData from "./data";
import "./all.css"

const CreateData = () => {
    const [Data, setData] = useState({
        Name:"",
        Accountnumber:"",
        Amountdeposit:""
    })
    console.log("CreateData component rendered");
const [loading,setLoading]=useState(false)

    const [msg,setMsg] = useState("");

    const navigate = useNavigate();

const handlechange = (e) => {
    const value= e.target.value;
    const name = e.target.name;

    setData({
        ...Data,
        [name]: value
    })
    }

const APIURL ="https://6772fc6377a26d4701c44d00.mockapi.io/data/deposit"

    const handleSubmit = async (e) => {
         e.preventDefault()

         try{ setLoading(true)
         const res = await axios.post(APIURL,Data);

         if(res.status === 201){
            toast.success("Added successfully")
            navigate('/data')
         }
        }
         catch (error) {
            toast.error("Error Adding Data!");
         }finally { 
            setLoading (false);
         }
    };
    return(
        <>
        <ToastContainer/>
        <h2>Create Data</h2>
        <form onSubmit={handleSubmit}>
            {msg && (<h2>{msg}</h2>)}
            <div className="form-group">
                <label>Deposit Name</label>
                <input className="texts" type="text" name="Name" placeholder="Enter The Deposit Name" value={Data.Name} onChange={handlechange} />
            </div>
            <div className="form-group">
                <label>Account Number</label>
                <input className="texts" type="text" name="Accountnumber"  placeholder="Enter The Account Number" value={Data.Accountnumber} onChange={handlechange}/>
            </div>
            <div className="form-group">
                <label>Amount Deposit</label>
                <input className="texts"  type="text" name="Amountdeposit"  placeholder="Enter The Amount" value={Data.Amountdeposit} onChange={handlechange}/>
            </div>
            <div>
                <button className="submitbtn" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </div>
        </form>
        </>
    )
}
export default CreateData;