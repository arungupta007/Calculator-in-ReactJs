import React, { Component } from "react";
import Input from "../Calculator1/Input";
import "./styles.css";
import Button from "./Button";
import Portal from "./Portal";
import CircularButton from "./circularButton";
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      btn1: "Del",btn2: "AC",btn3: "Res.", btn4: "/",btn5: "7", btn6: "8",
      btn7: "9", btn8: "*", btn9: "4", btn10: "5", btn11: "6",btn12: "-",
      btn13: "1",  btn14: "2",btn15: "3", btn16: "+", btn17: "0",
      btn18: ".",btn19: "=", displayValue: "", question: "", answer: "",
      dot: 1, historyArray: [],flag: 0,sResult: false,toggle: true
    };
  }

  clearData = () => {
    const { dot, flag } = this.state;
    this.setState({ question: "", dot: 1, flag: 0 });
  };

  showData = val => {
    var { question, dot, flag, zeroVal } = this.state;
    console.log(":data1====>>>>", this.state.question);
    var n = question.startsWith(0);
    if(n){
      var res = question.slice(1, question.length);
      this.setState({
        question:res,
        dot:1
      })
    }
    else if(
    question[question.lastIndexOf("+")+1]==0||
    question[question.lastIndexOf("-")+1]==0||
    question[question.lastIndexOf("*")+1]==0||
    question[question.lastIndexOf("/")+1]==0
    ){
      var pluse=question.slice(0,question.lastIndexOf("+")+1);
      var minus=question.slice(0,question.lastIndexOf("-")+1);
      var multi=question.slice(0,question.lastIndexOf("*")+1);
      var divide=question.slice(0,question.lastIndexOf("/")+1);
      this.setState({
        question:pluse||minus||multi||divide
      })
    }else if(val==="."){
      this.setState({
        dot:0
      })

    }
    else{
    this.setState({
      question: (question += val),
      flag: 0,
    });
}
  }
  result = () => {
    const {dot,flag, question, historyArray } = this.state;
    var explen = question.length-1;
    console.log("length"+question.length+"len"+explen);
    if (
      explen == "+" ||
      explen == "-" ||
      explen == "*" ||
      explen == "/"
    ) {
      alert("please remove operators at ends...");
    } else if (explen === -1) {
      alert("please enter some expression");
    }  else if (question[explen]=="+" ||question[explen]=="-" || question[explen]=="*"|| question[explen]=="/" || question[explen]==".") {
      alert("please enter valid expression");
    }else if (explen == 0) {
      alert("please enter some expression");
    } else {
      var ans = "";
      ans = eval(this.state.question);
      
      const ans2 = ans.toString();
      console.log("-----In Result>>>>>>", question + ":" + ans2);
      const tempArray = [...historyArray];
      tempArray.push({
        ques: question,
        answer: ans2,
      });
       
      this.setState(
        {
          question: (this.state.question = ans2),
          flag: 0,
          historyArray: tempArray,
          dot:0
        },
        () => {
          console.log(this.state.historyArray);
        }
      );
    }
  };

  portal = props => {
    var { historyArray } = this.state;
    console.log("--------portal>>>>>>>", historyArray);
    this.setState({
      sResult: true
    });
  };

  portalSecond = props => {
    var { historyArray } = this.state;
    console.log("--------in showResult>>>>>>>", historyArray);
    this.setState({
      sResult: true
    });
  };

  numbersOnly = event => {
    console.log(event.keyCode);
    const { question, historyArray } = this.state;
    const { dot, flag } = this.state;

    if (
      event.keyCode === 48 ||
      event.keyCode === 49 ||
      event.keyCode === 50 ||
      event.keyCode === 51 ||
      event.keyCode === 52 ||
      event.keyCode === 53 ||
      event.keyCode === 54 ||
      event.keyCode === 55 ||
      event.keyCode === 56 ||
      event.keyCode === 57
    ) {
      this.setState({
        question: (this.state.question += String.fromCharCode(event.keyCode))
      });
    } else if (event.keyCode === 46) {
      this.setState({
        question: "",
        dot: !dot,
        flag: 0
      });
    } else if (event.keyCode === 187) {
      this.setState({
        question: (this.state.question += "+")
      });
    } else if (event.keyCode === 189) {
      this.setState({
        ques: (this.state.question += "-")
      });
    } else if (event.keyCode === 191) {
      this.setState({
        ques: (this.state.question += "/")
      });
    } else if (event.keyCode === 8) {
      this.setState({
        question: this.state.question.substring(0, question.length - 1),
        dot: !dot,
        flag: 0
      });
    } else if (event.keyCode === 13) {
      var ans = "";
      ans = eval(this.state.question);
      const ans2 = ans.toString();
      console.log("-----In Result>>>>>>", question + ":" + ans2);
      const tempArray = [...historyArray];
      tempArray.push({
        ques: question,
        answer: ans2
      });

      this.setState({
        question: (this.state.question = ans2),
        dot: 0,
        flag: 0,
        historyArray: tempArray
      });
    } else {
      this.setState({
        question: this.state.question + ""
      });
    }
  };

  portalClose = () => {
    this.setState({
      sResult: false
    });
  };

  Toggle = () => {
    this.setState({
      toggle: this.state.toggle ? false : true
    });
  };

  backToCalculator = props => {
    this.setState({
      sResult: false
    });
  };

  deleteByOneDigit = () => {
    var { question, dot, flag } = this.state;
    console.log("I am in delete", question);
    this.setState({
      question: this.state.question.substring(0, question.length - 1),
      dot: 1,
      flag: 0
    });
  };

  operator = val => {
    var { question, dot, flag} = this.state;
    console.log("in operator"+dot)
    if (flag == 0) {
      if (question !== "" || val == "-") {
        if (question.lastIndexOf("+") || question.lastIndexOf("-")) {
          this.setState({
            question: (this.state.question += val),
            dot: 1,
            flag: 1,
          });
        }
      }
    }
  };

  dotOperator = val => {
    var { question, dot, flag } = this.state;
    if (
      val === "+" ||
      val === "-" ||
      val === "*" ||
      val === "/" ||
      val === "." ||
      val === " " 
    ) {
      if (dot) {
        this.setState({
          question: question + val,
          dot: !dot,
          flag: 0
        });
      }
    }
  };

  render() {
    const { sResult, toggle } = this.state;
    if (toggle) {
      return sResult ? (
        <Portal showData={this.state.historyArray} onClose={this.portalClose} />
      ) : (
        <div className="container">
          <CircularButton Toggle={this.Toggle} />
          <div>
            <Input
              value={this.state.question}
              value1={this.value}
              numbersOnly={this.numbersOnly}
            />
          </div>
          <div style={{ flex: "0 1 100%" }}>
            <div style={{ display: "flex", flex: "0 1 100%" }}>
              <Button
                className={"btnf"}
                btnValue={this.state.btn1}
                showData={this.deleteByOneDigit}
              />

              <Button
                className={"btnf"}
                btnValue={this.state.btn2}
                showData={this.clearData}
                numbersOnly={this.numbersOnly}
              />

              <Button
                className={"btnf"}
                btnValue={this.state.btn3}
                showData={this.portal}
                showDataMore={this.portalSecond}
              />

              <Button
                className={"btnm"}
                btnValue={this.state.btn4}
                showData={this.operator}
                operatorByKeyboard={this.operatorByKeyboard}
              />
            </div>

            <div style={{ display: "flex", flex: "0 1 100%" }}>
              <Button
                className={"btn7To3"}
                btnValue={this.state.btn5}
                showData={this.showData}
              />

              <Button
                className={"btn7To3"}
                btnValue={this.state.btn6}
                showData={this.showData}
              />

              <Button
                className={"btn7To3"}
                btnValue={this.state.btn7}
                showData={this.showData}
              />

              <Button
                className={"btnm"}
                btnValue={this.state.btn8}
                showData={this.operator}
                operatorByKeyboard={this.operatorByKeyboard}
              />
            </div>

            <div style={{ display: "flex", flex: "0 1 100%" }}>
              <Button
                className={"btn7To3"}
                btnValue={this.state.btn9}
                showData={this.showData}
              />

              <Button
                className={"btn7To3"}
                btnValue={this.state.btn10}
                showData={this.showData}
              />

              <Button
                className={"btn7To3"}
                btnValue={this.state.btn11}
                showData={this.showData}
              />

              <Button
                className={"btnm"}
                btnValue={this.state.btn12}
                showData={this.operator}
                operatorByKeyboard={this.operatorByKeyboard}
              />
            </div>

            <div style={{ display: "flex", flex: "0 1 100%" }}>
              <Button
                className={"btn7To3"}
                btnValue={this.state.btn13}
                showData={this.showData}
              />

              <Button
                className={"btn7To3"}
                btnValue={this.state.btn14}
                showData={this.showData}
              />

              <Button
                className={"btn7To3"}
                btnValue={this.state.btn15}
                showData={this.showData}
              />

              <Button
                className={"btnm"}
                btnValue={this.state.btn16}
                showData={this.operator}
                operatorByKeyboard={this.operatorByKeyboard}
              />
            </div>

            <div style={{ display: "flex", flex: "0 1 100%" }}>
              <Button
                className={"btn0"}
                btnValue={this.state.btn17}
                showData={this.showData}
              />

              <Button
                className={"btn7To3"}
                btnValue={this.state.btn18}
                showData={this.dotOperator}
                numbersOnly={this.numbersOnly}
              />

              <Button
                className={"btnm"}
                btnValue={this.state.btn19}
                showData={this.result}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <CircularButton Toggle={this.Toggle} />;
    }
  }
}
export default Calculator;
