# newsletter.rb
# Generates this week's newsletter
# Use:
# $ ruby newsletter.rb
require 'pry'
#########################
# Data for the newsletter
#########################

CAMPUS = {
  "name": "Springfield",
  "address": "171 Maple St, Springfield, MA 01105",
}
DATE = "Jun 13, 2019"

SUBSCRIBERS = ["rhona@grimes.info", "cedricschmidt@robel.io", "edmond@ko.org", "bryant@cummingsfisher.biz", "alverta@bernhard.name", "lucinda@beckerbogisich.biz", "wilhelminaullrich@hartmann.info", "shelby@kuhlmankilback.co", "katheruecker@lockman.net", "benedictblanda@collierkuhn.net", "ivory@collins.com", "argelia@vonruedenparisian.biz", "bo@rippin.net", "alfonzoklein@robel.io", "forest@herman.name", "denishahn@west.org", "alfredbrown@wuckert.net", "joan@jacobi.co", "trinidad@macgyver.co", "shaynepurdy@schaeferwisozk.co", "kianafritsch@lesch.biz", "raymundoruel@legros.net", "thomasenaboehm@keeling.net", "lynwood@lakin.biz", "julianpadberg@mosciski.com", "coleen@cormierparker.com", "luiswisoky@mcdermottpadberg.com", "gaylebogan@considine.net"]
UNSUBSCRIBED = ["cedricschmidt@robel.io", "alverta@bernhard.name", "julianpadberg@mosciski.com", "bo@rippin.net", "gaylebogan@considine.net"]

ARTICLES = [
  {"author": "Destiny Blanda Bruen II", "title": "Mining", "text": "The orthogonal features, when combined, can explode into complexity."},
  {"author": "Robin Flatley Hilpert", "title": "Retail", "text": "In our daily lives as programmers, we process text strings a lot. So I tried to work hard on text processing, namely the string class and regular expressions. Regular expressions are built into the language and are very tuned up for use."},
  {"author": "Olevia Torphy Kuvalis", "title": "Technology", "text": "Imagine you are writing an email. You are in front of the computer. You are operating the computer, clicking a mouse and typing on a keyboard, but the message will be sent to a human over the internet. So you are working before the computer, but with a human behind the computer."},
  {"author": "Dr. Crystle Kovacek Denesik", "title": "Legal", "text": "Most programs are not write-once. They are reworked and rewritten again and again in their lived. Bugs must be debugged. Changing requirements and the need for increased functionality mean the program itself may be modified on an ongoing basis. During this process, human beings must be able to read and understand the original code. It is therefore more important by far for humans to be able to understand the program than it is for the computer."},
  {"author": "Alfred Jast Hermann", "title": "Real-Estate", "text": "I didn't work hard to make Ruby perfect for everyone, because you feel differently from me. No language can be perfect for everyone. I tried to make Ruby perfect for me, but maybe it's not perfect for you. The perfect language for Guido van Rossum is probably Python."},
  {"author": "Michale Bruen Boehm", "title": "Consulting", "text": "Everyone has an individual background. Someone may come from Python, someone else may come from Perl, and they may be surprised by different aspects of the language. Then they come up to me and say, 'I was surprised by this feature of the language, so therefore Ruby violates the principle of least surprise.' Wait. Wait. The principle of least surprise is not for you only."},
  {"author": "Tony Keeling Cartwright", "title": "Design", "text": "Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines."},
]

#########################
# helpers to calculate some info for the newsletter
#########################

def calculate_recipients
  # TODO (Step 3) - Fix, not working
  SUBSCRIBERS.filter do |email|
    !UNSUBSCRIBED.include?(email)
  end
end

def first_n_articles(number_of_articles)
  ARTICLES.first(number_of_articles)
end

#########################
# helpers to print parts of the newsletter
#########################

def print_recipients
  puts calculate_recipients.join(", ")
end

def print_subject
  puts "#{format_campus_location(CAMPUS)} Newsletter - #{format_week}"
end

def print_one_article(article)
  # TODO (Step 4) - format article with title, byline, and text
  puts article[:title]
  puts "by: #{article[:author]}"
  puts article[:text]
  puts ""
end

def print_many_articles(articles)
  # TODO (Step 5) - should print all the articles, not just the first one
  articles.each do |article|
    print_one_article(article)
  end
end

def print_newsletter(number)
  puts "Generating this week's newsletter..."
  puts ""
  print "Subject: "
  print_subject
  print "Recipients: "
  print_recipients
  puts "Body:"
  puts "#{format_campus_location(CAMPUS)} Newsletter - #{format_week}"
  articles = first_n_articles(number)
  print_many_articles(articles)
  puts format_footer(CAMPUS)
end

#########################
# formatting helper methods for printing the newsletter
#########################

def format_campus_location(campus)
  # TODO (Step 2) - Fix, not showing name.
  "Flatiron #{campus[:name]}"
end

def format_week
  DATE
end

def format_footer(campus)
  "Work hard, be nice, and have an epic week! //\n Flatiron School · #{campus[:name]} · #{campus[:address]} "
end

#########################
# entry point - generates the actual newsletter
#########################

def generate_newsletter(input=nil)
  if input == nil
    # if there's no input number specified, print just the first 3 articles
    print_newsletter(3)
  else
    # if a number of articles is specified, print that many articles
    # TODO (Step 6) - Fix, not working 
    number_of_articles = input.to_i
    print_newsletter(number_of_articles)
  end
end

# uses the input from the command line to generate the newsletter
def run
  # ARGV is an array of strings with the arguments from the command line
  if ARGV.length < 2
    generate_newsletter(ARGV[0])
  else
    puts "Newsletter maker. \nUsage: ruby newsletter.rb [number]\nOptionally, pass in a number of articles to include in the newsletter"
  end
end

# When we run the file from the command line, like
# $ ruby newsletter.rb
# call the 'run' method
# run

binding.pry
"start"
