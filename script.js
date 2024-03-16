document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = 'Eu também amo você.';
    document.getElementById('response').style.display = 'block';
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = 'Resposta incorreta, tente novamente.';
    document.getElementById('response').style.display = 'block';
  });
  