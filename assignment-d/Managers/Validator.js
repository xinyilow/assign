

class Validator {

  constructor() {
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
  }

	check(member){
		for (let i in member) {
			if (member[i] === "") {
				$('#error03').show()
				return false
			} else {
				$('#error03').hide()
				return true
			}
		}

	}

	//THIS IS FOR TO LET THE DATE OF ENTRY IS NOT MORE THAN 10 DIGITS

	 DateEntry(member){
    if ($('#date_entry').val().length !== 10) {
      $('#error11').show();
      return false
    }
    else{
       $('#error11').hide();
      return true
    }
  }

  //THIS IS FOR TO LET DATE OF ENTRY IS NOT EMPTY

	Date_Of_Entry(member) {
			let Date_Of_Entry = $('#date_entry').val();
			if (Date_Of_Entry == "") {
				$('#error04').show();
				return false;
			}
		
			else {
				$('#error04').hide();
				return true;
			}
	}


	//THIS IS FOR TO LET THE NAME OF ENTRANT IS NOT EMPTY

	Name_Of_Entrant(member) {
			var Name_Of_Entrant = $('#name_entrant').val();
			if (Name_Of_Entrant == "") {
				$('#error05').show();
				return false;
			}
		
			else {
				$('#error05').hide();
				return true;
			}
	}

	//THIS IS FOR TO LET THE PICTURE TITLE IS NOT EMPTY

	Picture_Title(member) {
			let Picture_Title = $('#picture_title').val();
			if ( Picture_Title == "") {
				$('#error06').show();
				return false;
			}
		
			else {
				$('#error06').hide();
				return true;
			}
	}

	//THIS IS FOR TO LET THE PICTURE LOCATION IS NOT EMPTY

	Picture_Location(member) {
			var Picture_Location = $('#picture_location').val();
			if (Picture_Location == "") {
				$('#error07').show();
				return false;
			}
		
			else {
				$('#error07').hide();
				return true;
			}
	}	

	//THIS IS FOR TO LET THE CATEGORY CODE IS NOT EMPTY

		Category_Code(member) {
			let Category_Code = $('#category_code').val();
			if ( Category_Code == "") {
				$('#error08').show();
				return false;
			}
		
			else {
				$('#error08').hide();
				return true;
			}

	}

	//THIS IS FOR TO LET THE CAMERA TYPE IS NOT EMPTY

	Camera_Type(member) {
			var Camera_Type = $('#camera_type').val();
			if (Camera_Type == "") {
				$('#error09').show();
				return false;
			}
		
			else {
				$('#error09').hide();
				return true;
			}

	}

//THIS IS FOR TO LET THE ENTRANT'S NUMBER IS MODULES 11

	checkValidate(member){
		let x = $('#entrant_number').val();
		let y = x.toString();
		let z = 0;

		for(var i = 0; i<y.length;i++){
			let l = 6- i;
			z += Number(y[i]) * l;
		}
		console.log(typeof y)
		console.log(z)
		if ((z % 11) !== 0 || y.length !== 6){
			$('#error02').show()
			console.log("NO")
			return false
		}
		else if ((z % 11) === 0 || y.length === 6){
			$('#error02').hide()
			console.log('YES')
			return true
		}
	}

	//THIS IS FOR TO LET THE ENTRANT'S NUMBER IS NOT EMPTY

	  entrantsnumber(member) {
      let entrantsnumber = $('#entrant_number').val();
      if ( entrantsnumber == "") {
        $('#error10').show();
        return false;
      }
    
      else {
        $('#error10').hide();
        return true;
      }
  }

}


module.exports = Validator