mongoose = require 'mongoose'
Schema = mongoose.Schema


classGrades = new Schema(
  grade: String
  credit: String
)

Section = mongoose.model 'Section', Section

module.exports =
  Section : Section
