
class Member {

  constructor(
    input_number,
    input_date_published,
    input_title,
    input_publisher,
    input_author,
    input_category_code,
    input_in_stock,
  ) {
    this.ISBN_Number = input_number
    this.Date_Published = input_date_published
    this.Title = input_title
    this.Publisher = input_publisher
    this.Author = input_author
    this.In_stock = input_in_stock
    this.Category_code = input_category_code
  }

  transformObj() {
    return {
      'ISBN_Number' : this.ISBN_Number,
      'Date_Published' : this.Date_Published,
      'Title' : this.Title,
      'Publisher' : this.Publisher,
      'Author' : this.Author,
      'In_stock' : this.In_stock,
      'Category_code' : this.Category_code
    }
  }

}

module.exports = Member