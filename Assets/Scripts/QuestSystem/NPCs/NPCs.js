//This script is where you go to add in all the NPCs for the game.
import System.Collections.Generic;

//The list of all NPCs
var NPCList : List.<NPCManager> = new List.<NPCManager>();

//Commenting out, will be used later!
//var _quest : Quests;

function Start() {
	NPC();
}

function NPC() {
	//Dorey (the NPCs name)
	//0
	NPCList.Add(new NPCManager(1, 0, "Dorey", ""));
	//1 (second NPC), etc.
	NPCList.Add(new NPCManager(1, 0, "Elinor", ""));
}