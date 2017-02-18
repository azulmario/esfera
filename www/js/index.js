/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var i = 0;
var P = 0;
var Q = 0;
var text1;
var frases = new Array('No caemos de súbito en la muerte, sino que a ella vamos minuto a minuto.',
	'El Señor prefiere a la gente corriente, por eso ha hecho tanta.',
	'El que no te ama, burlando te difama.',
	'Cuando menos piensa el galgo, salta la liebre.',
	'Cada día olla, amarga el caldo.',
	'Aquí el más tonto hace relojes',
	'La tierra es un teatro, pero tiene un reparto deplorable.',
	'El que puede y no quiere, cuando él querrá no podrá. ',
	'Si marzo no ha pasado no hables mal de lo sembrado.',
	'Castillos no hay muchos, pero fantasmas por todas partes.',
	'Alta cama y poca ropa, es señal de gente loca',
	'Para escribir solo hay que tener algo que decir.',
	'Más vale algo que nada.',
	'Hombre invisible busca mujer transparente para hacer lo nunca visto',
	'Un viaje de mil millas comienza con el primer paso.',
	'Más son los amenazados que los acuchillados.',
	'Nadie se ama a sí mismo demasiado poco.',
	'El que da lo que tiene no está obligado a dar más.',
	'Quien de mucho mal es ducho, poco bien le basta.',
	'La culpa del asno echarla a la albarda.',
	'Comamos lo tuyo, bueno y santo, que de lo mío no tengo hambre.',
	'En casa llena sienta bien la torta ajena.',
	'Hijo solo, hijo bobo.',
	'Mal acabará quien pretenda adentrarse en el futuro, ignorando lo que sucedió en el pasado.',
	'Lo que para algunos son remordimientos, para otros constituyen reminiscencias.',
	'Un optimista ve una oportunidad en toda calamidad.',
	'Un pesimista ve una calamidad en toda oportunidad',
	'Inteligencia y belleza: gran rareza.',
	'Después de comer, duerme la siesta; y pasea después.',
	'El que en abril riega, en mayo siega.',
	'Vale más saber que tener.',
	'Comprender la belleza significa poseerla.',
	'No os espante el dolor; o tendrá fin o acabará con vosotros.',
	'El primer amor es una pequeña locura y una gran curiosidad.',
	'No hay mejor herencia, que trabajo y diligencia.',
	'A todo se acostumbra uno en esta vida, menos a no comer.',
	'El que no tiene celos, no está enamorado.',
	'Ni tú ni yo ni nadie dejará nunca de ser por siempre.',
	'Sigue el sendero de la serpiente, y llegarás a la muerte.',
	'A buenas ganas, huelgan las salsas.',
	'Zapateador que bien zapatea, bien se menea.',
	'Tras la tempestad viene la calma.',
	'Cuando toma cuerpo el diablo, se disfraza de fraile o de abogado.',
	'Palo dado ni Dios lo quita.',
	'Lo que no se empieza no se acaba.',
	'Exagerar es pernicioso en todos los casos, aún en la eficiencia.',
	'No hay palabra mal dicha si no fuese mal entendida.',
	'Cuando joven, de ilusiones; cuando viejo, de recuerdos.',
	'El que demonios da, diablos recibe.',
	'El que cuida la higuera, comerá de su fruto.',
	'El que al diablo quiere engañar, muy temprano levantarse ha.',
	'Madruga y verás; trabaja y habrás.',
	'La soledad no trae felicidad.',
	'Solo un idiota puede ser totalmente feliz.',
	'El afán de riquezas oscurece el sentido de lo justo y lo injusto.',
	'Entra, bebe, paga y vete.',
	'Los amores se van, los dolores se quedan.',
	'Es tan corto el amor y tan largo el olvido.',
	'La hora más oscura es justo antes del amanecer.',
	'Con ciertos amigos, no se necesitan enemigos.',
	'La belleza que atrae rara vez coincide con la belleza que enamora.',
	'La mesa pobre es madre de la salud rica.',
	'Una de cal y otra de arena, y la obra saldrá buena.',
	'La sonrisa cuesta menos que la electricidad y da más luz.',
	'Hablar significa enjuiciar; callar significa haber enjuiciado.',
	'Loca es la oveja que al lobo se confiesa.',
	'No se fíe de los ordenadores, pero menos aun de los seres humanos.',
	'Quien desparte lleva la peor parte.',
	'Hay hombres que no beben, porque ser indiscretos temen.',
	'Que tu vida sea alegre o triste, no depende de tu vida, depende de ti mismo.',
	'La dicha de la fea, la hermosa la desea.',
	'Ante Dios, todos somos iguales.',
	'Si tu dicha callaras, tu vecino no te envidiara.',
	'A pan duro, diente agudo.',
	'El amor y el dinero no pueden estar ocultos.',
	'Quien bien te quiera te hará llorar.',
	'Quién no gusta del vino, de Dios espere el castigo.',
	'El buen tiempo y el amor son dos cosas de las que nunca podemos estar seguros.',
	'Conviene más, ser tenido, que resultar exprimido.',
	'Dios aprieta, pero no ahoga.',
	'Bendita la muerte, cuando viene después de bien vivir.',
	'Ten en cuenta que el poder está muy cerca de la necesidad.',
	'En lo material la bella medianía es más segura que la megalomanía.',
	'Quien da primero, da dos veces. ',
	'La violencia es miedo de las ideas de los demás y poca fe en las propias.',
	'El pensamiento es el corcel; la razón el jinete.',
	'El que presta a un amigo, pierde el dinero y pierde el amigo.',
	'El hombre a los treinta, o vive o revienta.',
	'Nada es tan fácil como parece.',
	'La mancha de la mora con otra verde se quita.',
	'Hay dos maneras de llegar al desastre: Una, pedir lo imposible; otra, retrasar lo inevitable.',
	'Cuanto mas posee el hombre, menos se posee a si mismo.',
	'No basta tener buen ingenio; lo principal es aplicarlo bien.',
	'La mujer llora antes del matrimonio; el hombre, después.',
	'Con los años, perdió la rucia los saltos.',
	'El álamo largo y enjuto, ni da sombra ni da fruto.',
	'Hay un palacio en tu cabeza. Aprende a vivir siempre en él.',
	'Un grano no hace granero, pero ayuda al compañero.',
	'Para investigar la verdad es preciso dudar, en cuanto sea posible, de todas las cosas.',
	'La vergüenza una vez perdida, se perdió para toda la vida.');

