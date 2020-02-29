show tables;


INSERT INTO users (name, username, password, image, join_date)
VALUES
    ("Conan O'Brien", "nightshow" ,"pbkdf2:sha256:150000$f1VrgcOl$0997e5a520cb87678efcecbd7911b17d28f68e9ca936ed4288a7c3968eb3a70a","http://127.0.0.1:5000/_uploads/photos/conan.jpg","2018-01-26 16:24:38"),
    ("Joelle Miller", "runner"    ,"pbkdf2:sha256:150000$f1VrgcOl$0997e5a520cb87678efcecbd7911b17d28f68e9ca936ed4288a7c3968eb3a70a","http://127.0.0.1:5000/_uploads/photos/joelle.jpg","2018-06-10 10:20:30"),
    ("Chris Farrugia", "foxcode"  ,"pbkdf2:sha256:150000$f1VrgcOl$0997e5a520cb87678efcecbd7911b17d28f68e9ca936ed4288a7c3968eb3a70a","http://127.0.0.1:5000/_uploads/photos/chris.png","2018-08-12 04:55:00"),
    ("James Gauci", "eyetech"     ,"pbkdf2:sha256:150000$f1VrgcOl$0997e5a520cb87678efcecbd7911b17d28f68e9ca936ed4288a7c3968eb3a70a","http://127.0.0.1:5000/_uploads/photos/james.jpg","2019-02-13 07:33:12"),
    ("Charles Hoskinson","cardano","pbkdf2:sha256:150000$f1VrgcOl$0997e5a520cb87678efcecbd7911b17d28f68e9ca936ed4288a7c3968eb3a70a","http://127.0.0.1:5000/_uploads/photos/charles.jpg","2020-01-04 11:17:09");


INSERT INTO tweets (user_id, date_created, text)
VALUES
(1, "2018-01-28 16:25:38", "we are on a planet in outer space"),
(2, "2018-06-10 10:20:30", "Forget cars, is anyone working on a self-driving government?"),
(2, "2018-08-10 10:20:03", "Taken moments before I was asked to leave the British Museum. "),
(3, "2018-08-12 04:55:00", "This fancy London hotel won't change me. #UKInfluencer"),
(1, "2018-12-20 16:24:38", "Just bought a white noise machine which only plays sounds of Joe Biden reading TV guide recaps of Succession."),
(1, "2019-03-26 16:24:38",  "I can't get over the fact that, no matter how hard I try, this particular tweet is going absolutely nowhere."),
(3, "2019-08-12 05:50:00", "Today, I bashed people on Twitter, ate junk food and went to a strip club. How did you celebrate “President’s Day”?"),
(4, "2019-09-13 07:33:12", "Scientists have detected an unexplainable radio signal coming from space. In other words, now even God has a podcast."),
(4, "2019-10-13 07:35:12", "Ha! Jeff Bezos could have bought that same house in Burbank for just $163 million."),
(5, "2020-01-04 12:17:09", "This Valentine's Day, get your wife the gift that says 'free shipping if bundled with three or more toiletries.'"),
(5, "2020-02-05 11:17:09", "I'm glad all this Trump drama is finally over.");



from app import db, Users, Followers, Tweets

-- Get the Joelle followers username
joelle_followed_by = Followers.query.filter_by(followee=2).all()
for followers_row in joelle_followed_by: print(followers_row.followed_by.username)

      



-- Get all tweeds of Joelle 1st follower
joelle_1st_follower_row = Followers.query.filter_by(followee=2).first()
joelle_1st_follower_row.followed_by.tweet_posts.all()


-- Get the Joelle following username
joelle_following = Followers.query.filter_by(follower=2).all()
for followers_row in joelle_following: print(followers_row.following.username)

following_tweets_dict={}
following_tweets_list=[]
for followers_row in joelle_following:
    tweets_of_one_followee = followers_row.following.tweet_posts.all()
    for tweet in tweets_of_one_followee: 
        following_tweets_dict.update({tweet.id : tweet})

for key, value in following_tweets_dict.items():
            following_tweets_list.append(value)


