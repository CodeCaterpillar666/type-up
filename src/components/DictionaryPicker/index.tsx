import React from "react";
import { useAsync } from '../../hooks/useAsync';
import axios from 'axios';


interface DictionaryPickerProps {

}

const fetchDictionary = () => {
  return axios.get('http://localhost:3002/cet4');
}

const renderSwitch = (status: string) => {
  switch(status) {
    case "idle":
      return "idle";
    case "pending":
      return "pending";
    case "success":
      return "success";
    case "error":
      return "error";
    default:
      return "not sure what status it is now";
  }
}

export const DictionaryPicker: React.FC<DictionaryPickerProps> = () => {

  const { status, value, error } = useAsync(fetchDictionary);


  return(
    <>{renderSwitch(status)}</>
  );
}