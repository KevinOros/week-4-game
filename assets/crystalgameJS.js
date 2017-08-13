<script type="text/javascript">
  $( document ).ready(function() {
    var numberToGuess = 58;
    var counter = 0;
    var number1 = [15];
    var number2 = [5];
    var number3 = [3];
    var number4 = [7];
    $('number1 number2 number3 number4').text(numberToGuess);
    for (var i=0; i< number1.length; i++){
      var imageCrystalB = $('<img>');
      
      imageCrystalB.attr('data-num', number1[i]);
      imageCrystalB.attr('src', 'http://ua.bootcampcontent.com/UA-Coding-Bootcamp/07-2017-Class-Repository-FSF/raw/111e158267200cdc3a32c462e1f5d43edcb0f081/04-jquery/02-Homework/Instructions/Images/blue.png');
      imageCrystalB.attr('alt', 'blue crystal');
      imageCrystalB.addClass('crystalImage');
      $('#crystals').append(imageCrystalB);
    }
    for (var i=0; i< number2.length; i++){
      var imageCrystalG = $('<img>');
      
      imageCrystalG.attr('data-num', number2[i]);
      imageCrystalG.attr('src', 'http://ua.bootcampcontent.com/UA-Coding-Bootcamp/07-2017-Class-Repository-FSF/raw/111e158267200cdc3a32c462e1f5d43edcb0f081/04-jquery/02-Homework/Instructions/Images/green.png');
      imageCrystalG.attr('alt', 'green crystal');
      imageCrystalG.addClass('crystalImage');
      $('#crystals').append(imageCrystalG);
    }
    for (var i=0; i< number3.length; i++){
      var imageCrystalR = $('<img>');
      
      imageCrystalR.attr('data-num', number3[i]);
      imageCrystalR.attr('src', 'http://ua.bootcampcontent.com/UA-Coding-Bootcamp/07-2017-Class-Repository-FSF/raw/111e158267200cdc3a32c462e1f5d43edcb0f081/04-jquery/02-Homework/Instructions/Images/red.png');
      imageCrystalR.attr('alt', 'red crystal');
      imageCrystalR.addClass('crystalImage');
      $('#crystals').append(imageCrystalR);
    }
    for (var i=0; i< number4.length; i++){
      var imageCrystalY = $('<img>');
      
      imageCrystalY.attr('data-num', number4[i]);
      imageCrystalY.attr('src', 'http://ua.bootcampcontent.com/UA-Coding-Bootcamp/07-2017-Class-Repository-FSF/raw/111e158267200cdc3a32c462e1f5d43edcb0f081/04-jquery/02-Homework/Instructions/Images/yellow.png');
      imageCrystalY.attr('alt', 'yellow crystal');
      imageCrystalY.addClass('crystalImage');
      $('#crystals').append(imageCrystalY);
    }
    
    $('#reset').on('click', function(){
        reset();
    });
    function reset(){
      counter = 0;      
      $('#yourNumber').text(counter);
      number1 = [5];
      number2 = [3];
      number3 = [7];
      number4 = [10];
      $('number1 number2 number3 number4').text(numberToGuess);
    };
    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);
      if (counter == numberToGuess){
        alert('You won!');
        reset();
      }else if( counter > numberToGuess){
        alert('You lost!');
        reset();
      }
    });