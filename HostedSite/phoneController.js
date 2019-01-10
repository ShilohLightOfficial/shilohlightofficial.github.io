/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * 
 * remote controller that sends a variable to all the listening devices
 * phone only
 */

// server variables

var dataServer;
var pubKey = 'pub-c-d41b58e7-05c8-423d-8ff5-bd42356a9845';
var subKey = 'sub-c-8789e4ac-135a-11e9-b4a6-026d6924b094';

//input variables

var slideNumber=0;
var totalImages = 4;

var swipeStartPos = {};
var swipeEndPos = {};

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "powerpoint";

function setup() 
{
  
    
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  setShakeThreshold(20);  //sets the sensitivity of the deviceShaken function

   // initialize pubnub
  dataServer = new PubNub(
  {
    publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
      
  });
  
    background(255);
    noStroke();
    fill(0);  
    textSize(90);
    text("!!!SWIPE!!!", width/2, height/2);
    
    swipeStartPos  = {
        x:0,
        y:0
    }
    swipeEndPos  = {
        x:0,
        y:0
    }
    
    
}

function draw() 
{


}

//function touchStarted(){
//    
//    swipeStartTime = frameCount;
//    if (touches[0] != null){
//        swipeStartPos.x = touches[0].x;
//        swipeStartPos.y = touches[0].y;
//    }
//}
//
//function mousePressed(){
//    
//    swipeStartTime = frameCount;
//    
//    swipeStartPos.x = mouseX;
//    swipeStartPos.y = mouseY;
//}

//function touchEnded() {
//    
//    if (touches[0] != null){
//        swipeEndPos.x = touches[0].x;
//        swipeEndPos.y = touches[0].y;
//    }
//    
//    if (dist(swipeStartPos.x,swipeStartPos.y, swipeEndPos.x,swipeEndPos.y) > 10) {
//        
//        swipeEndTime = frameCount;
//        
//        if ((swipeEndTime - swipeStartTime) < 15){
//            
//            slideNumber = ((slideNumber+1)<=(totalImages-1)) ? slideNumber+=1 : 0; //shorthand for conditional assignment
//
//
//            //console.log(slideNumber);
//
//            //publish the number to everyone.
//            dataServer.publish(
//            {
//                channel: channelName,
//                message: 
//                {
//                slide: slideNumber      
//                }
//            });
//            
//        } 
//        
//    } else {
//        
//        console.log("Not Long Enough swipe");
//    }
//}
function deviceTurned() {
    
    
    slideNumber = ((slideNumber+1)<=(totalImages-1)) ? slideNumber+=1 : 0; //shorthand for conditional assignment


            //console.log(slideNumber);

            //publish the number to everyone.
            dataServer.publish(
            {
                channel: channelName,
                message: 
                {
                slide: slideNumber      
                }
            });
}

//function mouseReleased() {
//    
//    swipeEndPos.x = mouseX;
//    swipeEndPos.y = mouseY;
//    
//    if (dist(swipeStartPos.x,swipeStartPos.y, swipeEndPos.x,swipeEndPos.y) > 10) {
//        
//        swipeEndTime = frameCount;
//        
//        if ((swipeEndTime - swipeStartTime) < 15){
//            
//            slideNumber = ((slideNumber+1)<=(totalImages-1)) ? slideNumber+=1 : 0; //shorthand for conditional assignment
//
//
//            //console.log(slideNumber);
//
//            //publish the number to everyone.
//            dataServer.publish(
//            {
//                channel: channelName,
//                message: 
//                {
//                slide: slideNumber    
//                }
//                
//            });
//            
//            console.log("Successfull Swipe");
//        }  else {
//            
//            
//            console.log("Not Quick Enough swipe");
//        }
//        
//    } else {
//        
//        console.log("Not Long Enough swipe");
//    }
//}


