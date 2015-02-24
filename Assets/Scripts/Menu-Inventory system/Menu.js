import UnityEngine.UI;

	private var showMenu : boolean = false;
	var menu : GameObject;
	var menuInv : GameObject;
	var menuStatus : GameObject;
	var menuMap : GameObject;
	var menuQuest : GameObject;
	var menuOptions : GameObject;
	private var _player : GameObject;

	function Start() {
	_player = GameObject.FindGameObjectWithTag("Player");
	}


	function Update() {
		MenuOpenClose();
	}	

	
	function MenuOpenClose() {
	
		if(Input.GetButtonDown("Fire2")) {
			showMenu = !showMenu;
			Debug.Log("Button B!");
		}
	
		//jos menu auki, nämä eivät liiku
		if(showMenu == true) {
			Time.timeScale = 0;
			menu.gameObject.SetActive(true);
			_player.gameObject.GetComponent(PlayerController).enabled = false;
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
			_player.gameObject.GetComponent(PlayerController).enabled = true;
	//		GameObject.Find("CanvasMenu").enabled = true;
		}
	}