#pragma strict

function Start () {
	startPos = transform.position;
	this.rigidbody.useGravity = false;
}

private var startPos : Vector3;
private var timer :float = 5.0;

function OnMouseDown()
{
	startPos = transform.position;
	this.rigidbody.useGravity = false;
}

function OnMouseDrag() 
{
	var hit : RaycastHit;
    if(Physics.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit)) {
        transform.position = new Vector3( hit.point.x, hit.point.y, 0.0f );
    }
}

public var addPower : float = 8.0f;

function OnMouseUp()
{
	var dir : Vector3 = startPos - this.transform.position;
	dir *= addPower;
	this.rigidbody.useGravity = true;
}

function Update () { 
	timer -= Time.deltaTime;
	if (timer < 0.0) {
		this.rigidbody.useGravity = true;
	}
	if (this.transform.position.y <= -88) {
		var myLight : GameObject = GameObject.Find("DirectionalLight");
		myLight.light.enabled = false;
	}
}
