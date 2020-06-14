import React  from 'react'

	//GO TO USER LIKED OPINION TABLE, CHECKED IF HE HAS LIKED THAT TWEET
	//IF NO, RETURN BOOLEAN LIKED FALSE, USE THE FALSE IN CODITIONAL STATEMENT

	function Like (props) {

		var numberoflikes =20;

	var liked = 'false';
	if (liked==='false'){
		//INCREMENT THE LIKE OF THAT TWEET IN DB AND ADD TO THE USER LIKED TWEET TABLE
		numberoflikes +=1;
	    return <h1>{props.username} {numberoflikes}</h1>;
	}
	else {
		//DECREMENT THE LIKE OF THAT TWEET IN DB AND REMOVE FROM THE USER LIKED TWEET TABLE
		 numberoflikes -=1;
		 return <h1>{numberoflikes}</h1>;

	}

	}
     
  function Dislike(props){

  	return <h3> {props.username} soon a srn dev </h3>
  }



export  { Like }
export { Dislike }
