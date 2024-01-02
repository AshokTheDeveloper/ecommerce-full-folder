const Notification = props => {
  //  Write your code here.
  const { className, notificationText, url } = props;

  return (
      <div className={`notification-container card ${className}`}>
        <img src={url} className="notification-logo"/>
        <p className="notification-text">{notificationText}</p>
      </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
        <Notification className="card-info card" notificationText="Information Message" url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
        <Notification className="card-success card" notificationText="Success Message" url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
        <Notification className="card-warning card" notificationText="Warning Message" url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
        <Notification className="card-error card" notificationText="Error Message" url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
