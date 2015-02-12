private var showGUI : boolean = false;

var battleMenu : GameObject;
var tecExit : GameObject;

function Update()
{
	if(Input.GetButton("Fire1"))
	{
		battleMenu.gameObject.SetActive(true);	 
	}
}

	if(Input.GetButton("Fire2"))
	{
		tecExit.gameObject.SetActive(false);
	}

function AttackPhase () 
{
		Debug.Log("Attacked!");
	
}

function Techniques ()
{
		
}

function Defend()
{
	//Hahmo suojaa
}

function Item()
{
		//näytä item GUI lista();
	
}
