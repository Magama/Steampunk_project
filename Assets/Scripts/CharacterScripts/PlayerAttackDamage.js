


		//NORMAL ATTACK//
//----------------------------------//

function PlayerNormalAttack()
{
	var randomDamage = Random.Range(PlayerStatsScript.playerHitPointMin,PlayerStatsScript.playerHitPointMax);
	
	EnemyStatsScript.enemyHealthMin -= randomDamage;
}

			//TECHNIQUES//
//----------------------------------//

function PlayerTecAttackOne ()
{
	var randomDamage = Random.Range(PlayerStatsScript.playerHitPointMin + 20,PlayerStatsScript.playerHitPointMax + 20);
	PlayerStatsScript.playerAP =-10;
}

function PlayerTecAttackTwo ()
{
	var randomDamage = Random.Range(PlayerStatsScript.playerHitPointMin + 30,PlayerStatsScript.playerHitPointMax + 30);
	PlayerStatsScript.playerAP =-20;

}

//----------------------------------//