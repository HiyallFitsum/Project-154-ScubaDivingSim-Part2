AFRAME.registerComponent("scuba_rotation",{
    schema:{
        speedOfRotation: {type:"number", default: 0},
        speedOfAscent: {type:"number", default: 0}
    },

    init: function(){
        window.addEventListener("keydown", (e)=>{
            this.data.speedOfRotation = this.el.getAttribute("rotation");
            this.data.speedOfAscent = this.el.getAttribute("position")

            var scubaRotation = this.data.speedOfRotation;
            var scubaPosition = this.data.speedOfAscent;

            if(e.key === "ArrowRight"){
                if(scubaRotation.x < 10){
                    scubaRotation.x += 0.5;
                    this.el.setAttribute("rotation", scubaRotation)
                }
            }
            if(e.key === "ArrowLeft"){
                if(scubaRotation.x > -10){
                    scubaRotation.x -= 0.5;
                    this.el.setAttribute("rotation", scubaRotation)
                }
            }
            if(e.key === "ArrowUp"){
                if(scubaRotation.x < 30){
                    scubaRotation.x += 0.5;
                    this.el.setAttribute("position", scubaPosition)
                }
                if (scubaPosition.y < 6) {
                    scubaPosition.y += 0.05;
                    this.el.setAttribute("position", scubaPosition);
                  }
            }
            if(e.key === "ArrowDown"){
                if(scubaRotation.x > -30){
                    scubaRotation.x -= 0.5;
                    this.el.setAttribute("position", scubaPosition)
                }
                if (scubaPosition.y > -6) {
                    scubaPosition.y -= 0.05;
                    this.el.setAttribute("position", scubaPosition);
                  }
            }
            if(e.key === "w"){
                scubaPosition.z -= 0.05
            }
            if(e.key === "s"){
                scubaPosition.z += 0.05
            }
            if(e.key === "a"){
                scubaPosition.x -= 0.05
            }
            if(e.key === "d"){
                scubaPosition.x += 0.05
            }
        })
    },
})