const Box = props => {
  //  Write your code here.
  const { className, boxText } = props;
  
  return (
      <div className="margin boxes-container">
          <p className={className}>{boxText}</p>
      </div>
  );
}

const element = (
  //  Write your code here. 

  <div className="bg-container">
    <h1 className="box-heading">Boxes</h1>

    <div className="boxes-container">
        <Box className="box-yellow" boxText="Small"/>
        <Box className="box-blue" boxText="Medium"/>
        <Box className="box-rose" boxText="Large"/>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
