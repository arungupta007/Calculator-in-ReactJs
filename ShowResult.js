// import React from "react";
// import Calculator from "./Calculator";


// const ShowResult1 = props =>{
//     const ShowResult = (props) => {
//         var { showData,showDataMore,backToCalculator } = props;
//         console.log("in ShowResult=====>>>>", showData,showDataMore);
//       backToCalculator = ()=> {
//          console.log("hi in back");
//              this.setState({
//                 sResult:false
//              })
//          }
//         return (
//               showData.map(data => <div
//             style={{
//               backgroundColor: "pink",
//               alignItems: "center",
//               paddingLeft: "20px",
//               paddingRight: "20px",
//               width:"50%"
//             }}>
              
//               <p>{data.ques}::{data.answer}</p>
//              </div> )
          
//         )
//       };
//     return(<div>
//         <ShowResult/>
//         <button style={{marginTop:"30px"}} onClick={() =>props.backToCalculator}>close</button>
//     </div>)
// }
// export default ShowResult1;
