# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Whiskey.destroy_all

Whiskey.create!([{
  name: "Snowflake",
  distillery: "Stranahans",
  origin: "Denver, Colorado",
  proof: 94
},
{
  name: "W.L. Weller 12",
  distillery: "Buffalo Trace",
  origin: "Frankfort, Kentucky",
  proof: 90
},
{
  name: "Pappy Van Winkly 23 Year",
  distillery: "Buffalo Trace",
  origin: "Frankfort, Kentucky",
  proof: 96
},
{
  name: "Elijah Craig Barrel Proof",
  distillery: "Elijah Craig",
  origin: "Louisville, Kentucky",
  proof: 133
},
{
  name: "A'Bumadh",
  distillery: "Aberlour",
  origin: "Strathspey, Scotland",
  proof: 121
},
{
  name: "18 Year Limited Reserve",
  distillery: "Jameson",
  origin: "Dublin, Ireland",
  proof: 80
},
{
  name: "Doublewood 12",
  distillery: "Balvenie",
  origin: "Dufftown, Scotland",
  proof: 86
},
{
  name: "Black",
  distillery: "Jim Beam",
  origin: "Clermont, Kentucky",
  proof: 86
},
{
  name: "Dair Ghaelach",
  distillery: "Midleton",
  origin: "Midleton, Ireland",
  proof: 116
},{
  name: "Hibiki 17",
  distillery: "Suntory",
  origin: "Osaka, Japan",
  proof: 86
}])

p "Created #{Whiskey.count} whiskies"
