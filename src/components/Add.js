import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth,db} from '../firebase'

function Add() {
    const[user] = useAuthState(auth)  
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    
    
    db.collection("users")
    .doc(user.uid)
    .set({
      name:user.displayName ,
      email:user.email,
      profile:user.photoURL,
      last_seen:dateTime
    })
    .then(function () {
      console.log("Value successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing Value: ", error);
    });  
    return (
        <div>
            
        </div>
    )
}

export default Add
