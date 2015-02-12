var speed : int;
var rotSpeed : int;

function FixedUpdate(){

	var hor = Input.GetAxis("Horizontal");
	var ver = Input.GetAxis("Vertical");
		
		if(hor !=0.0 || ver !=0.0)
		{
			Move(hor,ver);
		}
}

function Move(hor : float, ver : float){
	
	transform.Translate(Vector3.forward*speed*Time.deltaTime);
	Rotate(hor,ver);
}

function Rotate(hor : float, ver : float){

	var targetDirection = Vector3(hor,0.0,ver);
	var targetRotation = Quaternion.LookRotation(targetDirection,Vector3.up);
	var newRotation = Quaternion.Lerp(rigidbody.rotation,targetRotation,rotSpeed*Time.deltaTime);
	
	rigidbody.rotation = newRotation;

}