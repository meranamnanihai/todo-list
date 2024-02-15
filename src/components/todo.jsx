import React, { useEffect } from 'react'
import { useState } from 'react'
function todo(props) {
  
  const [isChecked,setisChecked] = useState(false)
  const [refresh,setrefresh] = useState(true)
  // function isChecked() {
  //   if (localStorage.getItem(props.text) == 'not-done') {
  //     return false
  //   } else {
  //     return true;
  //   }
  // }
  useEffect(() => {
    if (localStorage.getItem(props.text) == 'not-done') {

          setisChecked(false); 
        } 
    else {

          setisChecked(true);
        }
  }, [])
  
  function handleCheckboxChange(e) {
    
    if(e.target.checked == false){
      
      localStorage.setItem(props.text,"not-done")
      setisChecked(e.target.checked)
    }
    else{
      localStorage.setItem(props.text,"done")
      setisChecked(e.target.checked)
    }
  }
  function handledelete() {
    localStorage.removeItem(props.text);
    
    const deleteitem = props.todoitems.indexOf(props.text)
    
    props.todoitems.splice(deleteitem,1)
    console.log(props.todoitems)
    setrefresh(false)
    
    
  }
  function handledit() {
    handledelete()
    props.setinputvalue(props.text)
    document.getElementsByClassName("add-button")[0].innerText = "Edit";
  }
  if(refresh == true){
  if (props.show == false && isChecked == false) {
    return (
      <div className="border border-gray-300 rounded p-4 flex items-center justify-between ">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" checked={isChecked}  onChange={handleCheckboxChange}/>
                <div className="xl:text-lg  text-sm font-semibold max-w-[11rem] xl:max-w-[17rem]">{props.text}</div>
              </div>
              <div className='flex-nowrap flex'>
                <button className="text-xs px-2 py-1 bg-red-500 text-white rounded mr-2" onClick={handledelete}>Delete</button>
                <button className="text-xs px-2 py-1 bg-blue-500 text-white rounded" onClick={handledit}>Edit</button>
              </div>
            </div>
    )
  }
  if (props.show == true) {
    return (
      <div className="border border-gray-300 rounded p-4 flex items-center justify-between ">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" checked={isChecked}  onChange={handleCheckboxChange}/>
                <div className="xl:text-lg  text-sm font-semibold max-w-[11rem] xl:max-w-[17rem]">{props.text}</div>
              </div>
              <div className='flex-nowrap flex'>
                <button className="text-xs px-2 py-1 bg-red-500 text-white rounded mr-2" onClick={handledelete}>Delete</button>
                <button className="text-xs px-2 py-1 bg-blue-500 text-white rounded" onClick={handledit}>Edit</button>
              </div>
            </div>
    )
  }
}

}

export default todo