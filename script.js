
<script type="text/javascript">
			function updateOutput(){
				$("iframe").contents().find("html").html("<html><head><style type'text/css'>" + $("#cssPannel").val() + "</style></head><body>" + $("#htmlPannel").val() + "</body></html>");

				document.getElementById("outputPannel").contentWindow.eval($("#javascriptPannel").val());
			}

			$(".toggleButton").hover(function(){
				$(this).addClass("highlightButton");	
			}, function(){
				$(this).removeClass("highlightButton");
			});

			$(".toggleButton").click(function(){
				$(this).toggleClass("active");
				$(this).removeClass("highlightButton");

				var pannelId = $(this).attr("id") + "Pannel";
				$("#"+pannelId).toggleClass("hidden");

				var noOfActivePannels = 4 - $('.hidden').length;

				$(".pannel").width(($(window).width()/noOfActivePannels)-10);
			});

			$(".pannel").height($(window).height()-$("#header").height()-15);

			$(".pannel").width(($(window).width()/2)-10);

			updateOutput();

			$("textarea").on('change keyup paste', function(){
				updateOutput();
			});
</script>