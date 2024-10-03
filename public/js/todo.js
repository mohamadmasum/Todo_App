const todo = [
    {judul: "Membuat Website", status: "design", tanggal:"2024-10-30"}
];

function template(judul, status, index){
    const elementHTML =`
       <li>
       ${judul} | ${status} | @{NOW.format("YYYY-MM-dd")} | 
            <button onclick="hapus(${index})">Hapus</button>
            <button onclick="ubah(${index})">Ubah</button>
        </li>
        `;
    return elementHTML;
}

function tampilkanTodo() {
        const dataContainer = document.getElementById("data");
        dataContainer.innerHTML = ''; //mengosongkan isi sebelumnya
        todo.map((value,index) =>{
            dataContainer.innerHTML += template(value.judul, value.status, index);
        });
}

function tambah(){
    const judul = prompt("Masukan judul todo");
    const status = prompt("Masukan Status todo");
    //console.log(judul, status);
   if (judul && status) {//pastikan inputan tidak kosong
        const databaru = { judul: judul, status: status, tanggal: new Date().toISOString().split('T')[0]};//tambah tanggal
    todo.push(databaru);// selsesai add

    //update html
    tampilkanTodo();
   }
}

function ubah (index) {
    const judulBaru = prompt("Masukan judul baru", todo[index].judul);
    const statusBaru = prompt("Masukkan status baru", todo[index].status);

    if (judulBaru !== null && statusBaru !== null){
        todo[index].judul = judulBaru || todo[index].judul;//tetap menggunakan yg lama jika input kosong
        todo[index].status = statusBaru || todo[index].status;//tetap menggunakan yg lama jika input kosong
        tampilkanTodo();// update Tampilan
    }
}

function hapus (index) {
    if (confirm(`Apakah Anda yakin ingin menghapus todo"${todo[index].judul}"?`)){
        todo.splice(index, 1); // hapus element
        tampilkanTodo();//update tampilan
    }
    
}

// tampilan todo awal saat halaman dimuat
tampilkanTodo();