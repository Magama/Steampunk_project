var menuSkin : GUISkin;

var healthPotion : int = 0;
var tpPotion : int = 0;
var weapon : int = 0;
var armor : int = 0;

private var showGUI : boolean = false;

function Update() {
	if(Input.GetButtonDown("Fire2")) {
	//	showGUI = !showGUI;
		Debug.Log("Button B!");
	}
	
	//jos inventori auki, nämä eivät liiku
	if(showGUI == true) {
		Time.timeScale = 0;
//		GameObject.Find("").GetComponent().enabled = false;
	}
	
	//jos inventori kiinni, nämä liikkuvat taas
	if(showGUI == false) {
		Time.timeScale = 1;
//		GameObject.Find("").GetComponent().enabled = true;
	}
}