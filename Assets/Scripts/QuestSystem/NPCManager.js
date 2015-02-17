public class NPCManager {
//Name of ID
	var npcID : int;
//The Stage of the npc (Depending on the Stage the Quest is at)
	var npcStage : int;
//Name of NPC
	var npcName : String;
//The dialogue of the npc (Depending on the Stage the NPC is at)
	var npcDialogue : String;
	
	function NPCManager(ID : int, Stage : int, Name : String, Dialogue : String){
		this.npcID = ID;
		this.npcStage = Stage;
		this.npcName = Name;
		this.npcDialogue = Dialogue;
	}
}