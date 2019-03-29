$(document).ready(function() {
    loadData();
    console.log(courses);
    $("#exit").hide();
    $("#transporter").hide();
    $("#studentEditor").hide();
    $("#go").click(function() {
        const n = $("#studentName").val();
        const g = $("#studentGrade").val();
        const student = new Student(n,g);
        students.push(student);
        students[0].coreClasses.push(courses[0],courses[1],courses[2],courses[3]);
        console.log(student);
        $("#studentCreator").hide();
        $("#mission").html("<b>Hello "+student.name+"  and welcome to IBuddy the student friendly schedule organizer. For starters here is" +
            " the IB course catalog of classes you can take in the next two years of high school. To add classes to your schedule click on the subject catagory (ie. arts) and " +
            "you will be redirected to the class adder of said subject.</b>");
        constructTables();
        $("#studentEditor").show();
        $("#transporter").show();
    });

});
function constructTables(){
    let html= "<p id='courseList'><br id='courseCatalog'>Course Catalog:</p><p id='maths' class ='catagory'><button class='bigButtons' id ='mathsender' onclick='courseSetter(1)'>Math Courses</button>";
    for(let i=0; i<mathsCourses.length; i++){
        html+= "<br>"+mathsCourses[i].className;
    }
    html+= "</p><p id='sci' class= 'catagory'><button class='bigButtons' onclick='courseSetter(2)'>Science Courses</button>";
    for(let o=0; o<scienceCourses.length; o++){
        html+= "<br>"+scienceCourses[o].className;
    }
    html+= "</p><p id='elect' class = 'catagory'><button class='bigButtons' onclick='courseSetter(3)'>Electives</button>";
    for(let l=0;l<electives.length; l++){
        html+= "<br>"+electives[l].className;
    }
    html+= "</p><p id='arts' class ='catagory'><button class='bigButtons' onclick='courseSetter(4)'>Art Classes</button>";
    for(let p=0;p<arts.length;p++ ){
        html+="<br>"+arts[p].className;
    }
    html+= "</p><p id='lang' class ='catagory'><button class='bigButtons' onclick='courseSetter(5)'>Languages</button>";
    for(let m=0; m<languageClasses.length; m++){
        html+="<br>"+languageClasses[m].className;
    }
    html+="</p>";
    $("#studentEditor").html(html);
    $("#exit").hide();

}
const students =[];
const courses =[];
class Student {
    constructor(name,grade) {
        this.name = name;
        this.grade = parseInt(grade);
        this.coursesTaking=[];
        this.sls =0;
        this.hls=2;
        this.senCourses =[];
        this.junCourses=[];
        this.coreClasses=[];
    }
    addClass(course){
        this.coursesTaking.push(course);
    }
    processSchedule(){
        //do things
        $("#myId").text = "This is your schedule";
    }
    addSl(){
        this.sls++;
    }
    addHl(){
        this.hls++;
    }
    addSen(cour){
        this.senCourses.push(cour);

    }
    addJun(cour){
        this.junCourses.push(cour);
    }
}


function addClassToStudent(classId,bool){
    let approval= true;
    let cour =students[0].coursesTaking;
    for(let i =0; i<cour.length;i++){
        if(cour[i]._id==classId){
            alert("You have already added this course to your schedule.");
            approval=false;
        }
    }

    if(approval == true) {
        for(let i =0; i<courses.length; i++){
            if(courses[i]._id ==classId){
                students[0].addClass(courses[i]);
                alert("Success! You have added " + courses[i].className + " to your schedule");
                if(bool==true){
                    students[0].addJun(courses[i]);
                    console.log(students[0].junCourses);
                }else{
                    students[0].addSen(courses[i]);
                    console.log(students[0].senCourses)
                }
                if(courses[i].level =="SL"){
                    students[0].addSl();
                }
                if(courses[i].level== "HL"){
                    students[0].addHl();
                }
            }
        }
    }
}



function organizeSchedule(){
    $("#exit").show();
    var stud = students[0];
    console.log(stud.coursesTaking);
    var cour = stud.coursesTaking;

    let html ="<p id='juniorYear'>Junior Year Courses";
    for(let i=0; i<stud.junCourses.length; i++){
        html+="<br>"+stud.junCourses[i].className+"    <button id='remover"+i+"' class='removers' value ='"+i+"' onclick=" +
            "'removeCourseFromStudent("+stud.junCourses[i]._id+")'>Remove class</button>";
    }
    html+="</p><p id='seniorYear'>Senior Year Courses";
    for(let i=0; i<stud.senCourses.length; i++){
        html+="<br>"+stud.senCourses[i].className+"       <button id='remover"+i+"' class='removers' value ='"+i+"' onclick=" +
            "'removeCourseFromStudent("+stud.senCourses[i]._id+")'>Remove class</button>";
    }
    html+="</p><p id='coreClasses'>Core Classes";
    for(let i =0; i<stud.coreClasses.length; i++) {
        html += "<br>" + stud.coreClasses[i].className;
    }
    html+= "</p><br><button id ='checkReq' class='bigButtons' onclick='checkRequirments()'>Check if requirements are met</button>";
    $("#studentEditor").html(html);
}


