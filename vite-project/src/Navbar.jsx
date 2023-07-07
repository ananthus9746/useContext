import  { useContext } from "react";
import ContextConnectWallet from "./ContextConnectWallet";

function Navbar() {
  // const [connectWallet, setConnectWallet] = useState(false);
  const { connectWallet, setConnectWallet } = useContext(ContextConnectWallet);

  console.log("connectWallet state..", connectWallet);
  const handleConnectWallet = () => {
    // Update the connectWallet state
    if (connectWallet === true) {
      setConnectWallet(false);
    } else {
      setConnectWallet(true);
    }
  };
  return (
    <div className="nav">
      <p className="navbar">NavBar</p> 
       <button onClick={handleConnectWallet} className="wllet_btn">
        {connectWallet ? "Disconnect Wallet" : "Connect Wallet"}
      </button>{" "}
    </div>
  );
}

export default Navbar;
