var inp_as=document.getElementById('a_size');
var inp_gen=document.getElementById("a_generate");


var div_sizes=[];
var divs=[];
var margin_size;
var margin1;
var x=[];
var cont=document.getElementById("data");


inp_gen.document.addEventListener("onclick",generate_array);
inp_as.document.addEventListener("input",update_array_size);


function generate_array()
{
    cont.innerHTML="";
if(window.matchMedia("(max-width: 600px)").matches){
  array_size=inp_as.value;
  if(array_size > 20 && array_size < 30){
    array_size=array_size%10;
      for(var i=0;i<array_size;i++)
      {
          div_sizes[i]=Math.floor(Math.random() * 4*(inp_as.max - inp_as.min) ) + 20;
          divs[i]=document.createElement("div");
          cont.appendChild(divs[i]);
          margin_size=0.1;
          divs[i].innerHTML=div_sizes[i];
          divs[i].style=" margin:" + margin_size + "%; background-image: linear-gradient( to right, #4a47a3, #000080); width:" + (100/(array_size)-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
      }
  }
  if(array_size>=30&&array_size<40){
    array_size=array_size%10+10;
      for(var i=0;i<array_size;i++)
      {
          div_sizes[i]=Math.floor(Math.random() * 4*(inp_as.max - inp_as.min) ) + 20;
          divs[i]=document.createElement("div");
          cont.appendChild(divs[i]);
          margin_size=0.1;
          divs[i].innerHTML=div_sizes[i];
          divs[i].style=" margin:" + margin_size + "%; background-image: linear-gradient( to right, #4a47a3, #000080); width:" + (100/(array_size)-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
      }
  }
  if(array_size>=40&&array_size<46){
    array_size=array_size%10+19;
      for(var i=0;i<array_size;i++)
      {
          div_sizes[i]=Math.floor(Math.random() * 4*(inp_as.max - inp_as.min) ) + 20;
          divs[i]=document.createElement("div");
          cont.appendChild(divs[i]);
          margin_size=0.1;
          divs[i].innerHTML=div_sizes[i];
          divs[i].style=" margin:" + margin_size + "%; background-image: linear-gradient( to right, #4a47a3, #000080); width:" + (100/(array_size)-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
      }
  }
  }
  else{
    array_size=inp_as.value;
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 4*(inp_as.max - inp_as.min) ) + 20;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].innerHTML=div_sizes[i];
        divs[i].style=" margin:" + margin_size + "%; background-image: linear-gradient( to right, #4a47a3, #000080); width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
  }



}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();
