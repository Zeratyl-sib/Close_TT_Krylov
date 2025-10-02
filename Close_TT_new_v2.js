//Script closing NOC TT. Made by Krylov Semen 18.09.2025 
async function close_one_TT(){

//Main Grid: doubleClick on TT
let frames = document.getElementsByTagName("iframe");
let iframe1 = document.getElementById(frames[0].id).contentWindow;
console.log("Main Grid: doubleClick on TT");
let rrr = iframe1.document.getElementById('PageContainer_IncidentsModulePage_Grid_TreeGrid');
let bbb = iframe1.document.elementFromPoint(rrr.getBoundingClientRect().x+10, rrr.getBoundingClientRect().y+31);
bbb.dispatchEvent(new MouseEvent("dblclick", {view: window,bubbles: true,cancelable: true,clientX: rrr.getBoundingClientRect().x+10,clientY: rrr.getBoundingClientRect().y+31,button: 0}));

//Waiting for TT Form opened...
let frames2 = iframe1.document.getElementsByTagName("iframe");
let frame2 = iframe1.document.getElementById(frames2[0].id).contentWindow;
console.log("Waiting for TT Form opened...");
let tt7 = 0;
do{
	let promise = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 500)});
	let result = await promise;
	console.log("Waiting for TT Form opened: %s times",tt7);
	//do check
	if (typeof frame2.document.getElementById('PageContainer_DataTabPanel') !== 'undefined'){
		break;
	}
	tt7++;	
	if (tt7>20) break;
}
while(true)

//*************************************************************************************** another Frame *******************************************************
//Main on TT Form Thread

//Initializing button 'Save'
console.log("Initializing button 'Save'...");
/*let button_Save_gen = '';
let i_save = 30;
do{
	if (i_save >100){
		console.log("Error initializing Save Button. Too many attempts riched.");
	 	break;
	}
	let ss = 'ext-gen8' + i_save.toString();
	console.log("Trying: %s", ss);
	button_Save_gen = frame2.document.getElementById(ss);
	if (button_Save_gen == null){
		//console.log("Element %s is null", ss);
		i_save++;
		continue;
	} 
	
	if (button_Save_gen.getInnerText=='Сохранить'){		
		console.log("Button 'Save' with ID '%s' is initilized successfuly",ss);
		button_Save_gen = ss;
		break;
	}
	i_save++;
}
while (true);*/

let button_Save_gen_text = frame2.document.getElementById('PageContainer_SaveButton').querySelector('button').innerText;
console.log("Button 'Save' with Caption '%s' is initilized successfuly", button_Save_gen_text);
	
//Initializing button 'OK'
console.log("Initializing button 'OK'...");
/*let button_OK_gen = '';
let i_ok = 10;
do{
	if (i_ok >100){
		console.log("Error initializing OK Button. Too many attempts riched.");
	 	break;
	}
	let ss = 'ext-gen8' + i_ok.toString();
	console.log("Trying: %s", ss);
	button_OK_gen = frame2.document.getElementById(ss);
	if (button_OK_gen == null){
		//console.log("Element %s is null", ss);
		i_ok++;
		continue;
	} 
	
	if (button_OK_gen.getInnerText=='ОК'){		
		console.log("Button 'OK' with ID '%s' is initilized successfuly",ss);
		button_OK_gen = ss;
		break;
	}
	i_ok++;
}
while (true);*/
let button_OK_gen_text = frame2.document.getElementById('PageContainer_OKButton').querySelector('button').innerText;
console.log("Button 'OK' with Caption '%s' is initilized successfuly", button_OK_gen_text);

// Wait 2 seconds before clicking on #ext-gen598
console.log("Waiting 1 seconds before clicking on #ext-gen598");
let promise_initial_wait = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 1000)});
let result_initial_wait = await promise_initial_wait;

