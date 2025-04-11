function calculate() {
    const classAttended = Number(document.getElementById("attended").value);
    const dutyLeave = Number(document.getElementById("dl").value);
    const classConducted = Number(document.getElementById("conducted").value);

    let totalClassAttended = classAttended + dutyLeave;
    let attended = ((totalClassAttended / classConducted) * 100).toFixed(2);
    
    console.log("Total Attended:", totalClassAttended);
    console.log("Class Attended:", classAttended);
    console.log("Duty Leave:", dutyLeave);
    console.log("Attended:", Math.round(attended));
    console.log("\n");
    const attendance = document.getElementById("attendance").innerText = `${attended} % `;

    if(attended >=75){
        const attendance = document.getElementById("attendance").style.color = 'green';
    }else{
        const attendance = document.getElementById("attendance").style.color = 'red';

    }


}
 

function reset() {
    document.getElementById("attended").value = "";
    document.getElementById("dl").value = "";
    document.getElementById("conducted").value = "";
}