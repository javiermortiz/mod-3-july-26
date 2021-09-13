# Exercise: HTTP Request Components Solution

1. Click a link to an Instagram post that your friend thought was funny.
   - method: GET
   - URI: /p/funny-post-name
   - headers:
     - Host: instagram.com
   - body: none
2. Edit your Facebook comment
   - method: PUT/PATCH
   - URI: /userId/comments/comment-id
   - headers:
     - Host: facebook.com
     - Content-Type: x-www-form-urlencoded
   - body:
     - contains information like the text that I want to edit in my comment and my
       reaction
3. Upload your sick mixtape to SoundCloud
   - method: POST
   - URI: /tracks
   - headers:
     - Host: soundcloud.com
     - Content-Type: audio/mpeg
   - body: the mixtape
4. Submit an Amazon review for a product through an HTML form
   - method: POST
   - URI: /product-name/review
   - headers:
     - Host: amazon.com
     - Content-Type: x-www-form-urlencoded
   - body: the product review, the rating of the product
5. Sell one of your stocks on Robinhood
   - method: PUT/PATCH
   - URI: /stock-tag
   - headers:
     - Host: robinhood.com
     - Content-Type: x-www-url-form-encoded
   - body: number of stocks
6. Browse GIPHY for a cute puppy gif
   - method: GET
   - URI: /cute-puppy-gif
   - headers:
     - Host: giphy.com
   - body: none
7. Send a picture to a friend on Snapchat
   - method: POST
   - URI: /friend-name/snap
   - headers:
     - Host: snapchat.com
     - Content-Type: image/png
   - body: the picture you want to send