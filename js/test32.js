
document.write("<div class='list-part'>");

document.write("<input type='text' name='input' id='input'>");
document.write("<input type='submit' name='submit' id='submit' onclick='checkdata()'>");
document.write('<br>');


document.write("<table class='list-table' border='2' cellpadding='50'>");

document.write("<tr>");

document.write("<th> ROLL </th>");
document.write("<th> REG NUMBER </th>");
document.write("<th> NAME </th>");
document.write("<th> BATCH </th>");
document.write("<th> DEPRTMENT </th>");


document.write("</tr>");

document.write("<tr>");
   document.write("<td id= 'roll'> </td>");
   document.write("<td id= 'reg'> </td>");
   document.write("<td id= 'name'> </td>");
   document.write("<td id= 'batch'></td>");
   document.write("<td id= 'dept'> </td>");

document.write("</tr>");



document.write("</table>");


document.write("</div");

function checkdata(){
	var value = document.getElementById("input").value;
	if(value == 1){
		document.getElementById("roll").innerHTML ='01';
		document.getElementById("reg").innerHTML ='FIT-1301';
		document.getElementById("name").innerHTML ='Arif Bilah';
		document.getElementById("batch").innerHTML ='WDD~13';
		document.getElementById("dept").innerHTML ='WDD';
	}else if(value == 2 ){
        document.getElementById("roll").innerHTML ='02';
		document.getElementById("reg").innerHTML ='1302';
		document.getElementById("name").innerHTML ='Bibas Samaddar';
		document.getElementById("batch").innerHTML ='WDD~13';
		document.getElementById("dept").innerHTML ='WDD';

	}else if(value == 3){
		document.getElementById("roll").innerHTML ='03';
		document.getElementById("reg").innerHTML ='1303';
		document.getElementById("name").innerHTML ='Siful Islam';
		document.getElementById("batch").innerHTML ='WDD~13';
		document.getElementById("dept").innerHTML ='WDD';
	}else if(value == 4 ){
		document.getElementById("roll").innerHTML ='04';
		document.getElementById("reg").innerHTML ='1304';
		document.getElementById("name").innerHTML ='Jakir Hossain';
		document.getElementById("batch").innerHTML ='WDD~13';
		document.getElementById("dept").innerHTML ='WDD';
	} else if(value == 5){
		document.getElementById("roll").innerHTML ='43';
		document.getElementById("reg").innerHTML ='1305';
		document.getElementById("name").innerHTML ='Jakir Hossain';
		document.getElementById("batch").innerHTML ='WDD~13';
		document.getElementById("dept").innerHTML ='WDD';
	}else if(value == 43){
		document.getElementById("roll").innerHTML ='43';
		document.getElementById("reg").innerHTML ='1343';
		document.getElementById("name").innerHTML ='Al-amin';
		document.getElementById("batch").innerHTML ='WDD~13';
		document.getElementById("dept").innerHTML ='WDD';

	}else{
		document.write("sorry Wrong Input");
	}

}



