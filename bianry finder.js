/*function bianry(num){
    let list = []
    let text = ""
    function bianry2(){
        while(num > 0){
            list.push(num%2)
            num = Math.floor(num/2)
        }
    }
    bianry2()
    list.reverse()
    for ( x of list){
        text += x
    }
    return text
}

document.getElementById("d").innerHTML = bianry(5)*/
var text = ""
function randompass(){
    const uppper = "1234567890QWERTYUIOPASDFGHJKLZXCBVNM!~@#$%^&*()_-=+:;'?><[]{}|qwertyuiopasdfghjklzxcvbnm"
    function rand2(){
        while(text.length<9){
            var x = Math.floor(Math.random()*100)
            if (x > 88){continue}else{
                text+= uppper[x]
            }
        }
    }
    rand2();
    document.getElementById("d").innerHTML = text;
}