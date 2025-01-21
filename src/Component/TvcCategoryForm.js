import React from 'react'

export default function TvcCategoryForm() {
  return (
    <div>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">CategoryName</span>
                <input type="text" class="form-control" name='tvcCategoryName' value={''} placeholder="CategoryName" aria-label="CategoryName" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">CategoryStatus</span>
                <select name='tvcCategoryStatus' value={''} class="form-control">
                    <option value={true}> Hiển thị</option>
                    <option value={false}> Tạm khóa</option>
                </select>
            </div>
            <button className='btn btn-success'> ghi lại </button>
        </form>
    </div>
  )
}
