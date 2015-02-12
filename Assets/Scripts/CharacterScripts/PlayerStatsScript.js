//HP & Ablity Points//

static var playerHealthMin : int = 100;
static var playerHealthMax : int = 100;

static var playerAPMin : int = 100;
static var playerAPMax : int = 100;

//Battle Combat stats//

static var playerHitPointMin : int = 40;
static var playerhitPointMax : int = 100;

static var playerDefense : int = 20;
static var playerVitality : int = 100;

//----------------------------------//

function Start () {

}


//------------HEALTH & AP ADJUST------------------//


function AdjustHealth()
{
	if(playerHealthMin >= playerHealthMax)
	{
		playerHealthMin = playerHealthMax;
	}

	if(playerHealthMin <= 0)
	{
		playerHealthMin = 0;
	}
}

function AdjustAP()
{
	if(playerAPMin >= playerAPMax)
	{
		playerAPMin = playerAPMax;
	}
	
	if(playerAPMin <= 0)
	{
		playerAPMin = 0;
	}
}

//----------------------------------//