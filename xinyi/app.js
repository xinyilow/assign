var fs = require('fs');
var jsf = require('jsonfile');
var filename = 'members.json';
var $ = require('jquery');
var jQuery = $;
var chunk = require('chunk');

const JsonFileManager = require ('./managers/JsonFileManager');
const Validator = require ('./managers/Validator');
const Member = require ('./managers/Member');

$(function(){

	const jfm = new JsonFileManager()
	const validator = new Validator()


	$('#input-membership').on('keyup',function(){
		
		//THIS IS TO LET MEMBERSHIP NUMBER NOT LESS THAN 6 DIGITS
		
		var x=this.value;
		var y=x.toString();
		if (y.length>5){
			var z=y.substr((Number(y.length)-6),6);
			$('#input-membership').val(z);
		}

    	if (y.length < 6) {
    		$('#error02').show()
    		$('#error03').show()
        	return false;
    	}
		else{
			$('#error02').hide()
			$('#error03').hide()
			return true
		}
	})


  	$('#button').click(function(){

  		var member = new Member(
  			$('#input-membership').val(),
  			$('#input-name').val(),
  			$('#input-last').val(),
  			$('#address1').val(),
  			$('#Postcode').val(),
  			$('#sex').val(),
  			$('#dob').val(),
  			$('#jd').val(),
  			$('#input-membership-type').val(),
  			$('#day').val()
  		)

  	validator.checkValidate(member)
		validator.check(member)
		validator.firstname(member)
		validator.lastname(member)
		validator.birth(member)
		validator.joinDate(member)
		validator.postcode(member) 
		validator.address(member)
		validator.membership(member)
		validator.day(member)
		validator.sex(member)
		validator.membershipnumber(member)
		validator.compare(member)

    	if (validator.checkValidate(member) === true && validator.check(member) === true && 
    		validator.firstname(member) === true && validator.lastname(member) === true && 
			validator.birth(member) === true && validator.joinDate(member) === true && 
			validator.postcode(member)  === true && validator.address(member) === true && 
			validator.membership(member) === true && validator.day(member) === true && 
			validator.membershipnumber(member) === true && validator.sex(member) === true &&
			validator.compare(member) === true ) {

	    	jfm.saveMember(member);
	    	$('#error00').show();

    	}

    	else {
    		$('#error03').show();
   		}
	})
  	
})
