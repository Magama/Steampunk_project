static var enemyHealthMin : int = 100;
static var enemyHealthMax : int = 100;

var enemyAPMin : int = 50;
var enemyAPMax : int = 50;

static var enemyHitPointMin : int = 50;
static var enemyHitPointMax : int = 50;

var enemyDefense : int;
var enemyVitality : int;



//------------HEALTH & AP ADJUST------------------//

function AdjustHealth()
{
	if(enemyHealthMin >= enemyHealthMax)
	{
		enemyHealthMin = enemyHealthMax;
	}

	if(enemyHealthMin <= 0)
	{
		enemyHealthMin = 0;
	}
}

function AdjustAP()
{
	if(enemyAPMin >= enemyAPMax)
	{
		enemyAPMin = enemyAPMax;
	}
	
	if(enemyAPMin <= 0)
	{
		enemyAPMin = 0;
	}
}