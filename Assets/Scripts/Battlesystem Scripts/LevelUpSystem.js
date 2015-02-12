
var currentXP = 0;
var maxXP = 100;

var levelUp = 1;

//----------------------------------//

function Update () 
{
	if(currentXP >= maxXP)
	{
		LevelUpSystem();
	}	
}

function LevelUpSystem()
{
	currenXP = 0;
	maxXP = maxXP * 2;
	levelUp++;
	
	//hitpoints up / attack up
	//defense up
	//vitality Up??
	//Hp up
	//AP up
	
		//Jos pelaaja saavuttaa level 3, hän saa uuden taidon
		if(levelUp == 3)
		{
			//Tekniikka hyökkäys hankittu
		}
		
		//Jos pelaaja saavuttaa level 6, hän saa uuden taidon
		if(levelUp == 6)
		{
			//Tekniikka hyökkäys hankittu
		}
		
		if(levelUp == 8)
		{
			//Tekniikka hyökkäys hankittu
		}
	
}