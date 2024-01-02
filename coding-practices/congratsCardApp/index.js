const element = (
    // Write your code here.
    <div className="congrats-card-bg-container">
    
    <h1 className="heading">Congratulations</h1>

    <div className="card-container">
       
       <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className="profile-image"/>
        
        <h1 className="user-name">Kiran V</h1>

        
        <p className="description">Vishnu Institute of Computer Education and Technology Bhimavaram </p>
        
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="profile-image"/>
    </div>


    </div>
  );
  
ReactDOM.render(element, document.getElementById('root'))