const Exceljs=require ('exceljs'); 
 //import {test,expect} from '@playwright/test' 
  
  
 async function writeExcelTest(searchValue,replacedValue,change,filePath) {  
       const workbook=new Exceljs.Workbook(); //workbook means complete excel
       await workbook.xlsx.readFile(filePath) //function for opening file -readFile 
       const worksheet=workbook.getWorksheet('Sheet1'); 
       const output=await readExcel(worksheet,searchValue);//first runwithout await then put 
       const cell=worksheet.getCell(output.row,output.column+change.columnChange); //insted of hardcode we use the object variables ,use change as last 
    // const cell=worksheet.getCell(output.row,output.column); 
       cell.value=replacedValue 
       await workbook.xlsx.writeFile(filePath);//re-write the file and save it again 
  
 } 
  
 async  function readExcel(worksheet,searchValue)  
 { 
     
   let output={row:-1,column:-1}  
  
    
 worksheet.eachRow((row,rowNumber)=>{ 
  
     row.eachCell((cell,colNumber)=>{ 
  
        if(cell.value===searchValue) 
       
         { 
             output.row=rowNumber; 
            output.column=colNumber; 
            console.log(cell.value) 
             console.log(output.row); 
            console.log(output.column); 
         
      } 
     }) 
  
   }) 
  
   return output;  
 }
 //writeExcelTest("Strawberry","Avocado","D://Jiji//Automation//Playwright//utils//Fruits.xlsx") -- to change the cell value to new value
 //writeExcelTest("Orange","110",{rowChange:0,columnChange:1},"D://Jiji//Automation//Playwright//utils//Fruits.xlsx") // to change price value for selectedValue item
 writeExcelTest("Orange","10",{rowChange:0,columnChange:1},"D://Jiji//Automation//Playwright//utils//Fruits.xlsx")