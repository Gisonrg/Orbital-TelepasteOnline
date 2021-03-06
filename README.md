Orbital-TelepasteOnline
=======================
Refer to the other two gits for more information
* OS X client: https://github.com/null09264/Telepaste-Mac.git
* iOS client: https://github.com/null09264/Telepaste-iOS.git
* (The iOS client is already available in Apple AppStore, v1.1 http://itunes.apple.com/cn/app/telepaste/id813168221?mt=8)


##Telepaste##
###[Online Demo Site](http://gisonrg.github.io/Orbital-TelepasteOnline/)###

<img src='images/readme/Icon.png'alt='Logo' height=200px width = 200px/>

Orbital Team: **Undefined**:{Jiang Sheng, Wang Jinghan}

Aimed Level: Gemini

###Ideation###
**What is Telepaste?**

In a word: ***a powerful QR code utility app on modern platform.***

However, it is not that simple:

For years, people are always seeking a way of fast data exchange between devices. QR code is one of the popular choices these days. That’s why we created Telepaste. It is a smart tool for users who want to exchange short text message like phone numbers or URLs in a fast and elegant way using QR codes.

Telepaste uses QR codes as a media. It is able to capture contents automatically from your clipboard and generate QR code before you open the app. You don't have to press any button to generate the code! Telepaste also supports auto-copying the decoded contents to the clipboard, which will make your life more convenient.

We are now trying to make it an all-platform-supported app.

**Liftoff slides and video?**

It seems that our group has changed our topic (Sorry - -!), so check the slides for team ***Undefined*** if it interests you. 

*(We are behind the Great Fire Wall of China, so maybe you need to jump to the video on Youtube manually)*

**Typical Usage**

*Situation 1*

	Some one send you an URL on your iPhone: you want to open it on your laptop, but you find the URL is too long and complex to type.

*Solution*
	
	1. Copy the link on your phone.
	2. Open Telepaste.
	3. With the auto-generated QRcode, use the Telepate Website or the Macintosh client to scan the code.
	4. You have the link on your computer now. The link detection allows you to access the link with a single click. (Mac client)
	
*Situation 2*

	You make a new friend in a party, but the problem is, how to exchange your contact information in a fast and accurate way?

*Solution*
	
	1. Open Telepaste.
	2. Choose your contact details to generate the QRcode
	3. Scan each other's code.
	4. Invite him/her for dinner next time.

*Situation 3*

	Recieved some messages with your laptop, but you want to record them in your phone.

*Solution*
	
	1. Copy the messages
	2. Open Telepaste (Mac or Webpage).
	3. Scan with your iPhone
	4. The code is auto saved and you can find the records whenever you want.
	
###Update User Story###
*Situation 4*

	You generate a QR code, but you would like to share it with your friends.

*Solution*
	
	The web version will support sharing to Facebook and other social media, as well as by email.

* * *

###Planned Features###
> As a customer, I may be interested in:

* QRcode Generate **(Done)**
	* Generate code from text (All characters avaliable in UTF-8, numbers, URLs)
	* Generate code from device clipboard
* QRcode Decode 
	* Decode from camera scanning **(Done)**
	* Decode from uploaded picture
* Others
	* Lovely and modern UI (Everyone loves Flat!) **(Done)**
	* Save the generated QRcode **(Done)**
	* One-click-share to your favorite social network
	* NO Wi-Fi/Bluetooth connection needed (Mobile/Mac version only) **(Done)**
	* App community provided, including Twitter, Facebook, Weibo and Tumblr, for users' communication and feedback.
	* App Feedback **(Done)**
	* All platform support: iOS, Android (planned), Web, Mac **(Done except for Android)**

* * *

###Reference###
***(Updated to June 30th)***

* Web UI
	* [Flat UI](http://designmodo.github.io/Flat-UI/): a Twitter Bootstrap Framework
	* [Dribbble](https://dribbble.com): a great website for finding design element
* Javascript Plugin
	* [jQuery](http://jquery.com): Of course
	* [flexibleArea.js](http://flaviusmatis.github.io/flexibleArea.js/): A jQuery plugin that dynamically updates textarea's height to fit the content
	* [ZeroClipboard](https://github.com/zeroclipboard/zeroclipboard): A library provides and easy way to copy text to the clipboard
	* ***[Jquery.webcamqrcode](http://marcbuils.github.io/jquery.webcamqrcode/)***: Thanks to this brilliant French friend, the web version cannot live without his work. 
* iOS Development
	* [Programming In Objective-C](http://www.amazon.com/Programming-Objective-C-Edition-Developers-Library/dp/0321967607): a must-read book
	* Zbar code generating library and Kentaro Fukuchi's libQREncode library
	* Rebekah Claypool's CoinView library
	* Hang Chen's CHTumblrMenuView library
	* Matt's MGBox library
* OS X Development
	* Google Zxing code generating library
	* Apple's offical references
* Others...
	* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/): It's hard to imagine a programmer who doesn't know how to write Markdown document
	* [Github](https://github.com/): I'm Feeling Lucky!


	
* * *

###Project Log###
**Timeline**

1. Web version prototype: by Milestone 1 ***(Done)***
2. OSX version completed in Jun 18. ***(Done)***
3. Web version Beta finished: By the end of June (around Milestone 2) ***(Done)***
4. iOS version 2.0 prototyping and testing (around 10, July)
5. Web version and iOS version 2.0 Released. (around Milestone 3)

###Prototype and Summary###

####Web version####

For the first month, we mainly did some self-learning stuffs and finalized our idea. We decided to develop the web version for the Telepaste first. And in the past few days, we have developed a working prototype which now could scan QR code using laptop's camera. It needs your browser to support Flash, which is supported by most of modern browsers. 

We tried a Html 5 camera plugin but it doesn't support well for languages like Chinese and Japanese, as well as browsers like IE and Safari. In the next phase, we will finalize the beta version to make it a good QRcode app.

**(Update)**

This month, we finalize the reading and generating function for the web app. The following month, we will add sharing function for it.

Here are some screen shoot for the prototype:

**Homepage**

<img src='images/readme/p1.png' alt='Homepage' width=600px />

**Camera Scan**

<img src='images/readme/p2.png' alt='Scan' width=600px />

**Generation(New)**

<img src='images/readme/p3.png' alt='Scan' width=600px />

* * *
####iOS version####

iOS version is already available in AppStore, what we plan to do in Orbital is to upgrade the functionalities. Compared with current v1.1, v2.0 will allow users to scan the codes in their photo album as well as make their own codes. Telepaste is going to support detection of different rules according to the QR generation standards. (For example, for sending an SMS, the decoded message should be {smsto:<phone number>:<messages>})
######iPhone######
<img src='images/readme/iPhone1.PNG' alt='Homepage' width=200px />
1
<img src='images/readme/iPhone2.PNG' alt='Homepage' width=200px />
2
<img src='images/readme/iPhone4.PNG' alt='Homepage' width=200px />
3

<img src='images/readme/iPhone3.PNG' alt='Homepage' width=200px />
4
<img src='images/readme/iPhone5.PNG' alt='Homepage' width=200px />
5
<img src='images/readme/iPhone6.PNG' alt='Homepage' width=200px />
6

> 
**1:** Home Page
> 
**2:** Scanning Page
> 
**3:** Dashboard
> 
**4:** Collection
> 
**5:** Geneartion Choices
> 
**6:** Settings

______
######iPad######

<img src='images/readme/iPad1.PNG' alt='Homepage' width=300px />
1
<img src='images/readme/iPad2.PNG' alt='Homepage' width=300px />
2

<img src='images/readme/iPad3.PNG' alt='Homepage' width=300px />
3
<img src='images/readme/iPad4.PNG' alt='Homepage' width=300px />
4

> 
**1:** Home Page
> 
**2:** Scanning Page
> 
**3:** Dashboard
> 
**4:** Collection


####Mac version####
Mac version supports detection of pasteboard actions. The code it displays will always updated to the lastest pasteboard text contents. You can save the code to png pictures or read from pictures to decode contents. Of course for those Macs with an iSight camera, Telepaste for Mac also supports directly reading the code from camera video stream. Moreover, shortcuts are supported. Save: cmd+s; Open: cmd+o; Scan: cmd+b; Cancel: cmd+t;

<img src='images/readme/Mac1.png' alt='Homepage' width=600px />
1
<img src='images/readme/Mac2.png' alt='Homepage' width=600px />
2
<img src='images/readme/Mac3.png' alt='Homepage' width=600px />
3
<img src='images/readme/Mac4.png' alt='Homepage' width=600px />
4

> 
**1:** Home Page
> 
**2:** Scanning Page
> 
**3:** Save Panel
> 
**4:** Shortcuts


**Thank you for reading this file**
