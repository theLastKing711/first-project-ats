import { useEffect, useState } from "react"
import { ApplicationFOrmApi } from "../types"
import { getFormAPI, putFormAPI } from "../API/form-api";

const useForm = () => {
  
  const [form, setForm] = useState<ApplicationFOrmApi | undefined>(undefined);

  const getData = () => {
    getFormAPI()
      .then((data) => data.json())
      .then((data) => {
        console.log('data', data);
        setForm(data);
      })
  }

  useEffect(() => {
    getData();
  }, []);
  

  const updateForm = (newData: ApplicationFOrmApi) => {
    putFormAPI(newData)
      .then(getData)

      // .then((data) => data.json())
      // .then((data) => {
        // setForm(data);
      // })
  };
  
  return {form , updateForm};
}

export default useForm