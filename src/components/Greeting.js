import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/message/greetingSlice';

const Greeting = () => {
  const {
    greeting, isFetched, isLoading, hasError, error,
  } = useSelector((store) => store.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchGreeting());
    }
  }, [dispatch, isFetched]);

  if (isLoading) return <h1 className="blue">... Is Loading</h1>;
  if (hasError) {
    return (
      <h1 className="red">
        An error has ocured:
        {error}
      </h1>
    );
  }

  return <h1 className="green">{greeting}</h1>;
};

export default Greeting;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Greeting = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Replace this URL with the endpoint of the public JSON API you want to test
//     const apiUrl = 'http://localhost:3000/api/messages';

//     axios
//       .get(apiUrl)
//       .then((response) => {
//         console.log('API Response:', response);
//         setData(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) {
//     return <h1 className="blue">Loading...</h1>;
//   }

//   if (error) {
//     return (
//       <h1 className="red">
//         An error has occurred:
//         {error.message}
//       </h1>
//     );
//   }

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.message}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Greeting;
