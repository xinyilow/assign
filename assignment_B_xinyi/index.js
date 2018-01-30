var fs = require('fs');
var jsf = require('jsonfile');
var filename = ('jsfile.js');
var $ = require('jquery');
var jQuery = $;
var chunk = require('chunk');

//1641807090542

$(function(){

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
	var $result = false	 

	$('#button').click(function(){
		checkValidate()
		check()
		ISBN()
		datePublished()
		Title()
		Publisher()
		Author()
		Category_code()
		In_Stock()
	 	if ($result === false) {
			console.log('ERROR')
			$('#error00').hide();	
		}
		else { 
			checkform();
			console.log("YES")
			$('#error00').show();
		}
	})

	$('#input_number').on('keyup',function(){

		var x=this.value;
		var y=x.toString();
		if (y.length>13) {
			var z=y.substr((Number(y.length)-13),13);
			$('#input_number').val(z);
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

	function checkform(){
		var obj = {
			ISBN_Number:$('#input_number').val(),
			Date_published:$('#input_date_published').val(),
			Title:$('#input_title').val(),
			Publisher:$('#input_publisher').val(),
			Author:$('#input_author').val(),
			Category_code:$('#input_category_code').val(),
			In_Stock:$('#input_in_stock').val()
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
		$('.input').each(function(){
			let $this = $(this)
			if ($this.val() === ""){
				$('#error01').show()
				$result = false
			}
			else{
				$('#error01').hide()
				$result = true
			}
			return $result
		})
	}
})
	
	function datePublished() {
			let datePublished = $('#input_date_published').val();
			if ( datePublished == "") {
				$('#error04').show();
				$result = false;
			}
		
			else {
				$('#error04').hide();
				$result = true;
			}
			return $result;
	}

	function Title() {
			let Title = $('#input_title').val();
			if ( Title == "") {
				$('#error05').show();
				$result = false;
			}
		
			else {
				$('#error05').hide();
				$result = true;
			}
			return $result;
	}

	function ISBN() {
			let ISBN = $('#input_number').val();
			if ( ISBN == "") {
				$('#error10').show();
				$result = false;
			}
		
			else {
				$('#error10').hide();
				$result = true;
			}
			return $result;
	}

	function Publisher() {
			let Publisher = $('#input_publisher').val();
			if ( Publisher == "") {
				$('#error06').show();
				$result = false;
			}
		
			else {
				$('#error06').hide();
				$result = true;
			}
			return $result;
	}

	function Author() {
			let Author = $('#input_author').val();
			if ( Author == "") {
				$('#error07').show();
				$result = false;
			}
		
			else {
				$('#error07').hide();
				$result = true;
			}
			return $result;
	}

	function Category_code() {
			let Category_code = $('#input_category_code').val();
			if (  Category_code == "") {
				$('#error08').show();
				$result = false;
			}
		
			else {
				$('#error08').hide();
				$result = true;
			}
			return $result;
	}

	function In_Stock() {
			let In_Stock = $('#input_in_stock').val();
			if ( In_Stock == "") {
				$('#error09').show();
				$result = false;
			}
		
			else {
				$('#error09').hide();
				$result = true;
			}
			return $result;
	}

	function checkValidate(){
		let x = $('#input_number').val();
		let y = x.toString();
		let z = 0;

		for(var i = 0; i<y.length;i++){
			let l = 13- i;
			z += Number(y[i]) * l;
		}
		console.log(typeof y)
		console.log(z)
		if ((z % 11) !== 0 || y.length !== 13){
			$('#error02').show()
			console.log("NO")
			$result = false
		}
		else if ((z % 11) === 0 || y.length === 13){
			$('#error02').hide();
			console.log('YES')
			$result = true
		}
	}

	/*function error_label(input_id,message){
		let html=""
		$(input_id).after(html);
		$(input_id).closest('.field').addClass('error')
	}

	function reroo_label(input_id,message){
		let html=""
		$(input_id).after(html);
		$(input_id).closest('.field').removeClass('error')
	}*/