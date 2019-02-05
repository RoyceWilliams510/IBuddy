$(document).ready(function() {
    $("#exit").hide();
    $("#studentEditor").hide();
    $("#go").click(function() {
        const n = $("#studentName").val();
        const g = $("#studentGrade").val();
        const student = new Student(n,g);
        students.push(student);
        console.log(student);
        $("#studentCreator").hide();
        $("#welcome").html("<b>Welcome "+student.name+" to IBuddy</b>");
        $("#studentEditor").show();
    });

    $("#submit").click(function(){
        let className = $("#className").val();
        let level = $("#level").val();
        let year=$("#year").val();
        let lang=$("#lang").val();
        console.log(lang);
        let course = new Course(className,level,year,lang);
        courses.push(course);
        console.log(courses);
        console.log(students);
        alert("Success, "+course.className+" has been added. To add this class to your schedule go to class organizer by pressing the button below.")
    });

    $("#seeClasses").click(function(){
        $("#exit").show();
        $("#studentEditor").hide();
        console.log("bitch stop playinh");
        $("#classesSubmitted").html(function(){
            let html ="<p>Classes Organizer</p>";
            for(var i =0; i<courses.length;i++){
                html+="<p>"+courses[i].className+" "+courses[i].level+"  <button id ='course"+i+"' value='"+i+"' class='adder' onclick='addClassToStudent("+i+")'>Add Class To Schedule</button></p>"
            }
            html+="<button id= 'organizer' onclick='organizeSchedule()'>See classes</button>";
            return html;
        }).show();
    })

});
const students =[];
const courses =[];
class Student {
    constructor(name,grade) {
        this.name = name;
        this.grade = parseInt(grade);
        this.coursesTaking=[];
        this.sls =0;
        this.hls=0;
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
}

class Course{
    constructor(className,level,year,lang){
        if(lang=="true"){
            this.language = true;
        }else{
            this.language=false;
        }
        this.className= className;
        this.level= level;
        this.year=year
    }
}

function addClassToStudent(classId){
    let courseSelected=courses[classId];
    students[0].addClass(courseSelected);
    console.log(students[0].coursesTaking);
    alert("Success! You have added "+courseSelected.className+" to your schedule")
}

function organizeSchedule(){
    var stud = students[0];
    console.log(stud.name);
    var cour = stud.coursesTaking;
    let slCourses =[];
    let hlCourses=[];
    for(let i =0;i<cour.length; i++){
        if(cour[i].level=="SL"){
            slCourses.push(cour[i]);
            stud.addSl();
        }else{
            hlCourses.push(cour[i]);
            stud.addHl();
        }
    }
    let html ="<p>Your SL courses</p>";
    for(let i=0; i<slCourses.length; i++){
        html+="<br>"+slCourses[i].className;
    }
    html+="<br>Your HL courses";
    for(let i=0; i<hlCourses.length; i++){
        html+="<br>"+hlCourses[i].className;
    }
    html+= "<br><button id ='checkReq' onclick='checkRequirments()'>Check if requirements are met</button>";
    console.log(html);
    $("#scheduleOrganizer").html(html).show();
}

function checkRequirments(){
    var stud =students[0];
    var lang= false;
    var courss = stud.coursesTaking;
    for(var i =0;i<courss.length; i++){
        if(courss[i].language==true){
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
function goBack(){
    $("#studentEditor").show();
    $("#classesSubmitted").hide();
    $("#scheduleOrganizer").hide();
    $("#exit").hide();
}