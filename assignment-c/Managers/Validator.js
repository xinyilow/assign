
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
		$('#error12').hide();
		$('#error13').hide();
		$('#error14').hide();
		$('#error15').hide();
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

	//THIS IS FOR TO LET THE FIRST NAME IS NOT EMPTY

	firstname(member) {
			let First_name = $('#input_first').val();
			if ( First_name == "") {
				$('#error04').show();
				return false;
			}
		
			else {
				$('#error04').hide();
				return true;
			}
	}

	//THIS IS FOR TO LET THE LAST NAME IS NOT EMPTY

	lastname(member) {
			var last_name = $('#input_last').val();
			if ( last_name == "") {
				$('#error05').show();
				return false;
			}
		
			else {
				$('#error05').hide();
				return true;
			}
	}


	//THIS IS FOR TO LET THE NUMBER OF GUEST IS NOT EMPTY

	Number_of_guest(member) {
			let Number_of_guest = $("#input_guest").val();
			if ( Number_of_guest == "") {
				$('#error11').show();
				return false;
			}
		
			else {
				$('#error11').hide();
				return true;
			}
	}

	//THIS IS FOR TO LET THE DATE OF GAME IS NOT EMPTY

	Date_of_Game(member) {
			var Date_of_Game = $('#input_date_game').val();
			if ( Date_of_Game == "") {
				$('#error06').show();
				return false;
			}
		
			else {
				$('#error06').hide();
				return true;
			}
	}

	//THIS IS FOR TO LET THE BOOKING GAME IS NOT EMPTY

	Booking_game(member) {
			let Booking_game = $('#input_booking').val();
			if ( Booking_game == "") {
				$('#error07').show();
				return false;
			}
		
			else {
				$('#error07').hide();
				return true;
			}
	}

	//THIS IS FOR TO LET THE GUEST 1 IS NOT EMPTY

	Guest_1(member) {
			var Guest_1 = $('#input_guest1').val();
			if ( Guest_1 == "") {
				$('#error08').show();
				return false;
			}
		
			else {
				$('#error08').hide();
				return true;
			}
	}

	//THIS IS FOR TO LET THE GUEST 2 IS NOT EMPTY

	Guest_2(member) {
		var Guest_2 = $('#input_guest2').val();
		if ( Guest_2 == "") {
			$('#error09').show();
			return false;
		}
		
		else {
			$('#error09').hide();
			return true;
		}
	}

	//THIS IS FOR TO LET THE GUEST 3 IS NOT EMPTY


	Guest_3(member) {
		var Guest_3 = $('#input_guest3').val();
		if ( Guest_3 == "") {
			$('#error10').show();
			return false;
		}
		
		else {
			$('#error10').hide();
			return true;
		}
	}

	//THIS IS FOR TO LET THE PERSONAL TRANSPORT IS NOT EMPTY

	personal_transport(member) {
		var personal_transport = $('#input_transport').val();
		if ( personal_transport == "") {
			$('#error12').show();
			return false;
		}
		
		else {
			$('#error12').hide();
			return true;
		}
	}

	//THIS IS FOR TO LET THE NUMBER OF HOLES IS NOT EMPTY

	Number_of_holes(member) {
		var Number_of_holes = $('#input_number_holes').val();
		if ( Number_of_holes == "") {
			$('#error14').show();
			return false;
		}
		
		else {
			$('#error14').hide();
			return true;
		}
	}

	//THIS IS FOR TO LET THE NUMBERS OF GOLF BAG TROLLEYS IS NOT EMPTY

	numbers_of_golf_bag_trolleys(member) {
		var numbers_of_golf_bag_trolleys = $("#input_golfbags").val();
		if ( numbers_of_golf_bag_trolleys == "") {
			$('#error13').show();
			return false;
		}
		
		else {
			$('#error13').hide();
			return true;
		}
	}

	//THIS IS FOR TO LET THE MEMBERSHIP NUMBER IS MODULES 11

	checkValidate(member){
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
			$('#error02').hide();
			return true
		}

	}

	//THIS IS FOR TO LET THE MEMBERSHIP NUMBER IS NOT EMPTY

	 membershipnumber(member) {
      let membershipnumber = $('#input_membership').val();
      if ( membershipnumber == "") {
        $('#error15').show();
        return false;
      }
    
      else {
        $('#error15').hide();
        return true;
      }
  }

}

module.exports = Validator