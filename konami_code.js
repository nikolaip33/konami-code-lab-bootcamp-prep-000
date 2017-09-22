console.log("Let the games begin????")
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];



function init() {
  let index = 0;
  const body = document.body;
  body.addEventListener('keypress', function(e) {
    var key = parseInt(e.detail || e.which);
      if(key === code[index]){
        index++;
        console.log("test")
        if(index === code.length){
          alert("Congratulations!!");
          index=0;
        }//if(index-test)
        else {
          index = 0;
        }//else
      }//if(key)
  });
}
init()
