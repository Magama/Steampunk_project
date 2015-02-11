private var showMenu : boolean = false;
var menu : GameObject;

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
		menu.gameObject.SetActive(false);
//		GameObject.Find("CanvasMenu").enabled = true;
	}
}