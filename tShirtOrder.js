function tShirtOrder(string) {
    let small = ""
    let medium = ""
    let large = ""

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "s") {
            small += "s"
        } else if (string[i] === "m") {
            medium += "m"
        } else {
            large += "l"
        }
    }
    return small + medium + large
}

console.log(tShirtOrder('slmsmslm'))

// function sort (str){
//     let str1 = str.split("")
//    console.log(str1.sort().reverse().join(""))
//   }
//   sort("smlllsssmmmmllllmsmslmslmslmslmslsmlsmlsml")