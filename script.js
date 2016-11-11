/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

(function() {
  'use strict';
  const controls = document.getElementById('controls');
  const stopL = document.getElementById('stopLight');
  const slowL = document.getElementById('slowLight');
  const goL   = document.getElementById('goLight');

  controls.addEventListener('mouseover', () => {
    if (event.target === controls){
      return;
    }
    console.log(`Entered ${event.target.textContent} button`);
  })

  controls.addEventListener('mouseout', () => {
    if (event.target === controls) {
      return;
    }
    console.log(`Left ${event.target.textContent} button`);
  })

  const lightSwitch = function(element){
    for (const light of document.getElementsByClassName('bulb')) {
      light.removeAttribute('style');
    }
    switch (element) {
      case 'stopButton':
        stopL.setAttribute('style','background-color:red');
        break;
      case 'slowButton':
        slowL.setAttribute('style','background-color:yellow');
        break;
      case 'goButton':
        goL.setAttribute('style','background-color:green');
        break;
    }
  }

  controls.addEventListener('click', () => {
    if (event.target === controls) {
      return;
    }
    if ((event.target.id === 'stopButton' && stopL.hasAttribute('style'))||(event.target.id === 'slowButton' && slowL.hasAttribute('style'))||(event.target.id === 'goButton' && goL.hasAttribute('style'))) {
      console.log('AAA');
      for (const light of document.getElementsByClassName('bulb')) {
        light.removeAttribute('style');
        console.log('BBB');
      }
    }
    if (event.target.id === 'stopButton' && goL.hasAttribute('style')) {
      lightSwitch('slowButton');
      setTimeout(() => lightSwitch('stopButton'), 3000);
    } else {
      lightSwitch(event.target.id)
    }
    console.log(event.target.textContent);
  })


})();
