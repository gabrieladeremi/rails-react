# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts 'clearing db'
Question.destroy_all

puts 'Creating Questions'

Question.create(
  [
    { title: 'How to check if a key is present in a Hash?', tag: 'Ruby' },
    { title: 'What is the difference between strings and symbol?', tag: 'Ruby' },
    { title: 'What happens if you have two object with same keys in Hash?', tag: 'Ruby' },
    { title: 'How to delete a given key from Hash?', tag: 'Ruby' },
    { title: 'How to check if two hashes are identical?', tag: 'Ruby' },
    { title: 'How to combine two hashes in Ruby?', tag: 'Ruby' },
    { title: 'How to get unique keys from two hashes?', tag: 'Ruby' },
    { title: 'What does the hash key?, key?, member? and include? methods in a hash?', tag: 'Ruby' },
    { title: 'What are blocks in Ruby?', tag: 'Ruby' },
    { title: 'What is createRoot method in React?', tag: 'React' },
    { title: 'What is the useEffect hook in React?', tag: 'React' },
    { title: 'How is state managed in React?', tag: 'React' },
    { title: 'In list, what is the essence ok key?', tag: 'React' },
    { title: 'what is the difference between class component and functional component?', tag: 'React' },
    { title: 'What is fetch and how is fetch implemented?', tag: 'JS' },
    { title: 'What is alternative to fetch function in Ruby?', tag: 'Ruby' },
    { title: 'What is difference between save and save! methods?', tag: 'Rails' },
    { title: 'What is difference between delete and destroy methods?', tag: 'Rails' },
    { title: 'What is difference between render and redirect?', tag: 'Rails' }
  ]
)

puts 'Questions Created successfully'
