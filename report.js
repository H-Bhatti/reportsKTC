
async function getData (){
    const response = await fetch("./report data/full/DTCMfull.csv")
    const data = await response.text();
    const table = data.split(/Customer no.: /);
    // console.log(table)

    table.forEach(element => {Conversion(element)});

    // const dataArray = table[1].split("\r\n")

    // for ( i = 4; i < (dataArray.length - 1); i++) {
    //     dataArray[i] = dataArray[i] + ","+dataArray[0]+","+dataArray[1]+"\n"
    // }
    // console.log("bananas")
    // for ( i = 0; i < 4; i++) {
    //     dataArray[i] = dataArray[i] +"\n"
    // }
    // const array = dataArray.toString();

    // console.log(array)


}

 function Conversion (data){
    const dataArray =  data.split("\r\n")

    for ( i = 4; i < (dataArray.length - 1); i++) {
        dataArray[i] = dataArray[i] +dataArray[0]+","+dataArray[1]+"\n"
    }
    // console.log("bananas")
    for ( i = 0; i < 4; i++) {
        dataArray[i] = "\r"+dataArray[i] +"\n"
    }
    const array = dataArray.toString();

    // console.log(array)
    return report.push(array)

}

function joinArray (data){
    data = data.toString()
    console.log(data)
}



const report = []
console.log(report)
console.log("start");
getData();

// just run the joinArray function and et the reports in CSV
const button = document.getElementById("Button");
button.onclick = ()=>{
    joinArray (report)
};