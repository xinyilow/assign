
class Member {

  constructor(
    input_membership,
    input_number_holes,
    input_first,
    input_last,
    input_booking,
    input_date_game,
    input_guest1,
    input_guest2,
    input_guest3,
    input_transport,
    input_golfbags,
    input_guest
  ) {
    this.Membership_Number = input_membership
    this.First_Name = input_first 
    this.Last_name = input_last
    this.Booking_game = input_booking
    this.Number_of_holes = input_number_holes
    this.personal_transport = input_transport
    this.Date_of_Game = input_date_game
    this.numbers_of_golf_bag_trolleys = input_golfbags
    this.Number_of_guest = input_guest
    this.Guest_1 = input_guest1
    this.Guest_2 = input_guest2
    this.Guest_3 = input_guest3
  }

  transformObj() {
    return {
      'Membership_Number' : this.Membership_Number,
      'First_Name' : this.First_Name,
      'Last_name' : this.Last_name,
      'Input_guests' : this.Input_guests,
      'Booking_game' : this.Booking_game,
      'Number_of_holes' : this.Number_of_holes,
      'personal_transport' : this.personal_transport,
      'Date_of_Game' : this.Date_of_Game,
      'Number_of_guest' : this.Number_of_guest,
      'numbers_of_golf_bag_trolleys' : this.numbers_of_golf_bag_trolleys,
      'Guest_1' : this.Guest_1,
      'Guest_2' : this.Guest_2,
      'Guest_3' : this.Guest_3,
    };
  }

}

module.exports = Member