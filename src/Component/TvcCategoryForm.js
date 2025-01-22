import React, { useEffect, useState } from 'react'
import axios from '../api/TvcApi'

export default function TvcCategoryForm({onCloseForm,onCategorySubmit,renderTvcCategory}) {


    const [tvcId, setTvcId] = useState(0);
    const [tvcCagoryName, seTtvcCagoryName] = useState("");
    const [tvcCategoryStatus, setTvcCategoryStatus] = useState(true)

    useEffect(()=>{
        setTvcId(renderTvcCategory.tvcId);
        seTtvcCagoryName(renderTvcCategory.tvcCagoryName);
        setTvcCategoryStatus(renderTvcCategory.tvcCategoryStatus);
    })

    const tvcHandleClose=()=>{
        onCloseForm(false)
    }

    const tvcHandleSubmit = async (event)=>{
        event.preventDefault();
        if(tvcId===0){
            let tvcCategory={
                tvcId:0,
                tvcCagoryName:tvcCagoryName,
                tvcCategoryStatus:tvcCategoryStatus,
            }
            await axios.post("TvcCatey",tvcCategory);
            onCategorySubmit(tvcCategory);
        }else{
            let tvcCategory={
                tvcId:tvcId,
                tvcCagoryName:tvcCagoryName,
                tvcCategoryStatus:tvcCategoryStatus,
            }
            await axios.put("TvcCatey",tvcCategory);
            onCategorySubmit(tvcCategory);
        }
        

    }

  return (
    <div>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">CategoryName</span>
                <input type="text" class="form-control" name='tvcCategoryName' value={tvcCagoryName} onChange={(ev)=>seTtvcCagoryName(ev.target.value)} placeholder="CategoryName" aria-label="CategoryName" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">CategoryStatus</span>
                <select name='tvcCategoryStatus' value={tvcCategoryStatus} onChange={(ev)=>setTvcCategoryStatus(ev.target.value)} class="form-control">
                    <option value={true}> Hiển thị</option>
                    <option value={false}> Tạm khóa</option>
                </select>
            </div>
            <button className='btn btn-success' onClick={tvcHandleSubmit}> ghi lại </button>
            <button className='btn btn-danger' onClick={tvcHandleClose}>Đóng</button>
        </form>
    </div>
  )
}
