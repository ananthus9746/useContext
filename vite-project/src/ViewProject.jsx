import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ContextConnectWallet from "./ContextConnectWallet";

function ViewProject() {
  const location = useLocation();
  const { projectDetails } = location.state;
  console.log("viewmore project details...", projectDetails);
  const { connectWallet, setConnectWallet } = useContext(ContextConnectWallet);

  const connecWallet = () => {
    //Add a confirmation popup then set connectWallet to true
    setConnectWallet(true);
  };

  const invest = () => {
    if (connectWallet === true) {
      alert("Invest");
    } else {
      connecWallet();
    }
  };

  return (
    <div>
      <h1>Single project page</h1>
      <p> {projectDetails.projectName}</p>
      <p> {projectDetails.blockchain}</p>
      <p> {projectDetails.createdAt}</p>
      <p> {projectDetails.email}</p>
      <p> {projectDetails.projectImage}</p>
      <p> {projectDetails.discription}</p>
      <p> {projectDetails.endDate}</p>
      <p> {projectDetails.tokeynSymbol}</p>
      <p> {projectDetails.twitter}</p>
      <p> {projectDetails.status}</p>

      <img
        className="project_img"
        src={
          "http://localhost:5000" + "/images/" + projectDetails?.projectImage
        }
        alt="projectImage"
      />
      <br />
      <br />
      <button className="invest" onClick={invest}>
        {connectWallet ? "Invest" : "Connect Wallet"}
      </button>
      <br />
      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default ViewProject;
