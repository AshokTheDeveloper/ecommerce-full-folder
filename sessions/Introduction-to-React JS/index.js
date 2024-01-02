const rootElement = document.getElementById("root");

        const className = "greeting";

        const fullName = user => user.firstName + " " + user.lastName;
        const user = {firstName: "Rahul", lastName: "Attuluri"};

        const element = (
            <div>
                <h1 className={className}>Hello {fullName(user)}</h1>
                <p className={className}>More More and More</p>
            </div>
        );
        ReactDOM.render(element, rootElement);