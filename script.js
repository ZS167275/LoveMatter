//Global variables
var j = 1;
//The main function
function main() {
    var name1 = document.getElementById("name1");
    var name2 = document.getElementById("name2");
    addTr(name1, name2);
}
//Magic Number ，String is converted into a single letter
//Each addition, to check if less than 9
function calc(num) {
    num = num.toString().split('');
    var i = 0,
        l = num.length,
        sum = 0;
    while (i < l) {
        sum += parseInt(num[i++]);
    }
    return sum > 9 ? calc(sum) : sum;
}
//Magic Number
function magicNumber(str) {
    str = str.toUpperCase();//Turn to uppercase letters
    str = str.replace(/\s/g, "");//Cancel spaces
    var l = str.length,
        num = 0,
        i = 0;
    while (i < l) {
        num += calc(Math.pow(str.charCodeAt(i++), i));
    }
    return calc(num);
}
//To get the love power of the couple you need to compare the magic number of each name
function testNames(name1, name2) {
    var firstnum = magicNumber(name1),
        secondnum = magicNumber(name2),
        betewwn;
    if (firstnum == 0 || secondnum == 0) {
        alert( "error,the write is not good");
		return "error";
    }
    else {
        if (firstnum >= secondnum) {
            between = firstnum - secondnum
        }
        else {
            between = secondnum - firstnum
        }
        if (between == 0) {
            return "Prefect";
        }
        else {
            if (between > 0 && between < 3) {
                return "high";
            }
            else
                if (between >= 3 && between <= 6) {
                    return "medium";
                }
                else {
                    return "low";
                }
        }
    }
}
//Output in the table, and to limit the maximum number of rows of the table
//Added again to delete rows exceeds the limit
var id=1;
function addTr() { 
		if (j<6)
		   { 
			var tb=document.getElementById('addtr');
			var newTr = tb.insertRow(-1);
			newTr.id='tr'+id;
			newTr.align='center';
			var newTd0 = newTr.insertCell();    
			var newTd1 = newTr.insertCell('tr1');
			var newTd2 = newTr.insertCell('tr2');
			var newTd3 = newTr.insertCell('tr3');
			var newTd4 = newTr.insertCell('tr4');
			newTd0.innerHTML= "<button onclick=\"moveTr('"+id+"');\" >delect</button>";
			newTd1.innerHTML= date();
			newTd2.innerHTML= testNames(name1.value, name2.value);
			newTd3.innerHTML= name2.value;
			newTd4.innerHTML= name1.value;
			id++;
			j++;
		}
		else {
			document.getElementById('addtr').deleteRow(1);
			j--;
			id--;
			return addTr();
		}
	}
//delect row
function moveTr(id) {
	var tb=document.getElementById('addtr');
	var tr=document.getElementById('tr'+id);
	j--;
	tb.deleteRow(tr.rowIndex);
}
// Get local time and the prescribed format
function date() {
var now = new Date();
var year = now.getFullYear();       //year
var month = now.getMonth() + 1;     //month
var day = now.getDate();            //day
var hh = now.getHours();          //hh
var mm = now.getMinutes();          //mm
var mytime = month +"/"+ day + "/"+year+" "+hh+":"+mm;
return mytime;
}

