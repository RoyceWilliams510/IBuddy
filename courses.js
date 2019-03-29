class Courses{
    constructor(className,level,lang,id){
        this.lang=lang;
        this.className= className;
        this.level= level;
        this._id= id;
    }
}
var coreCourses =[];
var mathsCourses =[];
var scienceCourses =[];
var electives=[];
var arts=[];
var languageClasses= [];


function loadData() {
    //core classes
    const hlHis= new Courses("HL History of the Americas","HL",false,1);
    const hlEng = new Courses("HL English","HL",false,2);
    const tok = new Courses("Theory of Knowledge","P",false,3);
    const gov = new Courses("American Government", "P",false,50);
    courses.push(hlHis,hlEng,tok,gov);
    coreCourses.push(hlHis,hlEng,tok,gov);

    //maths
    const math3 = new Courses("Math 3","P",false,4);
    const aMath3 = new Courses("Advanced Math 3","P",false,5);
    const mathStudies = new Courses("Math Studies","SL", false,6);
    const slMath = new Courses("SL Mathematics", "SL", false,7);
    const hlMath = new Courses("HL Mathematics", "HL",false,8);
    const apStat = new Courses("AP Statistics","AP",false,9);
    const apCalc = new Courses("AP Calculus","AP",false,10);
    courses.push(math3,aMath3,mathStudies,slMath,apStat,apCalc);
    mathsCourses.push(math3,aMath3,mathStudies,slMath,apStat,apCalc);

    //sciences
    const ibBio = new Courses("SL Biology", "SL", false,11);
    const apBio = new Courses("AP Biology","AP",false,12);
    const ibChem = new Courses("SL Chemisty","SL",false,13);
    const slEnviro = new Courses("SL Environmental Systems & Societies","SL",false,14);
    const apEnviro = new Courses("AP Environmental Systems & Societies","AP",false,15);
    const apPhysics = new Courses("AP Physics","AP",false,16);
    courses.push(ibBio,apBio,ibChem,slEnviro,apEnviro,apPhysics);
    scienceCourses.push(ibBio,apBio,ibChem,slEnviro,apEnviro,apPhysics);
    //electives
    const ibEco = new Courses("SL Economics","SL",false,17);
    const apEco = new Courses("AP Economics","AP",false,18);
    const slMusic = new Courses("SL Music","SL",false,19);
    const hlMusic = new Courses("HL Music","HL",false,20);
    const slAnthro = new Courses("SL Anthropology","SL",false,21);
    const slCompSci = new Courses("SL Computer Sciences","SL",false,22);
    const hlCompSci = new Courses("HL Computer Sciences","HL",false,23);
    const law1 = new Courses("Law and Social Justice I","P",false,24);
    const law2 = new Courses("Law and Social Justice II","P",false,25);
    const chic = new Courses("Chicano History","P",false,26);
    courses.push(ibEco,apEco,slMusic,hlMusic,slAnthro,slCompSci,hlCompSci,law1,law2,chic);
    electives.push(ibEco,apEco,slMusic,hlMusic,slAnthro,slCompSci,hlCompSci,law1,law2,chic);
    //Arts
    const slArt = new Courses("SL Studio Art","SL",false,27);
    const hlArt = new Courses("HL Studio Art","HL",false,28);
    const draw = new Courses("Drawing","P",false,29);
    const aDraw = new Courses("Advanced Drawing","P",false,30);
    const artHis = new Courses("SL Art History","SL",false,31);
    courses.push(slArt,hlArt,draw,aDraw,artHis);
    arts.push(slArt,hlArt,draw,aDraw,artHis);
    //languages
    const slFrench = new Courses("SL/IV French","SL",true,32);
    const hlFrench = new Courses("HL French","HL",true,33);
    const slSpanish = new Courses("SL/IV Spanish","SL",true,34);
    const hlSpanish = new Courses("HL Spanish","HL",true,35);
    const slMand = new Courses("SL Mandarin","SL",true,36);
    const hlMand = new Courses("HL Mandarin","HL",true,37);
    const slLatin = new Courses("SL/III Latin","SL",true,38);
    const hlLatin = new Courses("HL/IV Latin","HL",true,39);
    courses.push(slFrench,hlFrench,slSpanish,hlSpanish,slMand,hlMand,slLatin,hlLatin);
    languageClasses.push(slFrench,hlFrench,slSpanish,hlSpanish,slMand,hlMand,slLatin,hlLatin);

}