// Click on #ext-gen598
console.log("Clicking on #ext-gen598");
let ext_gen598 = frame2.document.getElementById('ext-gen598');
if (ext_gen598) {
    ext_gen598.click();
    
    // Wait 3 second
    console.log("Waiting 1 second after clicking #ext-gen598");
    let promise_wait = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 1000)});
    let result_wait = await promise_wait;
    
    // Get date from #PageContainer_SolutionDateEdit_Date
    console.log("Getting date from #PageContainer_SolutionDateEdit_Date");
    let sourceDateField = frame2.document.getElementById('PageContainer_SolutionDateEdit_Date');
    let sourceDate = '';
    
    if (sourceDateField) {
        sourceDate = sourceDateField.value;
        console.log("Retrieved date: " + sourceDate);
    } else {
        console.log("Error: #PageContainer_SolutionDateEdit_Date not found, using default date");
        sourceDate = '31.12.2025'; // fallback value
    }
    
    // Get time from #PageContainer_SolutionDateEdit_Time
    console.log("Getting time from #PageContainer_SolutionDateEdit_Time");
    let sourceTimeField = frame2.document.getElementById('PageContainer_SolutionDateEdit_Time');
    let sourceTime = '';
    
    if (sourceTimeField) {
        sourceTime = sourceTimeField.value;
        console.log("Retrieved time: " + sourceTime);
    } else {
        console.log("Error: #PageContainer_SolutionDateEdit_Time not found, using default time");
        sourceTime = '23:45'; // fallback value
    }
    
    // Click on #PageContainer_DeferredToDateTimeEdit_Date
    console.log("Clicking on #PageContainer_DeferredToDateTimeEdit_Date");
    let dateField = frame2.document.getElementById('PageContainer_DeferredToDateTimeEdit_Date');
    if (dateField) {
        dateField.click();
        
        // Insert date from source field
        console.log("Inserting date: " + sourceDate);
        dateField.value = sourceDate;
        
        // Trigger change event to ensure the date is registered
        dateField.dispatchEvent(new Event('change', { bubbles: true }));
        
        // Wait a moment before time input
        let promise_wait2 = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 300)});
        let result_wait2 = await promise_wait2;
        
        // Click on #PageContainer_DeferredToDateTimeEdit_Time
        console.log("Clicking on #PageContainer_DeferredToDateTimeEdit_Time");
        let timeField = frame2.document.getElementById('PageContainer_DeferredToDateTimeEdit_Time');
        if (timeField) {
            timeField.click();
            
            // Insert time from source field
            console.log("Inserting time: " + sourceTime);
            timeField.value = sourceTime;
            
            // Trigger change event to ensure the time is registered
            timeField.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
            console.log("Error: #PageContainer_DeferredToDateTimeEdit_Time not found");
        }
    } else {
        console.log("Error: #PageContainer_DeferredToDateTimeEdit_Date not found");
    }
} else {
    console.log("Error: #ext-gen598 not found");
}
	
//clicking on tab "Оборудование"
console.log("Clicking on tab 'Оборудование'");
let x1 = frame2.document.getElementById(frame2.PageContainer_DataTabPanel.getItem(1).tabHeader.id).getBoundingClientRect().x + 5;
let y1 = frame2.document.getElementById(frame2.PageContainer_DataTabPanel.getItem(1).tabHeader.id).getBoundingClientRect().y + 5;
frame2.document.elementFromPoint(x1, y1).click();

//waiting for tab "Оборудование" is downloading
console.log("Waiting for tab 'Оборудование' is downloading");
let tt1=1;
do{	
	let promise = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 500)});
	let result = await promise;
	console.log("Waiting for tab 'Оборудование' is downloading: %s times",tt1);
	//do check
	if (typeof frame2.PageContainer_AccidentReasonForEquipmentEdit_PrimaryToolButton !== 'undefined'){
		break;
	}
	tt1++;	
	if (tt1>20) return;	
}while(true)

//clicking on combobox 'Причина аварии' drop down button
console.log("Clicking on combobox 'Причина аварии' drop down button");
frame2.PageContainer_AccidentReasonForEquipmentEdit_PrimaryToolButton.dispatchEvent(new Event("click"));

//waiting for combo "Причина аварии" item list is downloading
console.log("Waiting for combo 'Причина аварии' item list is downloading");
let tt2=1;
do{	
	let promise = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 500)});
	let result = await promise;
	console.log("Waiting for combo 'Причина аварии' item list is downloading: %s times",tt2);
	//do check
	if (frame2.PageContainer_AccidentReasonForEquipmentEdit.listPrepared){
		break;	
	}
	tt2++;
	if (tt2>20) return;
}while(true)

//clicking on combo item "Cause Unknown"
console.log("Clicking on combo item 'Cause Unknown'");
let x2 = frame2.PageContainer_AccidentReasonForEquipmentEdit_PrimaryToolButton.getBoundingClientRect().x;
let y2 = frame2.PageContainer_AccidentReasonForEquipmentEdit_PrimaryToolButton.getBoundingClientRect().y+260;
let to_push = frame2.document.elementFromPoint(x2, y2);
if (typeof to_push == 'undefined') y2 = frame2.PageContainer_AccidentReasonForEquipmentEdit_PrimaryToolButton.getBoundingClientRect().y-20;
if (to_push == null) y2 = frame2.PageContainer_AccidentReasonForEquipmentEdit_PrimaryToolButton.getBoundingClientRect().y-20;
frame2.document.elementFromPoint(x2, y2).click();

//clicking on tab "Данные"
console.log("Clicking on tab 'Данные'");
let tt3 = 1;
do{
	if (frame2.PageContainer_DataTabPanel.activeTab.caption == 'Оборудование'){		
		let promise = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 500)});
		let result = await promise;
		let x4 = frame2.document.getElementById(frame2.PageContainer_DataTabPanel.getItem(0).tabHeader.id).getBoundingClientRect().x + 5;
		let y4 = frame2.document.getElementById(frame2.PageContainer_DataTabPanel.getItem(0).tabHeader.id).getBoundingClientRect().y + 5;
		frame2.document.elementFromPoint(x4, y4).click();
		console.log("Waiting for page 'Данные' is downloading: %s times",tt3);
		tt3++;
		if (tt3>20) return;
	}
	else{
		break;
	}
}
while(true)

