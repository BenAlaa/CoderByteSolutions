function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i][0];
  }
  return sum;
}

function highestCard(arr) {
  var highest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] > highest) highest = arr[i][1];
  }
  if (highest == 1) return "ace";
  if (highest == 2) return "two";
  if (highest == 3) return "three";
  if (highest == 4) return "four";
  if (highest == 5) return "five";
  if (highest == 6) return "six";
  if (highest == 7) return "seven";
  if (highest == 8) return "eight";
  if (highest == 9) return "nine";
  if (highest == 10) return "ten";
  if (highest == 11) return "jack";
  if (highest == 12) return "queen";
  if (highest == 13) return "king";
  if (highest == 14) return "ace";
}

function cardToArr(str) {
    if (str == "ace") return [1, 1];
    if (str == "two") return [2, 2];
    if (str == "three") return [3, 3];
    if (str == "four") return [4, 4];
    if (str == "five") return [5, 5];
    if (str == "six") return [6, 6];
    if (str == "seven") return [7, 7];
    if (str == "eight") return [8, 8];
    if (str == "nine") return [9, 9];
    if (str == "ten") return [10, 10];
    if (str == "jack") return [10, 11];
    if (str == "queen") return [10, 12];
    if (str == "king") return [10, 13];
}

function BlackjackHighest(strArr) { 

  var cards = strArr.map(cardToArr);
  
  // Aces default to low, check if we're over even with low aces
  if (sum(cards) > 21) return "above " + highestCard(cards);

  for (var i = 0; i < cards.length; i++) {
    if (sum(cards) == 21) return "blackjack " + highestCard(cards);
    if (cards[i][0] == 1 && sum(cards) <= 11) cards[i] = [11, 14];
  };

  if (sum(cards) == 21) return "blackjack " + highestCard(cards);
  return "below " + highestCard(cards);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BlackjackHighest(readline());









































function BlackjackHighest(arr) { 
  var cards={two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10, jack:10.1, queen:10.2, king:10.3, ace:1};
  var high="two";
  var ace=false;
  var total=0;
  for (var i=0;i<arr.length;i++)
  {
    if (arr[i]=="ace") ace=true;
    if (cards[high]<cards[arr[i]])
    {
      high=arr[i];
    }
    total+=Math.floor(cards[arr[i]]);
  }
  if (ace && total+10<=21)
  {
    total+=10;
    high="ace";
  }
  if (total==21) return "blackjack "+high;
  if (total<21) return "below "+high;
  return "above "+high;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BlackjackHighest(readline());







































function BlackjackHighest(strArr) {
  var cards={};
  var sum=0;
  var aceCard=false;
  var list=["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
  list.forEach(function(a, i){
    if(!cards[a]){
      a==="jack"||a==="queen"||a==="king"?cards[a]={value:10,rank:i+2}:a==="ace"?cards[a]={value:11,rank:i+2}:cards[a]={value:i+2,rank:i+2};
      }
    });
    strArr.sort(function(a, b){
    if(cards[a].rank<cards[b].rank){return -1;}
    else if(cards[a].rank>cards[b].rank){return 1;}
    return 0;
    }).forEach(function(a){
      a==="ace"?aceCard=true:0;
      sum+=cards[a].value;
    });
    if(sum>21&&aceCard){
      sum-=10;
      strArr.pop();
    }                                                                                                                                                                                                                                      
    return sum===21?"blackjack"+" "+strArr.pop():sum>21?"above"+" "+strArr.pop():"below"+" "+strArr.pop() ;
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  BlackjackHighest(readline());
