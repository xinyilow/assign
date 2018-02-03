
var fs = require('fs');
var jsf = require('jsonfile');
var filename = ('jsonfile.json');
var $ = require ('jquery');
var jQuery = $;
var chunk = require('chunk');

const JsonFileManager = require ('./managers/JsonFileManager');
const Validator = require ('./managers/Validator');
const Member = require ('./managers/Member');

$(function(){

	const jfm = new JsonFileManager()
	const validator = new Validator()

	//THIS IS FOR TO LET THE MEMBERSHIP NUMBER MUST BE 6 DIGITS 

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

	})

	$('#button').click(function(){

		var member = new Member(

			$('#input_membership').val(),
			$('#input_number_holes').val(),
			$('#input_first').val(),
			$('#input_last').val(),
			$('#input_date_game').val(),
			$('#input_booking').val(),
			$('#input_guest1').val(),
			$('#input_guest2').val(),
			$("#input_guest3").val(),
			$('#input_transport').val(),
			$("#input_golfbags").val(),
			$("#input_guest").val()
		)

		validator.checkValidate(member)
		validator.check(member)
		validator.firstname(member)
		validator.lastname(member)
		validator.Number_of_guest(member)
		validator.Date_of_Game(member)
		validator.Booking_game(member)
		validator.Guest_1(member)
		validator.Guest_2(member)
		validator.Guest_3(member)
		validator.personal_transport(member)
		validator.numbers_of_golf_bag_trolleys(member)
		validator.Number_of_holes(member)
		validator.membershipnumber(member)

		if(validator.checkValidate(member) === true && validator.check(member) === true && 
			validator.firstname(member) === true && validator.lastname(member)
		 	=== true && validator.Number_of_guest(member) === true && 
			validator.Date_of_Game(member) === true && validator.Booking_game(member) === true && 
			validator.Guest_1(member) === true && validator.Guest_2(member) === true && 
			validator.Guest_3(member) === true && validator.personal_transport(member) === true && 
			validator.numbers_of_golf_bag_trolleys(member) === true && validator.Number_of_holes(member)
			=== true && validator.membershipnumber(member) === true
		 	){
			
	    	jfm.saveMember(member);
	    	$('#error00').show();

		}
		else{
			$('#error01').show();
		}
	})
	
})

 	