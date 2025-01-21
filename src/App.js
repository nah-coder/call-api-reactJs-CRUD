import logo from './logo.svg';
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

  return (
    <div className="container border my-3">
      <h1> Nguyen Anh Huy</h1>
      <TvcCategory renderTvcCategory = {tvcCategories}/>
      <hr/>
      <TvcCategoryForm />
    </div>
  );
}

export default App;
