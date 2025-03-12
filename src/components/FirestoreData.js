import React from "react";
import { useGetData } from "../hooks/useGetdata";
//api 815dc76237d3517692bbd2bcdab99efe
const FireStoreData = () => {
  const [documents] = useGetData();


  return (
    <div>
      <span>Values</span>
      {documents.map((documents) => (
        <div key={documents.id}>
          <div style={{backgroundColor:"white"}} >
            name:{documents.value.name}<br/>email: {documents.value.email}<br/>lastseen:{documents.value.last_seen}<br/>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default FireStoreData;