function checkRequirments(){
    var stud =students[0];
    var lang= false;
    var numSen=0;
    var numJun=0;
    var courss = stud.coursesTaking;
    for(var i =0;i<courss.length; i++){
        if(courss[i].year==11&& courss[i].level=="HL"){
            alert("You cannot take an HL course in your sophmore year!");
        }
        if(courss[i].lang==true){
            lang =true;
        }
    }
    if(stud.sls>=3) {
        if (lang == true) {
            if (stud.hls >= 3) {
                alert("your classes meet the credential of the diploma congrats");
            }else{
                alert("You need more HL course credits")
            }
        }else{
            alert("You need a language course (at least an SL course level)");
        }
    }else{
        alert("You need more SL course credits");
    }
}





function removeCourseFromStudent(id){
    console.log(id);
    let stud =students[0];
    let cour = students[0].coursesTaking;

    for(let i =0; i<stud.junCourses.length; i++){
        if(stud.junCourses[i]._id == id){
            stud.junCourses.splice(i,i+1);
        }
    }
    for(let s =0; s<stud.senCourses.length;s++){
        if(stud.senCourses[s]._id == id){
            stud.senCourses.splice(s,s+1);
        }
    }
    for(let i=0; i<cour.length;i++){
        if(cour[i]._id==id){
            alert("You have removed "+ cour[i].className+" from your classes.");
            cour.splice(i,i+1);

        }
    }
    organizeSchedule();
}



function courseSetter(trig){
    let html ="";
    if(trig==1){
        html+="<br>Math courses:";
        for(let i=0; i<mathsCourses.length; i++){
            html+= "<br>"+mathsCourses[i].className+"   <button id ='course"+i+"' value='"+i+"' class='bigButtons' onclick='addClassToStudent("+mathsCourses[i]._id+",true)'>Add to Junior Year</button>   " +
                "<button id ='course"+i+"' value='"+i+"' class='bigButtons' onclick='addClassToStudent("+mathsCourses[i]._id+",false)'>Add to Senior Year</button>";
        }
    }
    if(trig==2){
        html+="<br>Science Courses";
        for(let i=0; i<scienceCourses.length; i++){
            html+= "<br>"+scienceCourses[i].className+" <button id ='course"+i+"' value='"+i+"' class='bigButtons' onclick='addClassToStudent("+scienceCourses[i]._id+",true)'>Add to Junior Year</button>" +
                "    <button id ='course"+i+"' value='"+i+"' class='bigButtons' onclick='addClassToStudent("+scienceCourses[i]._id+",false)'>Add to Senior Year</button>";
        }
    }
    if(trig==3){
        html+="<br>Electives";
        for(let i=0;i<electives.length; i++){
            html+= "<br>"+electives[i].className+" <button id ='course"+i+"' value='"+i+"' class='bigButtons' onclick='addClassToStudent("+electives[i]._id+",true)'>Add to Junior Year</button>" +
                "    <button id ='course"+i+"' value='"+i+"' class='bigButtons' onclick='addClassToStudent("+electives[i]._id+")'>Add to Senior Year</button>";
        }

    }
    if(trig==4){
        html+="<br>Arts";
        for(let i=0;i<arts.length;i++ ){
            html+="<br>"+arts[i].className+" <button id ='course"+i+"' value='"+i+"' class='bigButtons' onclick='addClassToStudent("+arts[i]._id+",true)'>Add to Junior Year</button>" +
                "     <button id ='course"+i+"' value='"+i+"' class='bigButtons' onclick='addClassToStudent("+arts[i]._id+",false)'>Add to Senior Year</button>";
        }
    }
    if(trig==5){
        html+="Language ";
        for(let i=0; i<languageClasses.length; i++){
            html+="<br>"+languageClasses[i].className+" <button id ='course"+i+"' value='"+i+"' class='bigButtons' onclick='addClassToStudent("+languageClasses[i]._id+",true)'>Add to Junior Year</button>" +
                "    <button id ='course"+i+"' value='"+i+"' class='bigButtons' onclick='addClassToStudent("+languageClasses[i]._id+",false)'>Add To Senior Year</button>";
        }
    }
    console.log(html);
    $("#exit").show();
    $("#studentEditor").html(html);
    $("#mission").hide();

}

function goBack(){
    $("#studentEditor").show();
    constructTables();
}