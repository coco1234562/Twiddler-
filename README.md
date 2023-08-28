# immersion-2023-08-twiddler
Twiddler 


Operation Spark | Greenlight

Project: Twiddler

This is a mostly-empty repo, with a file that creates some data that represents twitter users and their tweets. It's the data you would expect to see if you had created a twitter account and followed a few people.

Repository: https://github.com/OperationSpark/immersion-2023-08-twiddler
Instructions
Twiddler

Important: Before you begin, be sure you understand how to fork, clone, and push your work up to GitHub by reviewing the Git Workflow Overview.

You can access the repo for this coding assignment on GitHub at https://github.com/OperationSpark.
What’s Already Here

This is a mostly-empty repo, with a file that creates some data that represents twitter users and their tweets. It’s the data you would expect to see if you had created a twitter account and followed a few people. (More tweets appear over time.)

That file is called data-generator.js. You don’t need to understand the code that’s in it, but here’s what it does:

    Creates two global variables, users and streams.

        users is an array of strings – all the usernames that you’re following.

        streams is an object with two properties, users and home.

        streams.home is an array of all tweets from all the users you’re following.

        streams.users is an object with properties for each user. streams.users.shawndrost has all of shawndrost‘s tweets.

    Kicks off a periodic process that puts more data in streams.

You’ll be working in index.js. Note: The generated tweets will be displayed in reverse chronological order.

Bare Minimum Requirements

<DONE!!!!> Show the user new tweets somehow. (You can show them automatically as they’re created, or create a button that displays new tweets.)

<DONE!!!!> Display the timestamps of when the tweets were created. This timestamp should reflect the actual time the tweets were created, and should not just be hardcoded.


<TO DO>  Design your interface so that you want to look at and use the product you’re making.


<DONE!!!> Allow the user to click on any username to see that user’s timeline.


<DONE!!!!> Show when the tweets were created in a human-friendly way (eg “10 minutes ago”). You’ll want to use a library to do this work for you. A very popular libary is called Moment.js

<KINDA DONE!!!!> Allow the user to tweet. (This is going to require you to understand a little more about data_generator.js, but you shouldn’t need to modify anything in that file.)



Advanced

<TO DO> Add bootstrap

<TO DO> Allow the user to click on their own username to see their own timeline.

<TO DO> Allow the user to click on a hashtag to see all the tweets with that hashtag in it.

Github Pages

To submit your twiddler, set up your fork with Github Pages: https://pages.github.com/.

You want to create a “Project Site”.

    Send the url to your Slack channel

