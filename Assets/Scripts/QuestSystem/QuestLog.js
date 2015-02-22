//This handles all the information about our quest log, such as quest details.
import System.Collections.Generic;

//GameObject vars
private var _gm : GameObject;
private var _camera : GameObject;
//End Gameobjects

//Script vars
private var _quests : Quests;
private var _charMotor : PlayerController;
//private var _mouseLook : MouseLook;
//End Script

//Booleans
private var _showQuestLog : boolean = false;
private var _completedQuests : boolean = false;
private var _questsInProgress : boolean = true;
//Sets the Quest details back to it's default
var updateQuestDetails : boolean = false;
//End Booleans

//Window vars
private var _questBackdrop : Texture2D;
private var _windowPosition : Vector2 = Vector2 (0, 0);
private var _windowSize : Vector2 = Vector2(Screen.width, Screen.height);
private var _windowRect : Rect = new Rect(_windowPosition.x, _windowPosition.y, _windowSize.x, _windowSize.y);
//End Window vars

//Start Lists
//Holds all of our quests in progress (AKA Not yet completed)
var InProgressQuestLog : List.<QuestManager> = new List.<QuestManager>();
//Hold all of our Completed Quests
var CompletedQuestLog : List.<QuestManager> = new List.<QuestManager>();
//End Lists

//Strings
var _questDetails : String;
//End Strings

var questLogStyle : GUIStyle;


function Start () {
	//GameObjects
	_gm = GameObject.FindGameObjectWithTag("GM");
	_camera = GameObject.FindGameObjectWithTag("MainCamera");
	//GameObjects End

	//Components
	_charMotor = gameObject.GetComponent(PlayerController);
	_mouseLook = gameObject.GetComponent(MouseLook);
	//End Components

	_questBackdrop = Resources.Load("menuBG2", Texture2D);
	
	_questDetails = "No Quest Selected.";

}

function Update () {
//Objektit eivät liiku?
	if(Input.GetButtonDown("Fire3") && !_showQuestLog){
		_charMotor.enabled = false;
		//_mouseLook.enabled = false;
		_camera.SetActive(false);
		_showQuestLog = true;
	}
		else if(Input.GetButtonDown("Fire3") && _showQuestLog){
		_charMotor.enabled = true;
		//_mouseLook.enabled = true;
		_camera.SetActive(true);
		_showQuestLog = false;
		updateQuestDetails = true;
	}
	
	if(updateQuestDetails){
		_questDetails = "No Quest Selected.";
		updateQuestDetails = false;
	}
}

function OnGUI() {
	//Quest Log Stuff
	if(_showQuestLog){
		//Draws the Background for the quest log
		GUI.DrawTexture(_windowRect, _questBackdrop, ScaleMode.StretchToFill);
		//Creates the box for the quests description
		GUI.Box(new Rect(Screen.width / 2, Screen.height / 2, 400, 100), _questDetails, questLogStyle);
		
		
		
		//Quests In Progress Start
		if(_questsInProgress){
			//The for loop that creates our buttons when quest gets started
			for(var x : int; x < InProgressQuestLog.Count; x++){
				//Makes sure that the quest that gets added to this list is started
				if(InProgressQuestLog[x].questStarted){
					if(!InProgressQuestLog[x].questSelected){
						//This is the button that gets created when we add a new quest
						if(GUI.Button(new Rect(100,100 + (x * 35), 120, 30), InProgressQuestLog[x].questName)){
							//If the button is clicked, makes the quest at the array [x] selected
							InProgressQuestLog[x].questSelected = true;
						}
					}
					else {
						//If clicked on another button then make the previous button not selected and started back over
						InProgressQuestLog[x].questSelected = false;
					}
					//Removes the quest from the In Progress list when it is completed
					if(InProgressQuestLog[x].questFinished){
						InProgressQuestLog.RemoveAt(x);
					}
				}
			}
		} //Quests In Progress End
		
		
		
		//Completed quests Start
				if(_completedQuests){
			//The for loop that creates our buttons when quest gets started
			for(var y : int; y < CompletedQuestLog.Count; y++){
				//Makes sure that the quest that gets added to this list is finished
				if(CompletedQuestLog[y].questFinished){
					if(!CompletedQuestLog[y].questSelected){
						//This is the button that gets created when we add a new quest
						if(GUI.Button(new Rect(100,100 + (y * 35), 120, 30), CompletedQuestLog[y].questName)){
							//If the button is clicked, makes the quest at the array [y] selected
							CompletedQuestLog[y].questSelected = true;
						}
					}
					else {
						//If clicked on another button then make the previous button not selected and started back over
						CompletedQuestLog[y].questSelected = false;
					}
				}
			}
		} //Completed quests End
		
		
		
		if(_questsInProgress){
			if(GUI.Button(new Rect(0,0,200,35), "Completed Quest")){
				_completedQuests = true;
				_questsInProgress = false;
				updateQuestDetails = true;
			}
		}
			
		if(_completedQuests){
			if(GUI.Button(new Rect(0,0,200,35), "Quests")){
				_completedQuests = false;
				_questsInProgress = true;
				updateQuestDetails = true;
			}
		}
	}

}