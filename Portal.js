import React from "react";
import ReactDOM from "react-dom";
const Portal = props => {
  const { showData } = props;
  console.log("in portal =====>>>>>>", showData);
  return ReactDOM.createPortal(
    <div
      style={{
        backgroundColor: "#D3D3D3",
        alignItems: "center",
        paddingLeft: "20px",
        height: "auto",
        width: "30%",
        paddingRight: "20px",
        alignItems: "center",
        marginTop: "100px",
        marginLeft: "350px",
        justifyContent: "center"
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Results<i className="fa fa-times"></i>
      </h1>
      <p style={{ color: "black" }}>
        {showData.map(data => (
          <div style={{ display: "flex" }}>
            <h5>{data.ques}</h5>
            <h5> = </h5>
            <h5>{data.answer}</h5>
          </div>
        ))}
      </p>

      <hr></hr>
      <button
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          width: "50px",
          height: "30px",
          backgroundColor: "red",
          border: "2px solid red",
          borderRadius: "20px"
        }}
        onClick={props.onClose}
      >
        close
      </button>
      <br></br>
      <br></br>
      <br></br>
    </div>,
    document.getElementById("element-root")
  );
};
export default Portal;
