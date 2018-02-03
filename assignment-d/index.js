var fs = require('fs');
var jsf = require('jsonfile');
var filename = ('jsonfile.json');
var $ = require('jquery');
var jQuery = $;
var chunk = require('chunk');

const JsonFileManager = require ('./managers/JsonFileManager');
const Validator = require ('./managers/Validator');
const Member = require ('./managers/Member');

$(function(){

	const jfm = new JsonFileManager()
	const validator = new Validator()

	//THIS IS TO LET ENTRANT NUMBER NOT LESS THAN 6 DIGITS

	$('#entrant_number').on('keyup',function(){
		let mn = $('#entrant_number').val();
		let ms = mn.toString();
		if (ms.length > 6) {
			var c = ms.substr((Number(ms.length)-6), 6);
			$('#entrant_number').val(c);
		} 
		else if (ms.length !== 6) {
			$('#error03').show()
			$result = false
		}
		else if (ms.length === 6) {
			$('#error03').hide()
			$result = true
		}
	})

	$('#button').click(function(){

		var member = new Member(

			$('#entrant_number').val(),
			$('#date_entry').val(),
			$('#name_entrant').val(),
			$('#picture_title').val(),
			$('#picture_location').val(),
			$('#category_code').val(),
			$('#camera_type').val()

		)

			validator.checkValidate(member)
			validator.check(member)
			validator.Date_Of_Entry(member)
			validator.Name_Of_Entrant(member)
			validator.Picture_Title(member)
			validator.Picture_Location(member)
			validator.Category_Code(member)
			validator.Camera_Type(member)
	 		validator.entrantsnumber(member)
	 		validator.DateEntry(member)

	 	if (validator.checkValidate(member) === true && 
			validator.check(member) === true && 
			validator.Date_Of_Entry(member) === true && 
			validator.Name_Of_Entrant(member) === true && 
			validator.Picture_Title(member) === true && 
			validator.Picture_Location(member) === true && 
			validator.Category_Code(member) === true && 
			validator.entrantsnumber(member) === true && 
			validator.DateEntry(member) === true &&
			validator.Camera_Type(member) === true) {

			jfm.saveMember(member);
			$('#error00').show();	
		}
		else { 

			$('#error01').show();
		}
	})

})

	
