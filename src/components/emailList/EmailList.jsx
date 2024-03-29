import "./emailList.css";

function EmailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, Save money</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default EmailList;