//clicking on button "Сохранить"
console.log("Clicking on button 'Сохранить'");
let x3 = frame2.document.getElementById('PageContainer_SaveButton').getBoundingClientRect().x+5;
let y3 = frame2.document.getElementById('PageContainer_SaveButton').getBoundingClientRect().y+5;
frame2.document.getElementById('PageContainer_SaveButton').querySelector('button').dispatchEvent(new MouseEvent("mousedown", {view: window,bubbles: true,cancelable: true,clientX: x3,clientY: y3,button: 0}));
frame2.document.getElementById('PageContainer_SaveButton').querySelector('button').dispatchEvent(new MouseEvent("mouseup", {view: window,bubbles: true,cancelable: true,clientX: x3,clientY: y3,button: 0}));


//Waiting for Saving Done
console.log("Waiting for Saving Done");
//let promise = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 3000)});
//let result = await promise;
let tt5 = 1;
do{	
	console.log("Waiting for combo 'Статус' == 'В работе': %s times",tt5);
	if (frame2.PageContainer_StatusEdit.selText == 'В работе'){
		break;
	}
	let promise = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 500)});
	let result = await promise;
	tt5++;
	if (tt5>20) return;
}
while(true)

//clicking on combo button "Статус"
console.log("clicking on combo button 'Статус'");
frame2.PageContainer_StatusEdit_PrimaryToolButton.dispatchEvent(new Event("click"));

//Waiting for item 'Решена' is clicked
let tt4 = 1;
do {	
		let promise = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 500)});
		let result = await promise;
		let rr = frame2.PageContainer_StatusEdit.getSelectedItem();
		if (rr.text!='Решена'){
			//clicking on combo item "Решена"
			console.log("clicking on combo item 'Решена'");
			let x5 = frame2.PageContainer_StatusEdit_PrimaryToolButton.getBoundingClientRect().x;
			let y5 = frame2.PageContainer_StatusEdit_PrimaryToolButton.getBoundingClientRect().y+115;
			frame2.document.elementFromPoint(x5, y5).click();
			console.log("Waiting for item 'Решена' is clicked: %s times",tt4);
			tt4++;
			if (tt4>20) return;
		}
		else{
			break;
		}
	
}
while(true)

//clicking on button "ОК"
console.log("clicking on button 'ОК'");
let x6 = frame2.document.getElementById('PageContainer_OKButton').getBoundingClientRect().x+5;
let y6 = frame2.document.getElementById('PageContainer_OKButton').getBoundingClientRect().y+5;
frame2.document.getElementById('PageContainer_OKButton').querySelector('button').dispatchEvent(new MouseEvent("mousedown", {view: window,bubbles: true,cancelable: true,clientX: x6,clientY: y6,button: 0}));
frame2.document.getElementById('PageContainer_OKButton').querySelector('button').dispatchEvent(new MouseEvent("mouseup", {view: window,bubbles: true,cancelable: true,clientX: x6,clientY: y6,button: 0}));


//Wating for MAIN Form closed
//PAUSE 2000
//console.log("Pausing 2 sec");
//let promise1 = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 2000)});
//let result1 = await promise1;


//Main Grid: Clicking on sorting DataGrid 'Статус'
//console.log("Clicking on header 'Status' to sort TT");
//let hhh1 = iframe1.document.querySelector("table > thead > tr > td.x-treegrid-hd.x-treegrid-cell.x-treegrid-cell-DisplayStatus > div > div")
//iframe1.document.elementFromPoint(hhh1.getBoundingClientRect().x+5,hhh1.getBoundingClientRect().y+3).click();


//PAUSE 2000
//console.log("Pausing 2 sec");
//let promise2 = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 2000)});
//let result2 = await promise2;


//Main Grid: Clicking on sorting DataGrid 'Статус'
//console.log("Clicking on header 'Status' to sort TT");
//let hhh2 = iframe1.document.querySelector("table > thead > tr > td.x-treegrid-hd.x-treegrid-cell.x-treegrid-cell-DisplayStatus > div > div")
//iframe1.document.elementFromPoint(hhh2.getBoundingClientRect().x+5,hhh2.getBoundingClientRect().y+3).click();


//PAUSE 3000
console.log("Pausing 3 sec");
let promise3 = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 3000)});
let result3 = await promise3;

//Clicking on Refresh Button
console.log("Clicking on Refresh Button");
let brefr = iframe1.document.getElementsByClassName('x-toolbutton x-form-flash-toolbutton x-toolbutton-refresh');
iframe1.document.getElementById(brefr[0].id).dispatchEvent(new Event("click"));

//PAUSE 2000
console.log("Pausing 2 sec");
let promise4 = new Promise((resolve, reject) => {setTimeout(() => resolve("готово!"), 2000)});
let result4 = await promise4;

}


async function closeTT(){
let COUNT = prompt("Сколько ТТ закрыть?", "5");
for(let i=0;i< COUNT;i++){await close_one_TT();console.log("%cУспешно закрыты %s TT","color:blue", i+1);console.log("%cСпасибо Крылову Семену !!!","color:green");}
}


//**************************************************************************
closeTT();
//**************************************************************************
