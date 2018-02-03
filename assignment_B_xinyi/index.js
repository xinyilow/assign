var fs = require('fs');
var jsf = require('jsonfile');
var filename = 'members.json';
var $ = require('jquery');
var jQuery = $;
var chunk = require('chunk');

const JsonFileManager = require ('./managers/JsonFileManager');
const Validator = require ('./managers/Validator');
const Member = require ('./managers/Member');

//1641807090542

$(function(){

	const jfm = new JsonFileManager()
	const validator = new Validator()

	//THIS IS FOR TO LET ISBN NUMBER CANNOT LESS THAN 13 DIGITS

	$('#input_number').on('keyup',function(){

		var x=this.value;
		var y=x.toString();
		if (y.length>13) {
			var z=y.substr((Number(y.length)-13),13);
			$('#input_number').val();
		}

		if (y.length !== 13){
			$('#error03').show();
			$result = false;
		}

		else{
			$('#error03').hide();
			$result = true
		}
	})


	$('#button').click(function(){

		var member = new Member(
  			$('#input_number').val(),
  			$('#input_date_published').val(),
  			$('#input_title').val(),
  			$('#input_publisher').val(),
  			$('#input_author').val(),
  			$('#input_in_stock').val(),
  			$('#input_category_code').val()
  		)

		validator.checkValidate(member)
		validator.check(member)
		validator.ISBN(member)
		validator.datePublished(member)
		validator.Title(member)
		validator.Publisher(member)
		validator.Author(member)
		validator.Category_code(member)
		validator.In_Stock(member)
		validator.DatePublished(member)

	 	if (validator.checkValidate(member) === true && validator.check(member) === true && 
	 		validator.ISBN(member) === true && validator.datePublished(member) === true && 
			validator.Title(member) === true && validator.Publisher(member) === true && 
			validator.Author(member) === true && validator.Category_code(member) === true && 
			validator.DatePublished(member) === true && validator.In_Stock(member) === true ){

			jfm.saveMember(member.transformObj())
	    	$('#error00').show();	
		}
		else { 
			$('#error01').show();
		}
	})
	
})
