// Create a root reference
var name = window.location.href.split('=')[1];
var storageRef = firebase.storage().ref();

for(let i = 1; i < 6; i++){

	var form = document.getElementById("form"+i.toString());
	form.addEventListener('submit', uploadVideo(i));
}
// var form = document.getElementById("form");
// form.addEventListener('submit', uploadVideo());
var id_indicator = document.getElementById("id_indicator");
id_indicator.innerText = name;

function uploadVideo(index){
	return function curried_function(event){
		if(name === ""){
			alert("あなたの番号を入力してください.");
		}else{
			var file = document.getElementById("vid"+index.toString()).files[0];
			var ref = storageRef.child(name+'/'+index+'-'+Date.now()+'/');
			var upload = document.getElementById("upload");
			upload.innerText = "動画" + index.toString()+"アップロード中です...ブラウザを閉じないでください."
			ref.put(file).then((snapshot) =>{
			alert("動画" + index.toString()+"アップロード完了.ありがとうございました.");
			upload.innerText = "動画" + index.toString()+"アップロード完了. ありがとうございました."
			});
			event.preventDefault();

		}


	}
}



