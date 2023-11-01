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
  const [d1, setD1] = useState(false)
  const [d2, setD2] = useState(false)
  const [d3, setD3] = useState(false)


  const LIKE = "";
  const POST =
    "https://twitter.com/intent/tweet?text=Time to stir up some mischief at @clown_protocol! 🃏 Joining in for the laughs and tricks in clownverse! 🤡 $CLOP #ClownProtocol #Clownlist #CLOP";
  function handleClick(e) {
    e.preventDefault();
    setLoading(true);

    if (d1 && d2 && d3) {
      setMsg("Success");
      setLoading(false);
    } else {
      setMsg("Please complete your task and click check to confirm.");
      setLoading(false);
    }
  }
  function checkBtn() {
    const btn = document.getElementById("Tbtn");
    setD1(true)
    setLoadT(true);
    setTimeout(() => {
      btn.innerHTML = "Done";
      btn.style.backgroundColor = "green";
      btn.style.color = "#fff";

      setLoadT(false);
    }, 2000);
  }
  function checkBtnL() {
    const btn = document.getElementById("Lbtn");
    setD2(true)

    setLoadL(true);

    setTimeout(() => {
      btn.innerHTML = "Done";
      btn.style.backgroundColor = "green";
      btn.style.color = "#fff";
      setLoadL(false);
    }, 2000);
  }
  function checkBtnF() {
    const btn = document.getElementById("Fbtn");
    setLoadF(true);
    setD3(true)


    setTimeout(() => {
      btn.innerHTML = "Done";
      btn.style.backgroundColor = "green";
      btn.style.color = "#fff";
      setLoadF(false);
    }, 2000);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          className="mt-5"
          color="red"
        >
          Become A 🤡
        </Button>
      </header>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
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
                    Tweet <a href={POST}>@Clown</a> on X
                  </p>{" "}
                  <div style={{ marginLeft: "100px" }}>
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
                    Like <a href={LIKE}>@clown post</a> on X
                  </p>{" "}
                  <div style={{ marginLeft: "100px" }}>
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
                    Follow <a href={LIKE}>@clown</a> on X
                  </p>{" "}
                  <div style={{ marginLeft: "100px" }}>
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
