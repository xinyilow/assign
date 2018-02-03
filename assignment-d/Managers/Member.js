
class Member{

	constructor(
		entrant_number,
		date_entry,
		name_entrant,
		picture_title,
		picture_location,
		category_code,
		camera_type
	)

	{
		this.Entrants_Number = entrant_number
		this.Date_Of_Entry = date_entry
		this.Name_Of_Entrant = name_entrant
		this.Picture_Title = picture_title
		this.Picture_Location = picture_location
		this.Category_Code = category_code
		this.Camera_Type = camera_type
	}


  transformObj() {
    return {
		'Entrants_Number':this.Entrants_Number,
		'Date_Of_Entry':this.Date_Of_Entry,
		'Name_Of_Entrant':this.Name_Of_Entrant,
		'Picture_Title':this.Picture_Title,
		'Picture_Location':this.Picture_Location,
		'Category_Code':this.Category_Code,
		'Camera_Type':this.Camera_Type,
	};
  }	
}

module.exports = Member