import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast , ToastContainer } from "react-toastify";
import "./all.css"


const DepositData =()=>{
const [data, setData] = useState([]);
const [deposit, setDeposit] = useState([]);
const [loading, setLoading] = useState(false);
const {errorMsg, setErrorMsg}=useState("");
const navigate=useNavigate();

console.log("DepositData component rendered");

const APIURL = "https://6772fc6377a26d4701c44d00.mockapi.io/data/deposit";

const   getDepositData = async () => {
    setLoading(true);
    try {   
        const res = await axios.get(APIURL);
    if (res.status === 200) {
        setLoading(false);
        setDeposit(res.data);
        setErrorMsg("");
    }
}   catch(error){
    const{DepositData}=error.response ? error.response.data : "Network error setErrorMsg ";
    setLoading(false);
}
}

useEffect(()=>{
    getDepositData();
},[])
if (loading) {
    return (
    <div className="loader-container">
          <div className="loader"></div>
    </div>
    )
}
return(
 <>
 <h2>Deposit Data List</h2>
 {/* {errorMsg && <h3>{errorMsg}</h3>}
 {DepositData && DepositData.length>0 &&  */}
 <button className="AND-btn" onClick={()=> navigate ("/create-data")}> Add New Data</button>
 <table border={1}>
    <thead>
        <tr>
            <th>Deposit ID</th>
            <th>Deposit Name</th>
            <th>Account Name</th>
            <th>Amount</th>
        </tr>
    </thead>
    <tbody>
        {deposit && deposit.map((item, index) => {
            return(
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.Accountnumber}</td>
                <td>{item.Amountdeposit}</td>
                </tr>

            );
        })
        }
    </tbody>
 </table>

 </>
);
};
export default DepositData;