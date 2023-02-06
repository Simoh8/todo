

const LOCAL_STORAGE_LIST_KEYS= 'task.Arraytasks'
let Arraytasks =JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEYS)) || []


function createtask(){
let title = document.getElementById('task').value
let description = document.getElementById('description').value
let startdate = document.getElementById('startdate').value
let startintime = document.getElementById('startime').value
let enddate = document.getElementById('completedate').value
// add=document.getElementById('add')
// tasks_list=document.getElementById('tasks-list')

let task = {
    tasktitle: title,
    taskdescription: description,
    taskstart: startdate,
    tasktime: startintime,
    taskend: enddate
    
};

 
Arraytasks.unshift(task)
savedisplay()


}
function save(){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEYS, JSON.stringify(Arraytasks))
}
function savedisplay(){
    save();
    displaytask();
}


 function displaytask() 
 {

 let taskListElem = document.getElementById("tasks-list");
   taskListElem.innerHTML= "";
   


 for(let i = 0; i < Arraytasks.length; i++){

    let task = Arraytasks[i];

    let taskElem = document.createElement("li");
        taskElem.innerHTML =`Title: ${task.tasktitle} <br>  Description: ${task.taskdescription }<br> To Start On: ${task.taskstart}<br> AT: ${task.tasktime}<br>Due Date: ${task.taskend} `;

    let deleteBtn = document.createElement("button");
    let option =document.createElement("select")
    option.innerHTML="complete","incomplete"
    option.onselect=function (){
        displaytask()
    }
deleteBtn.innerHTML ="Press When Done";

deleteBtn.onclick = function(){
deleteTask(i);
};

taskElem.appendChild(deleteBtn);
taskListElem.append(taskElem);
 }

 }
 function deleteTask(index){
    Arraytasks.splice(index, 1)
    displaytask();
 }




