//This script is where you go to add in all the quest for the game.
import System.Collections.Generic;

//The list that holds all of our quests.
var QuestList : List.<QuestManager> = new List.<QuestManager>();

private var _player : GameObject;

//var _questLog : QuestLog

function Start () {
	AddQuests();
	_player = GameObject.FindGameObjectWithTag("Player");
	//_questLog = _player.GetComponent(QuestLog);
}

function Update () {

}

function AddQuests () {
	//Doreys Quest
	//0
	QuestList.Add(new QuestManager(1, 0, "Doreys Quest", "", false, false, false, false));
	
}