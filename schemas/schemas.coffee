mongoose = require 'mongoose'
Schema = mongoose.Schema


Section = new Schema(
  title: String
  link: String
  credit: String
  grade: String
  category: String
  htmlId: String
  button: String
  img: String
)

Section = mongoose.model 'Section', Section

module.exports =
  Section : Section

