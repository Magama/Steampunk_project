private var showMenu : boolean = false;
var menu : GameObject;
var menuInv : GameObject;
var menuStatus : GameObject;
var menuMap : GameObject;
var menuQuest : GameObject;
var menuOptions : GameObject;

function Update() {
	if(Input.GetButtonDown("Fire2")) {
		showMenu = !showMenu;
		Debug.Log("Button B!");
	}
	
	//jos menu auki, nämä eivät liiku
	if(showMenu == true) {
		Time.timeScale = 0;
		menu.gameObject.SetActive(true);
//		GameObject.Find("CanvasMenu").GetComponent().enabled = false;
	}
	
	//jos menu kiinni, nämä liikkuvat taas
	if(showMenu == false) {
		Time.timeScale = 1;
		menuInv.gameObject.SetActive(false);
		menuStatus.gameObject.SetActive(false);
		menuMap.gameObject.SetActive(false);
		menuQuest.gameObject.SetActive(false);
		menuOptions.gameObject.SetActive(false);
		menu.gameObject.SetActive(false);
//		GameObject.Find("CanvasMenu").enabled = true;
	}
}