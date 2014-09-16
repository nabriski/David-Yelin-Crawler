var casper = require('casper').create();

casper.options.viewportSize = {width: 1366, height: 768};

casper.start('https://www.tlv-edu.gov.il/sites/Davidyalin/Classes/MainClass1/A1/Pages/default.aspx');

casper.waitForSelector("#MainBodyHeader .nptextright .fs",
    function(){
       // this.click("#MainBodyHeader .nptextright .fs");
        console.log("yo?");
        this.evaluate(function(){
            $("#MainBodyHeader .nptextright .fs").click();
        });
        console.log("mo?");
    }
);

casper.waitForSelector("iframe.ms-dlgFrame",function() {
    
    console.log("to?");
    var text = this.evaluate(function(){
    
        return window.frames[0].document.querySelector(".fsLightboxWrapper").textContent;
    });

    console.log("text: "+text);

},function(){
console.log("ooofff");
},20000);

casper.run();


