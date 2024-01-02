const Button = props => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}> {buttonText} </button>
}

const element = (
  //  Write your c
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
        <Button buttonText = "like" className="like-button"/>
        <Button buttonText = "comment" className="comment-button"/>
        <Button buttonText= "share" className="share-button"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
