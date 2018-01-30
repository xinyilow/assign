
var fs = require('fs');
var jsf = require('jsonfile');
var filename = ('jsonfile.js');
var $ = require ('jquery');
var jQuery = $;
var chunk = require('chunk');

$(function(){
	if (!fs.existsSync(filename)){
		jsf.writeFileSync(filename,[])
	}
	$('#error00').hide();
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
	$('#error13').hide();
	$('#error14').hide();
	var $result = true

	$('#button').click(function(){
		checkValidate()
		check()
		firstname()
		lastname()
		Number_of_guest()
		Date_of_Game()
		Booking_game()
		Guest_1()
		Guest_2()
		Guest_3()
		personal_transport()
		numbers_of_golf_bag_trolleys()
		Number_of_holes()
		if($result === true){
			$('#error01').hide();
			$('#error00').show();
			checkform();
		}
		else{
			$('#error01').show();
		}
	})



	function checkform(){
		var obj = {
			Membership_Number:$('#input_membership').val(),
			Number_of_holes:$('#input_number_holes').val(),
			First_name:$('#input_first').val(),
			Last_name:$('#input_last').val(),
			Date_of_Game:$('#input_date_game').val(),
			Booking_game:$('#input_booking').val(),
			Guest_1:$('#input_guest1').val(),
			Guest_2:$('#input_guest2').val(),
			Guest_3:$("#input_guest3").val(),
			personal_transport:$('#input_transport').val(),
			numbers_of_golf_bag_trolleys:$("#input_golfbags").val(),
			Number_of_guest:$("#input_guest").val()
		}
		if (!fs.existsSync(filename)) {
			jsf.writeFileSync(filename,[])
		}
		var arr=jsf.readFileSync(filename);
		console.log(arr)
		arr.push(obj);
		jsf.writeFileSync(filename,arr,{spaces:2});
	};

	function check(){
		$('input').each(function(){
			let input = $(this)
			if (input.val() ===""){
				$('#error03').show();
				$result=false
			}
			else{
				$('#error03').hide();
				$result=true
			}
			return $result
		})
	}

	$('#input_membership').on('keyup',function(){
		var x=this.value;
		var y=x.toString();
	
		if (y.length>5) {
			var z=y.substr((Number(y.length)-6),6);
			$('#input_membership').val(z);
		}

		if (y.length<6) {
			$('#error03').show();
			$return = false;
		}

		else{
			$('#error03').hide();
			$return = true;
		}
			return $result
	})
	

	function firstname() {
			let First_name = $('#input_first').val();
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
			var last_name = $('#input_last').val();
			if ( last_name == "") {
				$('#error05').show();
				$result = false;
			}
		
			else {
				$('#error05').hide();
				$result = true;
			}
			return $result;
	}


	function Number_of_guest() {
			let Number_of_guest = $("#input_guest").val();
			if ( Number_of_guest == "") {
				$('#error11').show();
				$result = false;
			}
		
			else {
				$('#error11').hide();
				$result = true;
			}
			return $result;
	}

	function Date_of_Game() {
			var Date_of_Game = $('#input_date_game').val();
			if ( Date_of_Game == "") {
				$('#error06').show();
				$result = false;
			}
		
			else {
				$('#error06').hide();
				$result = true;
			}
			return $result;
	}

	/*
		personal_transport:$('#input_transport').val(),
		Number_of_holes:$('#input_number_holes').val(),
		numbers_of_golf_bag_trolleys:$("#input_golfbags").val(),*/


	function Booking_game() {
			let Booking_game = $('#input_booking').val();
			if ( Booking_game == "") {
				$('#error07').show();
				$result = false;
			}
		
			else {
				$('#error07').hide();
				$result = true;
			}
			return $result;
	}

	function Guest_1() {
			var Guest_1 = $('#input_guest1').val();
			if ( Guest_1 == "") {
				$('#error08').show();
				$result = false;
			}
		
			else {
				$('#error08').hide();
				$result = true;
			}
			return $result;
	}

	function Guest_1() {
		var Guest_1 = $('#input_guest1').val();
		if ( Guest_1 == "") {
			$('#error08').show();
			$result = false;
		}
		
		else {
			$('#error08').hide();
			$result = true;
		}
		return $result;
	}

	function Guest_2() {
		var Guest_2 = $('#input_guest2').val();
		if ( Guest_2 == "") {
			$('#error09').show();
			$result = false;
		}
		
		else {
			$('#error09').hide();
			$result = true;
		}
		return $result;
	}

	function Guest_3() {
		var Guest_3 = $('#input_guest3').val();
		if ( Guest_3 == "") {
			$('#error10').show();
			$result = false;
		}
		
		else {
			$('#error10').hide();
			$result = true;
		}
		return $result;
	}

	function personal_transport() {
		var personal_transport = $('#input_transport').val();
		if ( personal_transport == "") {
			$('#error12').show();
			$result = false;
		}
		
		else {
			$('#error12').hide();
			$result = true;
		}
		return $result;
	}

	function Number_of_holes() {
		var Number_of_holes = $('#input_number_holes').val();
		if ( Number_of_holes == "") {
			$('#error14').show();
			$result = false;
		}
		
		else {
			$('#error14').hide();
			$result = true;
		}
		return $result;
	}

	function numbers_of_golf_bag_trolleys() {
		var numbers_of_golf_bag_trolleys = $("#input_golfbags").val();
		if ( numbers_of_golf_bag_trolleys == "") {
			$('#error13').show();
			$result = false;
		}
		
		else {
			$('#error13').hide();
			$result = true;
		}
		return $result;
	}
	
	function checkValidate(){
		let a = $('#input_membership').val();
		let b = a.toString();
		let c = 0;
	
		for (var i = 0; i < b.length; i++){
			let l = 6-i;
			c += Number(b[i]) * l ; 
		}
	
		if ((c % 11) !== 0 || b.length !== 6){
			$('#error02').show();
			return false
		}
	
		else if ((c % 11) === 0 && b.length === 6){
			// $('#input_membership').parent().removeClass('error')
			$('#error02').hide();
			return true
		}

	}

})

 	