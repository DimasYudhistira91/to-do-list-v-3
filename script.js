var judulDOM = document.getElementById('judul');
var nama = prompt('Silahkan masukkan nama anda');
judulDOM.innerHTML = 'Selamat Datang ' + nama;

var inputKegiatanDOM = document.getElementById('input-kegiatan');
var simpanDOM = document.getElementById('simpan');
var listKegiatanDOM = document.getElementById('ul');
var activity = localStorage.getItem('activity');
listKegiatanDOM.innerHTML = activity;

simpanDOM.addEventListener('click', function() {
  var kegiatan = inputKegiatanDOM.value;
  if (kegiatan === "") {
    alert('Kegiatan harus diisi!')
  } else {
  // menampilkan data ke dalam list
  listKegiatanDOM.innerHTML += '<li id="li">' + kegiatan + '<button id="delete" class="delete btn btn-danger">x</button><hr></li>';
  inputKegiatanDOM.value = "";

  var hapus = document.querySelectorAll('.delete');
  console.log(hapus);
  for (let i = 0; i < hapus.length; i++) {
    hapus[i].addEventListener('click', function(e) {
      e.target.parentElement.style.display = 'none';
    });
  }
  
  localStorage.setItem('activity', listKegiatanDOM.innerHTML);

  }
});

