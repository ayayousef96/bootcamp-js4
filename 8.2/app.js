//1+2
let mycountry={
    country : "Finland",
    capital: "Helsinki",
    language: " Finnish", 
    population: "6 million",
    neighbours:[sweden, norway, russia];
    describe : function(){
        console.log("Finland has " + mycountry.population + " people, their mother tongue is " +mycountry.language+" they have "+mycountry.neighbours.length+" neighbouring countries and a capital called "
        +mycountry.capital+".");
    }  
};
//3
mycountry.describe();

//4
check = function(){
    return mycountry.neighbours.length==0 ? true:false;
}
mycountry.checkIsland = check;
//mycountry.checkIsland();
//console.log(mycountry.checkIsland());

