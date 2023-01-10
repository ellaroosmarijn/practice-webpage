window.onload = () => {
  console.log('Welcome. Press the button... If you dare!')

  var buttonRef = document.getElementsByTagName('button')[0]
  buttonRef.addEventListener(
    'click',
    function () {
      alert('Ouch, you clicked me!')
    },
    false
  )
}
