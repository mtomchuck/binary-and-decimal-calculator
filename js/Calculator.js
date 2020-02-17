/* abstract */ class Calculator {
    constructor(selectorName) {
         this.name = selectorName;
         this.$calculatorDOMElement = $(selectorName);

         this.firstNumberArray = [];
         this.secondNumberArray = [];
         this.resultNumberArray = [0,0,0,0,0,0,0,0,0];
         this.initEvents();
   }

   /* Abstract method add numbers in two array
   *  @param {array} numberX First number
   *  @param {array} numberY Second number
   *  @return {array}
   */
   add(numberX, numberY) {
       console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
       return [0,0,0,0,0,0,0,0];
   }

   /* Abstract method changing number
   *  @param {jQuery element} root Parent element
   */
   changeNumber(root) {
       console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
   }

   /* Abstract method changing Result
   */
   updateResult() {
    //    console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
   }

   /* Get the name of calculator selector
   *  @return {string}
   */
   getName() {
       return `Hello I am ${this.name}`;
   }

   /* Check what number is set in both numbers and add
   *  @return {string}
   */
   checkNumber() {
       let root =  this.$calculatorDOMElement;
       let $firstNumber = root.children(".group-number").children("label:first-child");
       let $secondNumber = root.children(".group-number").children("label:nth-child(2)");
       let $resultNumber = root.children(".group-number").children(".result-bit");

       for(let i = $firstNumber.length-1, j = 0; i >= 0 ; i--, j++) {
           this.firstNumberArray[i] = parseInt( $firstNumber.eq(j).find('.active').text() );
           this.secondNumberArray[i] = parseInt( $secondNumber.eq(j).find('.active').text() );
       }
       this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
   }

   /* Set event click on number
   */
   initEvents() {
        this.$calculatorDOMElement.find(".display-number").on('click', (event) => {
            event.stopPropagation();
            const parentLabel = $(event.target).parent(".display-number");  //event.target -> element faktycznie kliknięty
            this.changeNumber(parentLabel);
        })
   }
}

export { Calculator  };
