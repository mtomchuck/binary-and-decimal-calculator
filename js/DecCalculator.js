import {Calculator} from "./Calculator";

class DecCalculator extends Calculator {
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            result[i] = (numberX[i] + numberY[i]) % 10;
            if (numberX[i] + numberY[i] > 9) {
                numberX[i-1]++;
            }
        }
        console.log(result);
        return result;  
    }

    updateResult() {
        let root =  this.$calculatorDOMElement;
        let $resultNumber = root.children(".group-number").children(".result-bit");
        for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
            $resultNumber.eq(j).find(".active").text(this.resultNumberArray[i]);
        }
   }


    changeNumber(root) {
        console.log(root);
        root.find("span").text("");
        root.find("span").attr("contenteditable", true);
        root.find("span").trigger("focus");
        
        // Typing numbers to calculator
        root.find("span").on("keydown", function(e) {
            return false;
        })
        root.find("span").on("keyup", function(e) {
            if (!isNaN(e.key)) {
                $(this).text(e.key);
            }
        })
        if (root.find("span").text("")) {
            return root.find("span").text(0);
        };
    }

    initEvents(...param) {
        super.initEvents(...param),        

        this.$calculatorDOMElement.find('.operator-bar span').on("click", (e) => {
            e.stopPropagation();
            this.checkNumber();
            this.updateResult();
        });

        $(document).on("click", () => {
            this.$calculatorDOMElement.find(".display-number span").each(function() {
                $(this).text(   Number($(this).text())   );
            })
            this.$calculatorDOMElement.find('.operator-bar span').click();
        })
    }
}

export {DecCalculator};