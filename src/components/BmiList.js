import React from 'react'

function BmiList({bmiRange,bmiData }) {
     
     return (
          <div className="text-center shadow-sm rounded ">
               <ul className="list-group">
                    <li className="list-group-item">
                         <div className="row">
                              <div className="col-4 fw-bold"> Type </div>
                              <div className="col-4 fw-bold"> BMI </div>
                              <div className="col-4 fw-bold"> Weight </div>
                         </div>
                    </li>
                    <li className= { bmiData < 18.5 ? "border border-primary border-3 list-group-item" : "list-group-item"}>
                         <div className="row">
                              <div className="col-4"> Underweight </div>
                              <div className="col-4"> &lt; 18.5 </div>
                              <div className="col-4">  &lt; {bmiRange.underWeight.low} kg </div>
                         </div>
                    </li>
                    <li className={ (bmiData > 18.5) && (bmiData < 24.9)? "border border-success border-3 list-group-item" : "list-group-item"}>
                         <div className="row">
                              <div className="col-4"> Normal </div>
                              <div className="col-4"> 18.5 - 24.9 </div>
                              <div className="col-4"> {`${bmiRange.normal.low} kg ${bmiRange.normal.high} kg `} </div>
                         </div>
                    </li>
                    <li className={ (bmiData > 25) && (bmiData < 29.9)? "border border-warning border-3 list-group-item" : "list-group-item"}>
                         <div className="row">
                              <div className="col-4"> Over weight </div>
                              <div className="col-4"> 25 - 29.9 </div>
                              <div className="col-4"> {`${bmiRange.overWeight.low} kg ${bmiRange.overWeight.high} kg `} </div>
                         </div>
                    </li>
                    <li className={ (bmiData > 30) && (bmiData < 34.9)? "border border-danger border-3 list-group-item" : "list-group-item"}>
                         <div className="row">
                              <div className="col-4">Obesity Class I </div>
                              <div className="col-4"> 30 - 34.9 </div>
                              <div className="col-4"> {`${bmiRange.obesityOne.low} kg ${bmiRange.obesityOne.high} kg `} </div>
                         </div>
                    </li>
                    <li className={ (bmiData > 35) && (bmiData < 39.9)? "border border-danger border-3 list-group-item" : "list-group-item"}>
                         <div className="row">
                              <div className="col-4">Obesity Class II </div>
                              <div className="col-4"> 35 - 39.9 </div>
                              <div className="col-4"> {`${bmiRange.obesityTwo.low} kg ${bmiRange.obesityTwo.high} kg `} </div>
                         </div>
                    </li>
                    <li className={ (bmiData > 41) ? "border border-danger border-3 list-group-item" : "list-group-item"}>
                         <div className="row">
                              <div className="col-4">Obesity Class III </div>
                              <div className="col-4"> &gt; 40 </div>
                              <div className="col-4"> &gt; {` ${bmiRange.obecityThree.high} kg `} </div>
                         </div>
                    </li>
               </ul>
          </div>
     )
}

export default BmiList
