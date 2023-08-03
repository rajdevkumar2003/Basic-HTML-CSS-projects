const textarea= document.querySelector("textarea"),
fileNameInput=document.querySelector(".file-name input"),
selextMenu=document.querySelector(".save-as select"),
saveBtn=document.querySelector(".save-btn");
const dataBtn=document.querySelector('data-btn'),
data=document.querySelector('data');

//selextMenu.addEventListener("change",()=>{
    //getting selected option text
  //  let selectedOption= selextMenu.options[selextMenu.selectedIndex].text;
    //saveBtn.innerText= 'Save As' + $[selectedOption.split(" ")[0]] + 'file';
//})

saveBtn.addEventListener('click',()=>{
    const blob= new Blob([textarea.value],{type:selextMenu.value});
    //url.creatobjecturl creates a url that represents passed object
    const fileUrl = URL.createObjectURL(blob);
    const link=document.createElement('a'); //creating <a> tag
    link.download= fileNameInput.value;//passing filename as download
    link.href= fileUrl;// passinf file url as href value of link
    link.click();// clicking link so the file download
})
var a=textarea.value;
dataBtn.addEventListener('click',()=>{
  
  document.write(a);
})

  


