
class Validator {

  constructor(){

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

  }

  check(member){
    for (let i in member) {
      if (member[i] === "") {
        $('#error01').show()
        return false
      } else {
        $('#error01').hide()
        return true
      }
    }

  }

//THIS IS FOR TO LET DATE PUBLISHED CANNOT BE EMPTY

  datePublished(member) {
      let datePublished = $('#input_date_published').val();
      if ( datePublished == "") {
        $('#error04').show();
        return false;
      }
    
      else {
        $('#error04').hide();
        return true;
      }

  }

  //THIS IS FOR TO LET TITLE CANNOT BE EMPTY

  Title(member) {
      let Title = $('#input_title').val();
      if ( Title == "") {
        $('#error05').show();
        return false;
      }
    
      else {
        $('#error05').hide();
        return true;
      }

  }

  //THIS IS FOR TO LET ISBN NUMBER CANNOT BE EMPTY

  ISBN(member) {
      let ISBN = $('#input_number').val();
      if ( ISBN == "") {
        $('#error10').show();
        return false;
      }
    
      else {
        $('#error10').hide();
        return true;
      }

  }

  //THIS IS FOR TO LET PUBLISHER CANNOT BE EMPTY

  Publisher(member) {
      let Publisher = $('#input_publisher').val();
      if ( Publisher == "") {
        $('#error06').show();
        return false;
      }
    
      else {
        $('#error06').hide();
        return true;
      }

  }

  //THIS IS FOR TO LET AUTHOR CANNOT BE EMPTY

  Author(member) {
      let Author = $('#input_author').val();
      if ( Author == "") {
        $('#error07').show();
        return false;
      }
    
      else {
        $('#error07').hide();
        return true;
      }

  }

  ////THIS IS FOR TO LET CATEGORY CODE CANNOT BE EMPTY

  Category_code(member) {
      let Category_code = $('#input_category_code').val();
      if (  Category_code == "") {
        $('#error08').show();
        return false;
      }
    
      else {
        $('#error08').hide();
        return true;
      }

  }

  //THIS IS FOR TO LET IN STOCK CANNOT BE EMPTY

  In_Stock(member) {
      let In_Stock = $('#input_in_stock').val();
      if ( In_Stock == "") {
        $('#error09').show();
        return false;
      }
    
      else {
        $('#error09').hide();
        return true;
      }

  }

  //THIS IS FOR TO LET ISBN NUMBER CANNOT IS A NOT VALID MODULES 11 NUMBER

  checkValidate(member){
    let x = $('#input_number').val();
    let y = x.toString();
    let z = 0;

    for(var i = 0; i<y.length;i++){
      let l = 13- i;
      z += Number(y[i]) * l;
    }
    
    if ((z % 11) !== 0 || y.length !== 13){
      $('#error02').show()
      console.log("NO")
      return false
    }
    else if ((z % 11) === 0 || y.length === 13){
      $('#error02').hide();
      console.log('YES')
      return true
    }
  }

}

module.exports = Validator
