var box = document.getElementById("box")
b= document.getElementById("random")

function random_color() {
    var r1 = Math.floor(Math.random() * 255)
    var r2 = Math.floor(Math.random() * 255)
    var r3 = Math.floor(Math.random() * 255)

    var s1 = Math.floor(Math.random() * 255)
    var s2 = Math.floor(Math.random() * 255)
    var s3 = Math.floor(Math.random() * 255)

    var rgb= "rgb("+r1+","+r2+","+r3+")"
    var shadow= "5px 5px 10px 3px rgb("+s1+","+s2+","+s3+")"
    var btn= "rgb("+s1+","+s2+","+s3+")"
    box.style.backgroundColor = rgb
    box.style.boxShadow= shadow
    b.style.backgroundColor= btn
}