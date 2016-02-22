jQuery(document).ready(function($) {
	$(".cover").on("mouseover", function(){
		$(".cover").removeClass("right");

		var N  = $(".cover").index(this);
		// console.info(N+2);
		$(".cover:nth-child(n+" + (N+2) + ")").addClass("right");
	})
});