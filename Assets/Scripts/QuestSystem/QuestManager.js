public class QuestManager {
	var questID : int;
//Tracks what stage the quest is at
	var questStage : int;
//Quest name
	var questName : String;
//Quest details
	var questDetails : String;
//If the quest is started or not
	var questStarted : boolean;
//If the quest can be turned in or not
	var questTurnin : boolean;
//If the quest is finished or not AKA Has already been turned in
	var questFinished : boolean;
//If the quest is clicked on or not
	var questSelected : boolean;

	function QuestManager(ID : int, Stage : int, Name : String, Details : String, Started : boolean, TurnIn : boolean, Finished : boolean, Selected : boolean){
		this.questID = ID;
		this.questStage = Stage;
		this.questDetails = Details;
		this.questStarted = Started;
		this.questTurnin = TurnIn;
		this.questFinished = Finished;
		this.questSelected = Selected;
	}
}