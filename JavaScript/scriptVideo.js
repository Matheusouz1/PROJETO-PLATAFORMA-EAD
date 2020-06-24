// abrir e fechar vídeo
const videoWindow = window.document.querySelector('#background-video-metd-preto')
const playerbottom = window.document.querySelector('.botao_play');
const capaVideo = window.document.querySelector('.imac');
const closebutton = window.document.querySelector('.fechar')
const video = window.document.querySelector('#video-metodologia')
//mudar a cor do botão
capaVideo.onmouseenter = function mudarcor(){
	playerbottom.style.filter='opacity(60%)';
	capaVideo.onmouseleave = function voltarcor(){
	playerbottom.style.filter='none';
	};
};
//abrir o vídeo
capaVideo.onclick = function abrir(){
		videoWindow.style.display='flex'
		video.play();
		video.currentTime=0
		closebutton.onclick = function fechar(){
			video.pause();
			videoWindow.style.display='none';	
	};
}
