import React from 'react'

export default function TvcCategory({renderTvcCategory}) {
    console.log(console.log())
    let tvcCategoryElement = renderTvcCategory.map((tvcCategory,index)=>{
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <td>{tvcCategory.tvcId}</td>
                <td>{tvcCategory.tvcCagoryName}</td>
                <td>{tvcCategory.tvcCategoryStatus===true?"Hien thi" : "Tam khoa"}</td>
            </tr>
        )
    })
  return (
    <div className='container m-2'>
        <h2>Danh sách loại sản phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã loại</th>
                    <th>Tên loại</th>
                    <th>Trạng thái</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {tvcCategoryElement}
            </tbody>
        </table>
        <button className='btn btn-primary'>Thêm mới</button>
    </div>
  );
}
