<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="icon" href="./assets/images/favicon.png" type="image/png">
	<title><?= $site ?></title>
	<link rel="stylesheet" href="./assets/css/main.css?v=0.1">

	<!-- Recaptcha Here -->
	<script src="https://www.google.com/recaptcha/api.js?render=<?= $recaptcha_client_secret ?>"></script>
	<script>
		grecaptcha.ready(function() {
			grecaptcha.execute('<?= $recaptcha_client_secret ?>', {
				action: 'contact'
			}).then(function(token) {
				document.getElementById('recaptchaResponse1').value = token;
				document.getElementById('recaptchaResponse2').value = token;
			});
		});
	</script>

	<!-- Google tag (gtag.js) -->

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-JGWL9CRYCQ"></script>

	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());

		gtag('config', 'G-JGWL9CRYCQ');
	</script>

	<!-- Google tag (gtag.js) -->

	<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11434269890"></script>

	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());

		gtag('config', 'AW-11434269890');
	</script>

	<script>
		(function(w, d, t, r, u) {
			var f, n, i;
			w[u] = w[u] || [], f = function() {
				var o = {
					ti: "343110136",
					enableAutoSpaTracking: true
				};
				o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad")
			}, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {
				var s = this.readyState;
				s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null)
			}, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i)
		})(window, document, "script", "//bat.bing.com/bat.js", "uetq");
	</script>
</head>

<body>