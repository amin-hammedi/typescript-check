import React from "react";
import "./App.css";

// declare the type for the props of Greeting component
// the name which is a string
interface GreetingProps {
  name: string;
}

// the greeting component accepts now the props of greeting props

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// export the Greeting component as a default export

export default Greeting;
