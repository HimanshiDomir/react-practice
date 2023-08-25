
import React, {useEffect, useState} from "react";

const Home: React.FC = () => {
  const [x,setX] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setX(json['userId']))
  }, []);

  return <h1>{x}uvcsv </h1>
};

export default Home;
