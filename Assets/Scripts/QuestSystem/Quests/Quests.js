//This script is where you go to add in all the quest for the game.
import System.Collections.Generic;

//The list that holds all of our quests.
var QuestList : List.<QuestManager> = new List.<QuestManager>();

private var _player : GameObject;

private var _questLog : QuestLog;

function Start () {
	AddQuests();
	_player = GameObject.FindGameObjectWithTag("Player");
	_questLog = _player.GetComponent(QuestLog);
	
	//Just for testing!
	_questLog.InProgressQuestLog.Add(QuestList[0]);
	QuestList[0].questStage = 1;
}

function Update () {
	QuestProgress();
}

function AddQuests () {
	//Doreys Quest
	//0
	QuestList.Add(new QuestManager(1, 0, "Doreys Quest", "", false, false, false, false));
	
}

//This is where you add what the quest details are for your quests. Depending on what stage your quests are at.
function QuestProgress () {
	//Doreys Quest
	if(QuestList[0].questSelected){
		if(QuestList[0].questStage == 1){
			QuestList[0].questDetails = "I have accepted the quest from Dorey.";
			_questLog._questDetails = QuestList[0].questDetails;
		}
	
		else if(QuestList[0].questStage == 2){
			QuestList[0].questDetails = "I'm ready to turn in my quest to Dorey.";
			_questLog._questDetails = QuestList[0].questDetails;
		}
	
		else if(QuestList[0].questStage == 3){
			QuestList[0].questDetails = "I have turned in my quest and the world is safe!.";
			_questLog._questDetails = QuestList[0].questDetails;
		}
	}
}