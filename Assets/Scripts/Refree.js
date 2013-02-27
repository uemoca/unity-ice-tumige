@script RequireComponent(ScoreKeeper)

 private var scoreKeeper : ScoreKeeper;

function Start () {
	 scoreKeeper = GetComponent(ScoreKeeper) as ScoreKeeper;
}

function OnCreateIce(){
 	 scoreKeeper.score += 1;
}