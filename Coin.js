AFRAME.registerComponent("coins", {
    init: function(){
        for (var i = 1; i <= 20; i++){
            var id = `coin${i}`;
            var posX = (Math.random() * 100 + (-50));
            var posY = (Math.random() * (-7 - (-15)) + (-15))
            var posZ = (Math.random() * 150 + (-100));
            
            const position = {x: posX, y: posY, z: posZ};
            this.createCoins(id, position);
        }
    },

    createCoins: function(id, position){
        var coinEl = document.createElement("a-entity")
        var treasureEl = document.querySelector("#treasureCoins");

        coinEl.setAttribute("id", id);
        coinEl.setAttribute("position", position);

        //coinEl.setAttribute("material", "color", "yellow");
        //coinEl.setAttribute("geometry", {primitive: "circle", radius: 1});
        
        coinEl.setAttribute("scale", {x:0.125, y:0.125, z:0.125});
        coinEl.setAttribute("obj-model", "obj: url(/assets/coin/tinker.obj); mtl: url(/assets/coin/obj.mtl)",);
        coinEl.setAttribute("rotation", {x:-90, y:Math.random() * 360, z:0});

        coinEl.setAttribute("animation", {
            to: "0 360 0",
            loop: "true",
            dur: 10000,
            property: "rotation",
        })

        treasureEl.appendChild(coinEl);
    }

})