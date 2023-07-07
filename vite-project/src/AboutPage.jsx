import { useLocation, Link } from "react-router-dom";
import ContextConnectWallet from './ContextConnectWallet'
import { useContext } from "react";

const AboutPage = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  const { connectWallet, setConnectWallet } = useContext(ContextConnectWallet);

  return (
    <>
      <h1>This is About page</h1>
      {state && (
        <div>
          <h3>Passed data:</h3>
          <p>From: {state.from}</p>
          <p>Message: {state.message}</p>
          <p>Timestamp: {state.timestamp}</p>

          <p>{connectWallet?`connectWallet true=${connectWallet}`:`connect Wallet false=${connectWallet}`}</p>

          <button>{connectWallet?'Invest':'Connect Wallet'}</button>
        </div>
      )}
      <hr />
      <Link to="/">Go Home</Link>
    </>
  );
};

export default AboutPage;