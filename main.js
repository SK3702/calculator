function clickBtn(btn){
    let pressedValue =btn.value;
    let result = document.getElementById('showResult');

    /*ACを押したときリセットされる*/
    if(pressedValue == "AC"){
        result.innerText = null;
    }

    /*=を押したとき計算される*/
    else if(pressedValue == "="){
        result.innerText = eval(result.innerText);
    }

    /*それ以外の時の処理*/
    else{
        /*記号を押した時、最初、または連続で押された時表示されない*/
        if(pressedValue === "+" || pressedValue === "-" || pressedValue === "*"  || pressedValue === "/"){
            if(result.innerText ===""){

            }
            else{
                result.innerText += pressedValue;
            }
        }
        if(pressedValue === "+" || pressedValue === "-" || pressedValue === "*"  || pressedValue === "/"){
            if(result.innerText.slice(-1) === "+" || result.innerText.slice(-1) === "-" ||
            result.innerText.slice(-1) === "*" || result.innerText.slice(-1) === "/"){
                result.innerText = result.innerText.slice(0, -1);
                result.innerText += pressedValue;
            }
            else{
                result.innerText += pressedValue;
            }
        }

        /*00が最初に押された時入力されない*/
        else if(pressedValue === "00"){
            if(result.innerText === ""|| result.innerText.slice(-1) === "+" || result.innerText.slice(-1) === "-" ||
            result.innerText.slice(-1) === "*" || result.innerText.slice(-1) === "/"){

            }
            else{
                result.innerText += pressedValue;
            }
        }

        /*０12など０先頭の数字になるのを防ぐ*/
        else if(result.innerText === "0" || result.innerText.slice(-2) === "+0" || result.innerText.slice(-2) === "-0" ||
        result.innerText.slice(-2) === "*0" || result.innerText.slice(-2) === "/0"){
            if(pressedValue == "."){
                result.textContent += pressedValue; 
            }
            else{
                result.innerText = result.innerText.slice(0, -1);
                result.innerText += pressedValue;
            }
            
        }

        /*.が連続しないようにする*/
        else if(result.innerText.slice(-1) === "."){
            if(pressedValue === "."){

            }
            else{
                result.innerText += pressedValue;
            }
        }
        
        else{
            result.textContent += pressedValue;
        }

    }
}

