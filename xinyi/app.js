var fs = require('fs');
var jsf = require('jsonfile');
var filename = ('jsfile.json');
var $ = require('jquery');
var jQuery = $;
var chunk = require('chunk');

$(function(){
	if (!fs.existsSync(filename)) {
		jsf.writeFileSync(filename, [])
	}
	$('#error0').hide();
	$('#error01').hide();
	$('#error02').hide();
	$('#error03').hide();
	$('#error04').hide();
	$('#error05').hide();
	$('#error06').hide();
	$('#error07').hide();
	$('#error08').hide();
	$('#error09').hide();
	$('#error10').hide();
	$('#error11').hide();
	$('#error12').hide();

	var $result = true
  	$('#button').click(function(){
  		checkValidate()
		check()
		firstname()
		lastname()
		birth()
		joinDate()
		postcode() 
		address()
		membership()
		day()
		sex()
    	if ($result === true) {
    	checkform();
    	}
    	else {
    		$result = false
   		}
	})

	$('#input-membership').on('keyup',function(){
		
		var x=this.value;
		var y=x.toString();
		if (y.length>5){
			var z=y.substr((Number(y.length)-6),6);
			$('#input-membership').val(z);
		}

    	if (y.length < 6) {
    		$('#error02').show()
    		$('#error03').show()
        	$return = false;
    	}
		else{
			$('#error02').hide()
			$('#error03').hide()
			$return = true
		}
	})

	function checkform(){
		var obj = {
			Membership_Number:$('#input-membership').val(),
			First_name:$('#input-name').val(),
			Last_name:$('#input-last').val(),
			Address:[$('#address1').val(),$('#address2').val(),$('#address3').val()],
			Postcode:$('#Postcode').val(),
			Sex:$('#sex').val(),
			Date_of_birth:$('#dob').val(),
			Join_Date:$('#jd').val(),
			Type_of_membership:$('#input-membership-type').val(),
			Subscription_Due_Month:$('#day').val()
		} 
		if (!fs.existsSync(filename)) {
    		jsf.writeFileSync(filename, [])
 		}
		var arr=jsf.readFileSync(filename);
		console.log(arr)
		arr.push(obj);
		jsf.writeFileSync(filename,arr, {spaces:2});
	};

	function check(){
		$('input').each(function(){
			let input = $(this)
			if (input.val() === ""){
				$('#error03').show()
				$result=false
			}
			else{
				$('#error03').hide()
				$result=true
			}
			return $result

		}) 
	}
  	
})

	function firstname() {
			let First_name = $('#input-name').val();
			if ( First_name == "") {
				$('#error04').show();
				$result = false;
			}
		
			else {
				$('#error04').hide();
				$result = true;
			}
			return $result;
	}

	function lastname() {
			var Last_name = $('#input-last').val();
			if ( Last_name == "") {
				$('#error05').show();
				$result = false;
			}
		
			else {
				$('#error05').hide();
				$result = true;
			}
			return $result;
	}

	function birth(){
		if ( $('#dob').val() == "" || $('#dob').val().length !== 10 ) {
			$('#error07').show();
			$result = false;
		}
		else {
			$('#error07').hide();
			$result = true;
		}
		return $result;
	}

	function joinDate() {
		if ( $('#jd').val() === "" || $('#jd').val().length !== 10 ) {
			$('#error06').show();
			$result = false;
		}
		else {
			$('#error06').hide();
			$result = true;
		}
		return $result;
	}

	function address() {
			var Address = [$('#address1').val(),$('#address2').val(),$('#address3').val()];
			if ( Address[0] == "") {
				$('#error09').show();
				$result = false;
			}
		
			else {
				$('#error09').hide();
				$result = true;
			}
			return $result;
	}

	function postcode() {
		if ( $('#Postcode').val() == "" || $('#Postcode').val().length !== 5) {
			$('#error08').show();
			$result = false;
		} else {
			$('#error08').hide();
			$result = true
		}
		return $result;
	}

	function membership() {
			var membership = $('#input-membership-type').val();
			if ( membership == "") {
				$('#error10').show();
				$result = false;
			}
		
			else {
				$('#error10').hide();
				$result = true;
			}
			return $result;
	}

	function day() {
			var day = $('#day').val();
			if ( day == "") {
				$('#error11').show();
				$result = false;
			}
		
			else {
				$('#error11').hide();
				$result = true;
			}
			return $result;
	}

	function sex() {
			var sex = $('#sex').val();
			if ( sex == "") {
				$('#error12').show();
				$result = false;
			}
		
			else {
				$('#error12').hide();
				$result = true;
			}
			return $result;
	}

	function checkValidate()
	{  
	  	// modulus 11
	  	let x = $('#input-membership').val();		
	  	let y = x.toString();
	  	let z = 0;
	  	
	  	// if (y.length !== 6) {
	  	// 	$result = false
	  	// 	return false;
	  	// }
		// else{
	  		for(var i = 0; i< y.length; i++){
	    		let l = 6 - i;
	    		z += Number(y[i]) * l;	
			}
	  		if ((z % 11) !== 0) {
	    		$('#error01').show()
	    		$result = false
	 		}
	 		else if ((z % 11) === 0 || y.length === 6){
	 			$('#input-membership').parent().removeClass('error')
	 			$('#error01').hide()
	 			$result = true
	 		}
	 		else {
	 			$('#error03').hide();
	 			// reroo_label('#input-membership',$('#error01').hide());
	 		}
	  		return $result
		// }
	}


/*****************************************/
/*function error_label(input_id, message)
{
  let html= ""；
  $(input_id).after(html);
  $(input_id).closest('.field').addClass('error')

}

function reroo_label(input_id, message)
{
  let html=""；
  $(input_id).after(html);
  $(input_id).closest('.field').removeClass('error')
}*/