import  { useEffect, useState, useCallback } from "react";

const useFetchData = () => {
    const [status, setStatus] = useState('idle');
    const [foods, setFoods]=useState([{
        id:"",
        name:"",
        address:"",
        postcode:"",
        phone:"",
        email:"",
        description:"",
        location:"",
        cafe:"",
        ratings:"",
        reviews:"",
      }]);

  const fetchData = useCallback(() => {
    const url = "http://localhost:3000/hostels";
    fetch(url)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData)
        setFoods(incomingData);
        setStatus('fetched');
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { status, foods };
};
export default useFetchData;