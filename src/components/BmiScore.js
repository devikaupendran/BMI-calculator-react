
function BmiScore({ bmiData, bmiType ,changeWeight}) {

    return (
        <div className="text-center shadow rouded p-4">
            <div className="mb-4"> Your BMI Score </div>
            <div className="row justify-content-md-center">
                <div className="fs-3 fw-bold alert fs-1 alert-primary col-sm-4"> {bmiData} </div>
            </div>

            <div className="fs-3 fw-bold text-primary"> {bmiType} </div>

            {changeWeight.type === "positive" && (<div className="fs-4"> "You need to lose <span className="fw-bold"> {changeWeight.w} kg"</span></div>) }
            {changeWeight.type === "negative" && (<div className="fs-4"> "It seems you may need to gain <span className="fw-bold"> {changeWeight.w} kg"</span></div>) }
            {changeWeight.type === "normal" && (<div className="fs-4">"Great news! Your weight is in a healthy range. Keep maintaining those good habits!" </div>) }
            
        </div>
    )
}

export default BmiScore
