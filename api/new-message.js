const axios = require("axios")

module.exports = async (req, res) => {
	const frases = [
		"O carnaval do Rio é o carnaval da beleza. E, diferente do que os críticos gostam de dizer, um ano nunca é igual ao que passou.",
		"Cada um sabe a dor e a delícia de ser o que é",
		"Minha mãe me deu ao mundo de maneira singular me dizendo uma sentença: pra eu sempre pedir licença, mas nunca deixar entrar.",
		"Meu fumo e minha ioga \nVocê é minha droga \nPaixão e carnaval \nMeu zen, meu bem, meu mal",
		"Meu coração não se cansa de ter esperança de um dia ser tudo o que quer",
		"Eu não tenho definições definitivas.",
		"Teu corpo combina com meu jeito, Nós dois fomos feitos muito pra nós dois.",
		"Fica, ó brisa fica pois talvez quem sabe O inesperado faça uma surpresa E traga alguém que queira te escutar",
		"Minha casa era muito feminina e fui, desde garoto, intuitivamente feminista.",
		"Qualquer maneira de amor vale a pena Qualquer maneira de amor vale amar…",
		"Uns vão, uns tão, uns são, uns dão, uns não, uns hão de. Uns pés, uns mãos, uns cabeça, uns só coração.",
		"Às vezes, a separação é a única confirmação possível daquilo que é mais valioso numa união",
		"Enquanto os homens exercem seus podres poderes \nMorrer e matar de fome, de raiva e de sede \nSão tantas vezes gestos naturais",
		"Para desentristecer \nMeu coração tão só, \nBasta encontrar você no caminho, \nArrastando meu olhar como imã…",
		"Você me deixa a rua deserta \nQuando atravessa \nE não olha pra trás…",
		"Eu não espero pelo dia em que todos os homens concordem \nApenas sei de diversas harmonias bonitas possíveis sem juízo final.",
		"Gente é pra brilhar, não pra morrer de fome.",
		"Seu orgulho tão sério \nUm grande estardalhaço \nPro meu velho cansaço.",
		"Meu destino não traço \nNão desenho, desfaço \nI acaso é o grão-senhor \nTudo que não deu certo \nE sei que não tem conserto \nMeu silêncio chorou, chorou...",
		"Como pessoa soberana nesse mundo eu vou fundo na existência e para nossa convivência você também tem que saber se reinventar.",
		"Ah, bruta flor do querer, ah, bruta flor, bruta flor \nOnde queres o ato eu sou o espírito \ne onde queres ternura eu sou tesão \nOnde queres o livre decassílabo \ne onde buscas o anjo eu sou mulher \nOnde queres prazer sou o que dói \ne onde queres tortura,mansidão \nOnde queres o lar, revolução \ne onde queres bandido eu sou o herói",
		"Atenção \nTudo é perigoso \nTudo é divino maravilhoso!",
		"Tudo certo como dois e dois são cinco.",
		"E aquilo que nesse momento se revelará aos povos \nSurpreenderá a todos não por ser exótico \nMas pelo fato de poder ter sempre estado oculto \nQuando terá sido o óbvio",
		"A vida é tão bela quando a gente ama e tem um amor.",
		"O quereres e o estares sempre afim \nDo que é em mim tão desigual \nFaz-me querer-te bem, querer-te mal \nBem a ti, mal ao quereres assim \nInfinitamente pessoal. \n \nE eu querendo querer-te sem ter fim \nE querendo aprender o total \nDo querer que há e do que não há em mim.",
		"O samba é o pai do prazer \nO samba é filho da dor",
		"É preciso estar atento e forte, não temos tempo de temer a morte.",
		"Me prenda e você me perdeu \nMe solte e eu sou todo seu"
	]

	const { message } = req.body
	
	axios
	.post(
		"https://api.telegram.org/bot" + process.env.TELEGRAM_TOKEN + "/sendMessage",
		{
			chat_id: message.chat.id,
			text: frases[Math.floor(Math.random() * frases.length)],
		}
	)
	.then((response) => {
		console.log("Message posted")
		res.end("ok")
	})
	.catch((err) => {
		// ...and here if it was not
		console.log("Error :", err)
		res.end("Error :" + err)
	})

}