var app = {
	// Application Constructor
	initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	},

	// deviceready Event Handler
	//
	// Bind any cordova events here. Common events are:
	// 'pause', 'resume', etc.
	onDeviceReady: function() {
		this.receivedEvent('deviceready');
	},

	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		window.plugins.insomnia.keepAwake();

		if('deviceready' == id) {
			app.iniciaJuego();
			var options = {frequency: 100 }; // Update every .1 seconds
			var watchID = navigator.accelerometer.watchAcceleration(this.onSuccess, this.onError, options);
		}
	},

	onSuccess: function(acceleration) {
		var fuerza = acceleration.x * acceleration.x + acceleration.y * acceleration.y + acceleration.z * acceleration.z;
		i = i + 1;
		P = P + (fuerza - P) / i;
		Q = Q + (Math.pow(fuerza - P, 2) - Q) / i;

		if ( Math.abs(fuerza - P) > 3 * Math.pow(Q * i / (i - 1), 0.5)) {
			setTimeout(app.agita, 40);
			//alert('Aguitado: '+fuerza);
		}
		if(i > 3000) { // 5 minutos 0.1 * 3000 = 300 = 60 * 5
			i = 0;
			P = 0;
			Q = 0;
			// alert('Overtime!');
		}
	},

	onError: function() {
		alert('¡Error!');
	},

	agita: function () {
		var suerte = Math.floor(Math.random() * frases.length);
		text1.setText(frases[suerte]);

		text1.x = Math.floor(document.documentElement.clientWidth / 2);
		text1.y = Math.floor(document.documentElement.clientHeight / 7);

		balanceText();
		i = 0;
		P = 0;
		Q = 0;

		text1.body.setSize(text1.width, text1.height, 0, 0);
	},

	iniciaJuego: function() {
		var ancho = document.documentElement.clientWidth;
		var alto = document.documentElement.clientHeight;

		function preload() {
			game.load.image('corona', 'img/blue.png');
		};

		function create() {
			game.stage.backgroundColor = '#000000';

			emitter = game.add.emitter(game.world.centerX, 500, 200);

			emitter.makeParticles('corona');

			emitter.setRotation(0, 0);
			emitter.setAlpha(0.3, 0.8);
			emitter.setScale(0.5, 1);
			emitter.gravity = -200;

			//	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
			//	The 5000 value is the lifespan of each particle before it's killed
			emitter.start(false, 5000, 100);

			game.physics.startSystem(Phaser.Physics.ARCADE);

			var style = {font: '30px Droid Sans', fill: 'white', align: 'left',
					wordWrap: true, wordWrapWidth: Math.floor(2.1 * ancho / 3),
					align: 'center', 'text-wrap': "balanced"};

			text1 = game.add.text(20, 50, "", style);
			text1.anchor.setTo(0.5, 0);

			game.physics.arcade.enable([text1]);

			text1.body.velocity.setTo(200, 200);
			text1.body.collideWorldBounds = true;

			text1.body.bounce.set(1);

			game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
			game.scale.setResizeCallback(function() {
				game.scale.setMaximum();
			})
		};

		function update() {
			game.physics.arcade.collide(text1);
		};

		var game = new Phaser.Game(ancho, alto, Phaser.CANVAS, 'phaser',{ preload: preload, create: create, update: update});

	}
};

app.initialize();

