let xhr = XMLHttpRequest();
xhr.onreadystatechange = function () {
	if(xhr.readystate == 4 && xhr.status == 200) {
		let mahasiswa = JSON.parse(this.responeText);
		console.log(mahasiswa);
	}
}
xhr.open('GET', 'coba.json', true);
xhr.send();