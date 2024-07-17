document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = 'também te amo.';
    document.getElementById('response').style.display = 'block';
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = 'resposta incorreta.';
    document.getElementById('response').style.display = 'block';
  });
  
