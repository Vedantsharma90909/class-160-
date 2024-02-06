AFRAME.registerComponent("bullets",{
    init:function(){
        this.shoot_bullet()
    },
    shoot_bullet:function(){
        window.addEventListener("keydown",(e)=>{
            if (e.key==="z"){
                const bullet_entity = document.createElement("a-entity")
                bullet_entity.setAttribute("geometry",{primitive:"sphere",radius:0.1})
                bullet_entity.setAttribute("material","color","black")
                const camera = document.querySelector("#camera")
                var camera_1 = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                camera_1.getWorldDirection(direction) 
                console.log(direction)
                var position = camera.getAttribute("position")
                bullet_entity.setAttribute("position",{x:position.x,y:position.y,z:position.z})
                bullet_entity.setAttribute("velocity",direction.multiplyScalar(-10))
                var scene = document.querySelector("#scene")
                scene.appendChild(bullet_entity)
                
            }

        })
    }
})