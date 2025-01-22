import './App.css';
import TvcCategory from './Component/TvcCategory';
import { useState , useEffect} from 'react';
import axios from './api/TvcApi';
import TvcCategoryForm from './Component/TvcCategoryForm';
function App() {

  const [tvcCategories,setTvcCategories] = useState([]);
  const GetTvcCategory = async () => {
    try {
      const response = await axios.get("TvcCatey");
      setTvcCategories(response.data);
      } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
    GetTvcCategory();
  },[]);
  const [tvcCategoryIsForm, setTvcCategoryIsForm] = useState(false)

  const [tvcCategoryEdit, setTvcCategoryEdit] = useState("")
  const tvcHandleOnAddNew=(param)=>{
    setTvcCategoryIsForm(param); 
  }

  const tvcHandleCategoryCloseForm=(param) =>{
    setTvcCategoryIsForm(param);
  }

  const tvcHandleCategorySubmit=(param) =>{
    let id = tvcCategories[tvcCategories.length-1].tvcId;
    param.tvcId = id+1
    tvcCategories.push(param);
    setTvcCategories((prev)=>{
      return [...prev];
    })
    setTvcCategoryIsForm(false); 
  }

  const tvcHandleDelete=(tvcId)=>{
    const tvcResponse = axios.delete(`TvcCatey/${tvcId}`);
    let tvcDelete = tvcCategories.filter(x=>x.tvcId !== tvcId);
    setTvcCategories(tvcDelete);
  }

  const tvcHandleEdit =(tvcCategory)=>{


    setTvcCategoryEdit(tvcCategory)
    setTvcCategoryIsForm(true); 
  }
  return (
    <div className="container border my-3">
      <h1> Nguyen Anh Huy</h1>
      <TvcCategory renderTvcCategory = {tvcCategories}
      onAddNew={tvcHandleOnAddNew}
      onTvcDelete={tvcHandleDelete}
      onTvcEdit={tvcHandleEdit}
      />
      <hr/>
      {tvcCategoryIsForm===true?<TvcCategoryForm renderTvcCategory = {tvcCategoryEdit} onCloseForm={tvcHandleCategoryCloseForm} onCategorySubmit={tvcHandleCategorySubmit}/> : ""}
    </div>
  );
}

export default App;
