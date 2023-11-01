import logo from "./giphy.gif";
import "./App.css";
import React, { useState } from "react";
import { Button, Message } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadT, setLoadT] = useState(false);
  const [loadL, setLoadL] = useState(false);
  const [loadF, setLoadF] = useState(false);
  const [d1, setD1] = useState(false);
  const [d2, setD2] = useState(false);
  const [d3, setD3] = useState(false);
  const [l1, setL1] = useState(false);
  const [l2, setL2] = useState(false);
  const [l3, setL3] = useState(false);

  const LIKE = "";
  const POST =
    "https://twitter.com/intent/tweet?text=Time to stir up some mischief at @clown_protocol! 🃏 Joining in for the laughs and tricks in clownverse! 🤡 $CLOP #ClownProtocol #Clownlist #CLOP";
  function handleClick(e) {
    e.preventDefault();
    setLoading(true);

    if (d1 && d2 && d3) {
      setMsg(
        <Message success>
          <Message.Header>Congratulations!!! You made it</Message.Header>
          <p>Now you are the real Clown</p>
        </Message>
      );
      setLoading(false);
    } else {
      setMsg(
        <Message error>
          <Message.Header>Task not completed</Message.Header>
          <p>Please complete your task and click check to confirm</p>
        </Message>
      );
      setLoading(false);
    }
  }
  function checkBtn() {
    const btn = document.getElementById("Tbtn");
    setD1(true);
    setLoadT(true);
    setTimeout(() => {
      if (l1) {
        btn.innerHTML = "Done";
        btn.style.backgroundColor = "green";
        btn.style.color = "#fff";
        setMsg('')
    setLoadT(false);
        
      } else {
    setLoadT(false);

        setMsg(
          <Message error>
            <p>The real clown is the one who tweet about clown protocol</p>
          </Message>
        );
      }

      setLoadT(false);
    }, 2000);
  }
  function checkBtnL() {
    const btn = document.getElementById("Lbtn");
    setD2(true);

    setLoadL(true);

    setTimeout(() => {
      if (l2) {
        btn.innerHTML = "Done";
        btn.style.backgroundColor = "green";
        btn.style.color = "#fff";
        setLoadL(false);
        setMsg('')

      } else {
        setLoadL(false);
        setMsg(
          <Message error>
            <p>The real clown is the one who like clown protocol post</p>
          </Message>
        );
      }
    }, 2000);
  }
  function checkBtnF() {
    const btn = document.getElementById("Fbtn");
    setLoadF(true);
    setD3(true);

    setTimeout(() => {
      if (l3) {
        btn.innerHTML = "Done";
        btn.style.backgroundColor = "green";
        btn.style.color = "#fff";
        setLoadF(false);
        setMsg('')
      } else {
        setLoadF(false);

        setMsg(
          <Message error>
            <p>The real clown is the one who follows clown protocol</p>
          </Message>
        );
      }
    }, 2000);
  }
  function checkClick(){
    setL1(true)
  }
  function checkClickL(){
    setL2(true)
  }
  function checkClickT(){
    setL3(true)
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <Button
        type="button"
        data-toggle="modal"
        data-target="#exampleModal"
        className="mt-5"
        color="red"
        style={{ width: "130px" }}
      >
        Become A 🤡
      </Button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content" style={{ backgroundColor: "#282c34" }}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                A Real Clown Do This
              </h5>
            </div>
            <div class="modal-body text-start">
              {msg ? msg : ""}
              <div className="row">
                <div className="col-12 d-flex m-2">
                  <p>
                    Tweet{" "}
                    <a onClick={checkClick} href={POST} target="_blank">
                      @Clown Protocol
                    </a>{" "}
                    on X
                  </p>{" "}
                  <div style={{ marginLeft: "50px" }}>
                    <Button
                      content="check"
                      id="Tbtn"
                      onClick={checkBtn}
                      loading={loadT}
                    />
                  </div>
                </div>
                <div className="col-12 d-flex m-2">
                  <p>
                    Like{" "}
                    <a onClick={checkClickL} href={LIKE} target="_blank">
                      @Clown Protocol post
                    </a>{" "}
                    on X
                  </p>{" "}
                  <div style={{ marginLeft: "40px" }}>
                    <Button
                      content="check"
                      id="Lbtn"
                      onClick={checkBtnL}
                      loading={loadL}
                    />
                  </div>
                </div>
                <div className="col-12 d-flex m-2">
                  <p>
                    Follow{" "}
                    <a onClick={checkClickT} href={LIKE} target="_blank" >
                      @Clown Protocol
                    </a>{" "}
                    on X
                  </p>{" "}
                  <div style={{ marginLeft: "50px" }}>
                    <Button
                      content="check"
                      id="Fbtn"
                      onClick={checkBtnF}
                      loading={loadF}
                    />
                  </div>
                </div>
              </div>

              <form className="py-4" onSubmit={handleClick}>
                <div class="form-group mt-3">
                  <label for="exampleInputEmail1">Tweet URL</label>

                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your tweet link"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="exampleInputPassword1">
                    Wallet Address(EVM){" "}
                  </label>

                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="wallet address"
                    required
                  />
                </div>

                <Button
                  className="mt-3"
                  type="submit"
                  primary
                  loading={loading}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
