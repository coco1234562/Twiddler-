$(document).ready(() => {
  const $body = $('body');
  $body.html(''); //empty the body 
  
  

  //STEP ONE: Allow the user to click on any username to see that user’s timeline
  function showUserTimeline(username) {

    // get the tweets of the user with the given username
    const userTweets = streams.users[username];
   
    // create a new element to display the user's timeline
    const $timeline = $('<div></div>');
    $timeline.append(`<h2>@${username}'s Timeline</h2>`);
  
    // create and append the tweets to the timeline element
    const $tweets = createTweets(userTweets);
    $timeline.append($tweets);
  
    // empty the body and append the timeline element to it
    const $body = $('body');
    $body.html('');
    $body.append($timeline);
    
  }

  function createTweets(tweetsArray){
    const $tweets = tweetsArray.map((tweet) => {
      //make a box to put tweets inside 
      const $tweetBox = $('<div class="tweet-box"></div>');

    
      //const $tweet = $('<div></div>');
      const $username = $("<p class='username'></p>").text(`@${tweet.user}`);    
      const $message = $("<p class='message'></p>").text(tweet.message);
      const $tags = $("<p class='tags'></p>").text(tweet.message.tags); 
      
      /*
      Show when the tweets were created in a human-friendly way (eg “10 minutes ago”). 
      */
      const $howLongAgo =  $("<p class='timestamp'></p>").text(moment(tweet.created_at).fromNow());

      /*
      Display the timestamps of when the tweets were created.
      */
      const $timestamp = $("<p class='timestamp'></p>").text(moment(tweet.created_at).format('MMMM Do YYYY, h:mm:ss a')); // Format the timestamp

      $username.on("click", function() {
        showUserTimeline(tweet.user);
      });

      //tweet.messsage.tags
      $tags.on("click", function() {
        showUserTimeline(tweet.message);
      });
      


      $tweetBox.append($username);
      $tweetBox.append($message);
      $tweetBox.append($tags);

      //appends the time to the tweet 
      $tweetBox.append($howLongAgo);
      $tweetBox.append($timestamp);

      return $tweetBox;
    });

    return $tweets;
  }


    // Add an input field for users to enter their tweet
    const $inputField = $('<input type="text" id="input-field" placeholder="What\'s happening?">');
    const $sendButton = $('<button>Send</button>');

    // Add an event listener to the send button
    $sendButton.on('click', () => {
      // Get the value of the input field
      const message = $('#input-field').val();

      
      // Create a new tweet object
      const tweet = {
        user: 'visitor',
        message: message,
        created_at: new Date()
      };
      
      // Add the new tweet to the streams object
      //use unshift to add it to the front 
      streams.home.unshift(tweet);
      if (!streams.users.visitor) {
        streams.users.visitor = [];
      }
      streams.users.visitor.unshift(tweet);

      // Clear the input field
      $('#input-field').val('');

      // Append the input field and send button to a container element
        const $inputContainer = $('<div></div>');
        $inputContainer.append($inputField, $sendButton);

      // Append the input field and send button to the body
      $('body').append($inputField, $sendButton);


      // Update the timeline with the new tweet
      updateTimeline();
    });



  function updateTimeline() {
    // Get all tweets from streams.home and create tweet elements for them
    const allTweets = streams.home;
    const $tweets = createTweets(allTweets);
  
    // Empty the body and append all tweet elements to it
    $('body').html('');
  
    //this is the banner at the top 
    const $banner = $('<div class="banner"><h1>Welcome to Twiddler</h1></div>');
    $('body').append($banner);
  
    $('body').append($inputField, $sendButton, ...$tweets);
  }
  
  updateTimeline();
});