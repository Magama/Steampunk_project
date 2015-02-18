//This handles all the information about our quest log, such as quest details.
import System.Collections.Generic;

//GameObject vars
private var _gm : GameObject;
private var _camera : GameObject;
//End Gameobjects

//Script vars
private var _quests : Quests;
private var _charMotor : CharacterMotor;
private var _mouseLook : MouseLook;
//End Script

//Booleans
private var _showQuestLog : boolean = false;
private var _completedQuests : boolean = false;
private var _questsInProgress : boolean = true;
//Sets the Quest details back to it's default
private var _updateQuestDetails : boolean = false;
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
	_charMotor = gameObject.GetComponent(CharacterMotor);
	_mouseLook = gameObject.GetComponent(MouseLook);
	//End Components

	_questBackdrop = Resources.Load("menuBG2", Texture2D);
	
	_questDetails = "No Quest Selected.";

}

function Update () {

}