function calculateAge() {
		var enteredBirthYear = document.getElementById('birthYear').value;
		var testBirthYear = parseFloat(enteredBirthYear);
		console.log(testBirthYear);

			var currentYear = new Date();
			birthYear = new Date(enteredBirthYear);
			var timeDiff = Math.abs(birthYear.getTime() - currentYear.getTime());
			var actualdiffYears = Math.ceil(timeDiff / (365.5*1000 * 3600 * 24)); 

			var enteredCurrentYear =  document.getElementById('currentYear').value;
			var usersCurrentYear = new Date(enteredCurrentYear);
			
			var timeDiff2 = Math.abs(birthYear.getTime() - usersCurrentYear.getTime());
			var diffYears = Math.ceil(timeDiff2 / (365.5*1000 * 3600 * 24));

			if(enteredBirthYear==null || enteredBirthYear=="" || enteredCurrentYear==null || enteredCurrentYear=="" || isNaN(enteredBirthYear)
			 || isNaN(enteredCurrentYear)|| enteredBirthYear.length>4 || enteredCurrentYear.length>4
			 || enteredBirthYear<1000 || enteredCurrentYear<1000 ||enteredCurrentYear<enteredBirthYear){
				alert("Enter a year greater than 1000 in correct format with Current Year greater than Birth Year");
				document.getElementById("modal_text").innerHTML ="unknown";
				$("#myModal").modal();
			}else document.getElementById("modal_text").innerHTML = "You are either " + diffYears + " years or " + Math.abs(diffYears - 1)
				+ " years old, but computer predicts that you are "+ Math.abs(actualdiffYears-1) 
				+ " years old on the present date which is " + currentYear.toDateString();
				$("#myModal").modal();
}


function calculateSupply() {
	// body...
	var enteredCurrentAge = document.getElementById('age').value;
	var age = parseFloat(enteredCurrentAge);
	var enteredNoOfPackets = document.getElementById('snackPerDay').value;
	var snackNoPerDay = parseFloat(enteredNoOfPackets);
	var max_age = 100;
	var diffAge = max_age - age;
	var lifeSupply = Math.round(snackNoPerDay*365*diffAge + diffAge%4);
	if( enteredCurrentAge==null ||enteredCurrentAge==""||enteredNoOfPackets==null ||enteredNoOfPackets=="" 
		||age>max_age || age<0 || snackNoPerDay<=0 || isNaN(enteredCurrentAge) || isNaN(enteredNoOfPackets) ){
		alert("Enter valid Age or Number of packets greater than 0.");
		document.getElementById("modal_text").innerHTML ="unknown";
		$("#myModal").modal();
		}else { document.getElementById("modal_text").innerHTML = "You will need "+ lifeSupply + 
		" of packets of snacks to last you until the ripe old age of " + max_age + " years.";
		$("#myModal").modal();}


}
function calculateCircumference() {
	// body...
	var enteredRadius = document.getElementById('radius').value;
	var rad = parseFloat(enteredRadius);
	var circum = Math.ceil(2*Math.PI*rad);
	if(enteredRadius==null|| enteredRadius==""||isNaN(enteredRadius) || rad<0){
		alert("Enter a Number greater than 0");
		document.getElementById("modal_text").innerHTML="unknown";
		$("#myModal").modal();
	}else {document.getElementById("modal_text").innerHTML = "The circumference is "+ circum + " cm or m";
	$("#myModal").modal();}

}

function calculateArea(){
	var enteredRadius = document.getElementById('radius').value;
	var rad = parseFloat(enteredRadius);
	var area = Math.ceil(Math.PI * rad * rad);
	if(enteredRadius==null|| enteredRadius==""||isNaN(enteredRadius) || rad<0){
		alert("Enter a Number greater than 0");
		document.getElementById("modal_text").innerHTML="unknown";
		$("#myModal").modal();
	}else {document.getElementById("modal_text").innerHTML = "The area of the circle is "+area +" cm<sup>2</sup> or m<sup>2</sup>";
	$("#myModal").modal();}

}

function calculateFarenheit() {
	// body...
	var enteredCel = document.getElementById('enteredCelsius').value;
	var Cel = parseFloat(enteredCel);
	var Far = Math.round(Cel*9/5+32);
	if (enteredCel==null||enteredCel==""||isNaN(enteredCel)) {
		alert("Enter a Number");
		document.getElementById("modal_text").innerHTML = "unknown";
		$("#myModal").modal();
	} else {document.getElementById("modal_text").innerHTML = Cel + "&#8451;" + " is " + Far +  "&#8457;";
	$("#myModal").modal();}
}

function calculateCelsius() {
	var enteredFar = document.getElementById('enteredFarenheit').value;
	var Farh = parseFloat(enteredFar);
	var Cels = Math.round((Farh-32)*5/9);
	if (enteredFar==null||enteredFar=="" ||isNaN(enteredFar)) {
		alert("Enter a Number");
		document.getElementById("modal_text").innerHTML = "unknown";
		$("#myModal").modal();
	} else {document.getElementById("modal_text").innerHTML = Farh + "&#8457;" + " is " + Cels + "&#8451;"; 
	$("#myModal").modal();}
}

