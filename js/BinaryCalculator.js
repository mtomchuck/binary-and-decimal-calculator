import { Calculator } from "./Calculator";

class BinaryCalculator extends Calculator{
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    /* Method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */
    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryBit =  numberX[i] + numberY[i] + result[i];
            if( carryBit  === 2) {
                result[i] = 0;
                result[i-1] = 1;
            } else if (carryBit === 3 ){
                result[i] = 1;
                result[i-1] = 1;
            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }

    /* Method changing number
    *  @param {jQuery element} root Parent element
    */
    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.removeClass("active");
        activeElement.siblings().addClass("active");
        root.children(":first-child").slideToggle(() => {
             this.checkNumber();
             this.updateResult();
        });
    }

    /* Method changing Result
    */
    updateResult() {
         let root =  this.$calculatorDOMElement;
         let $resultNumber = root.children(".group-number").children(".result-bit");
         for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
            let valueResult = parseInt( $resultNumber.eq(j).find(".active").text() );
            if( this.resultNumberArray[i] != valueResult ) {
                let activeElement = $resultNumber.eq(j).find(".active").removeClass("active");
                activeElement.siblings().addClass("active");
                $resultNumber.eq(j).children(":first-child").slideToggle();
            }
         }
    }
}

export { BinaryCalculator  };
