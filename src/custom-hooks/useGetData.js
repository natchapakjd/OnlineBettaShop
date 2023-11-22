import React, { useState } from 'react'
import {db} from "../firebase.config"
import { collection,getDocs, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react';




export default function useGetData(collectionName) {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const collectionRef = collection(db,collectionName)

    useEffect(() =>{

        const getData = async ()=>{
            const data  = await getDocs(collectionRef)
            setData(data.docs.map(doc => ({...doc.data(), id: doc.id})))
            setLoading(false);
        }
        

        getData();
    },[collectionRef]);


    return {data,loading}
};
