import { useState } from "react"

const Form = ({getSubmittedData}) => {
    let [weight, setWeight] = useState("");
    let [height, setHeight] = useState("")
    let [alert, setAlert] = useState(false)

    function onSumbitHandler(event) {
        event.preventDefault();
        if (isNaN(weight) || isNaN(height)) {
            console.log("Invalid input");
            setAlert(true)
        }
        else {
            getSubmittedData(weight,height);
            setAlert(false)
        }
    }
    return (
            <div className="col-sm-4 shadow rounded px-5">
                <h1 className="text-center pt-3 text-secondary h2"> BMI Calculator </h1>
                <form onSubmit={onSumbitHandler}>
                    <div className="row">
                        <div className="col col-sm-6">
                            <div className="my-3">
                                <label className="form-label"> Weight(kg) : </label>
                                <input type="text" value={weight} onChange={(event) => setWeight(event.target.value)} className="form-control" required />
                            </div>
                        </div>
                        <div className="col col-sm-6">
                            <div className="my-3">
                                <label className="form-label"> Height(m) : </label>
                                <input type="text" value={height} onChange={(event) => setHeight(event.target.value)} className="form-control" required />
                            </div>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary my-3" value="Get BMI" />
                </form>

                {alert && <div className="alert alert-danger" role="alert"> The data provided seems to be invalid. Please check and enter the correct information. </div>}
            </div>
    )
}

export default Form
