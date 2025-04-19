function beforesubmit()
{
    let outputdate=document.querySelector(".outputdate");
    let inputdate=document.querySelector(".inputdate");
    console.log("inputdate.value",inputdate.value);
  //  let formattedDate=new Date(inputdate.value).toLocaleDateString("en-IN");
   // console.log("inputdate.value",formattedDate);
  //  let formattedDate=moment(formattedDate).format('MM/DD/YYYY');
   // console.log('formatteddate',formattedDate);
    let rawDate = new Date(inputdate.value);
    let mm = String(rawDate.getMonth() + 1).padStart(2, '0');
    let dd = String(rawDate.getDate()).padStart(2, '0');
    let yyyy = rawDate.getFullYear();
    let formattedDate = `${mm}/${dd}/${yyyy}`;
    console.log("formatted date",formattedDate);
    outputdate.value=formattedDate; //20/04/2025-->04/20/
    console.log('outputdate.value',outputdate.value);
}