#pragma strict

var  icePrefab : GameObject;

private var count :int;
private var timer :float;
private var instanceId :int;

function Start () {
}


function Update () { 
	timer -= Time.deltaTime;
	var positionX : float = Random.Range(-120.0,140);
	var positionY : float = Random.Range(75.0,90.0);
	if (timer < 0.0) {
		icePrefab=Instantiate(Resources.Load("icePrefab"), Vector3 (positionX, positionY, 0), Quaternion.identity);
		var gameController : GameObject = GameObject.FindWithTag("GameController");
		gameController.SendMessage("OnCreateIce");
		timer = 10.0;
		count ++;
	}
}
