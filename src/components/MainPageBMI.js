import BmiList from './BmiList';
import BmiScore from './BmiScore';
import Form from './Form';
import { useState } from "react"

function MainPageBMI() {

    let [bmiData, setBmiData] = useState("00");
    let [bmiType, setBmiType] = useState("Not Calculated")
    let [changeWeight, setChangeWeight] = useState({ w: "", type: "" }) //type is to show weight gain or loose

    //setting state for bmi list an its initial state is an object
    let [bmiRange, setBmiRange] = useState(
        {
            underWeight: { low: '' },
            normal: { low: '', high: '' },
            overWeight: { low: '', high: '' },
            obesityOne: { low: '', high: '' },
            obesityTwo: { low: '', high: '' },
            obecityThree: { high: '' }
        }
    )

    function getSubmittedData(weight, height) {
        let ourCalculatedBMIdata = calculateBMI(weight, height)
        setBmiData(ourCalculatedBMIdata) //passing our BMI data

        //checking our BMI weight type by calling the function in setState functn and passing data to state
        setBmiType(bmiTypeChecking(ourCalculatedBMIdata));

        //calling the function calculatedWeight
        const range =
        {
            underWeight: { low: calculatedWeight(18.5, height) },
            normal: { low: calculatedWeight(18.5, height), high: calculatedWeight(24.9, height) },
            overWeight: { low: calculatedWeight(25.5, height), high: calculatedWeight(29.9, height) },
            obesityOne: { low: calculatedWeight(30.5, height), high: calculatedWeight(34.9, height) },
            obesityTwo: { low: calculatedWeight(35.5, height), high: calculatedWeight(39.5, height) },
            obecityThree: { high: calculatedWeight(40, height) }
        }
        setBmiRange(range)
        setChangeWeight(checkingTheWeight(ourCalculatedBMIdata, weight, range))
    }
    //Function to calculate BMI 
    const calculateBMI = (weight, height) => (weight / (height * height)).toFixed(2) //to show only 2 decimal point
    let calculatedWeight = (ourCalculatedBMIdata, height) => (ourCalculatedBMIdata * height * height).toFixed(2)

    //function to find out if the user want to gain or lose the weight
    const checkingTheWeight =(ourCalculatedBMIdata,weight,range) => {
        let changeObject;
        if (ourCalculatedBMIdata > 24.9) { //our bmi is greater than 24.9 so its greater than normal weight 
            changeObject = {
                w: (weight - range.normal.high).toFixed(2),
                type: "positive"
            }
            return changeObject
        }
        else if (ourCalculatedBMIdata < 18.5) { //our bmi is less than 18.5 so its less than normal weight 
            changeObject = {
                w: (range.normal.low - weight).toFixed(2),
                type: "negative"
            }
            return changeObject
        }
        else {
            changeObject = { w: 0, type: "normal" }
            return changeObject
        }
    }
    //Function to calculate BMI 
    const bmiTypeChecking = (bmiData) => {
        if (bmiData < 18.5) {
            return "Under weight";
        }
        else if (bmiData > 18.5 && bmiData < 24.9) {
            return "Normal"
        }
        else if (bmiData > 25 && bmiData < 29.9) {
            return "Over weight"
        }
        else if (bmiData > 30 && bmiData < 34.9) {
            return "Obesity Class I "
        }
        else if (bmiData > 35 && bmiData < 39.9) {
            return "Obesity Class II "
        }
        else if (bmiData > 40) {
            return "Obesity Class III "
        }


    }
    return (
        <div className='container'>
            <div className="row justify-content-center mt-5 mx-2">
                <Form getSubmittedData={getSubmittedData} />
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-12 col-sm-6 mb-5">
                    <BmiScore bmiData={bmiData} bmiType={bmiType} changeWeight={changeWeight}/>
                </div>

                <div className="col-12 col-sm-6 ">
                    <BmiList bmiRange={bmiRange} bmiData={bmiData}  />
                </div>
            </div>
        </div>
    );
}

export default MainPageBMI;
