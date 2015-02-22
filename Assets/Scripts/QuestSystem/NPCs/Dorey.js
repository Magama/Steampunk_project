//GameObjects
private var _gm : GameObject;
private var _player : GameObject;
//GameObjects End

//Components
private var _quests : Quests;
private var _questLog : QuestLog;
private var _npcs : NPCs;
//End Components

private var _canTalk : boolean = false;
private var _talkedTo : boolean = false;
private var _accepted : boolean = false;
private var _questDone : boolean = false;
private var _turnedIn : boolean = false;

private var _npcText : String;

//collect certain ammount of coins and complete quest
var coins : int;

var boxStyle : GUIStyle;

function Start () {
	//GameObjects and Components
	_gm = GameObject.FindGameObjectWithTag("GM");
	_player = GameObject.FindGameObjectWithTag("Player");
	
	_quests = _gm.GetComponent(Quests);
	_npcs = _gm.GetComponent(NPCs);
	_questLog = _player.GetComponent(QuestLog);
	//End
}

function Update () {
	PlayerTouch();
	NPCDialogue();
	CompleteQuest();
}

function PlayerTouch () {
	if(Input.GetKeyDown(KeyCode.E) && _canTalk) {
//		Debug.Log("Talked to "); + this.name;
		_talkedTo = true;
		if(!_accepted){
			_npcs.NPCList[0].npcStage = 0;
		}
	}
}

//What needs to be done in order to complete the quest.
function CompleteQuest () {
	if(coins >= 5){

		//This tells us that the quest is complete and ready to be turned in.
		_questDone = true;
		//This changes what our NPC will say now that the quest is finished and ready to be turned in.
		_npcs.NPCList[0].npcStage = 2;
		//This changes our quest log's details.
		_quests.QuestList[0].questStage = 2;
	}
	else (
		_questDone = false;
	)
}

//This function is where we add all of our chat sequences for this NPC
function NPCDialogue () {
	if(_npcs.NPCList[0].npcStage == 0){
		//This is said before we started the quest.
		_npcs.NPCList[0].npcDialogue = "Greetings brave Traveler! I have a quest for ya! Will ya help me?";
	}
	else if(_npcs.NPCList[0].npcStage == 1){
		//This is said after we started the quest.
		_npcs.NPCList[0].npcDialogue = "Thank you for accepting the quest! I have provided the quest details in your quest log that I stole from you.";
	}
	else if(_npcs.NPCList[0].npcStage == 2){
		//This is said before we turn in the quest.
		_npcs.NPCList[0].npcDialogue = "Thanks! You're okay.";
	}
	else if(_npcs.NPCList[0].npcStage == 3){
		//This is said after we turn in the quest.
		_npcs.NPCList[0].npcDialogue = "Remember when you saved me? That was awesome.";
	}
}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag == "Player"){
		_canTalk = true;
	}
	
function OnTriggerExit (other : Collider) {
	if(other.gameObject.tag == "Player"){
		_canTalk = false;
		_talkedTo = false;
	}

}

function OnGUI () {
	if(_canTalk){
		GUI.Label(new Rect((Screen.width / 2) - 125, Screen. height / 2, 400, 25), "Press E to Talk to " + this.name);	
	}
	if(_talkedTo){
		GUI.Box(new Rect(Screen.width / 2, Screen.height / 2, 400, 100), _npcs.NPCList[0].npcDialogue, boxStyle);
		if(!_accepted){ //Started of Accept Button stuff.
			if(GUI.Button(new.Rect(Screen.width / 2, (Screen.height / 2) + 110, 80, 40), "Accept")){
				//Change the NPCs Stage to 1 (AKA Started the quest)
				_npcs.NPCList[0].npcStage = 1;
				//Change the NPCs Quest Stage to 1.
				_quests.QuestList[0].questStage = 1;
				//Adds this NPC's quest to our in progress Quest List
				_questLog.InProgressQuestLog.Add(_quests.QuestList[0]);
				_quests.QuestList[0].questStarted = true;
				_accepted = true;
			}
		}//End Accept Button stuff.
		
		//This will only show up after the quest is ready to be turned in.
		if(_questDone && !_turnedIn){
			if(GUI.Button(new.Rect(Screen.width / 2, (Screen.height / 2) + 110, 80, 40), "Turn in")){
				coins -= 5;
				_npcs.NPCList[0].npcStage = 3;
				_quests.QuestList[0].questStage = 3;
				_quests.QuestList[0].questFinished = true;
				_quests.QuestList[0].questStarted = false;
				_questLog.CompletedQuestLog.Add(_quests.QuestList[0]);
				_questLog.updateQuestDetails = true;
				_turnedIn = true;
			}
		}
	}
}