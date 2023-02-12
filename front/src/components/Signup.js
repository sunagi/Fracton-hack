import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React from "react";
import Web3 from "web3";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";
import "../App.css";

function Signup() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const connectMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      setWeb3(new Web3(window.ethereum));
      try {
        await window.ethereum.enable();
        setAccount(window.ethereum.selectedAddress);
      } catch (error) {
        console.error("User denied access to Ethereum account.");
      }
    } else {
      console.error("MetaMask is not installed in this browser.");
    }
  };
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setWeb3(new Web3(window.ethereum));
      window.ethereum.enable().then((accounts) => {
        setAccount(accounts[0]);
      });
    } else {
      console.log("MetaMask is not installed in this browser.");
    }
  }, []);
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (!web3 || !account) {
      setFormErrors({...formErrors, wallet: "ウォレットを接続してください。"});
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      navigate('/');
    } catch (error) {
      alert("正しく入力してください。");
      return; 
    }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (web3 && account) {
        console.log(web3, account);
      } else {
        console.error("ウォレットを接続してください。");
      }
    }
  }, [formErrors, isSubmit, web3, account]);
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <div>
              {web3 && account ? (
                <p>
                  Connected to MetaMask with account: {account}
                </p>
              ) : (
                <button onClick={connectMetamask}>Connect with MetaMask</button>
              )}
              {formErrors.wallet && (
                <p className="errorMsg">{formErrors.wallet}</p>
              )}
            </div>
            <label>メールアドレス</label>
            <input
              type="email"
              name="email"
              placeholder="メールアドレス"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
          </div>
          <div className="formField">
            <label>パスワード※6文字以上の英数字</label>
            <input
              type="password"
              name="password"
              placeholder="パスワード"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>
          <button className="submitButton">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;