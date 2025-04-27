let pertanyaan = document.getElementById('tanya');
let jawaban = document.getElementById('jawaban');
let send = document.getElementById('button');
let play = document.querySelector('.play');
let kunci = document.querySelector('.kunci');

play.addEventListener('click', function(){
    kunci.classList.remove('hidden')
    play.classList.add('hidden')
})

let init = 0;
 const botSay = () => {
    return ["Halo, perkenalkan nama saya Aurel, siapa namamu?"]
}

pertanyaan.innerHTML = botSay()[0];

send.addEventListener('click', function(){
    init++
    if(init === 1){
        console.log({nama: jawaban.value})
        delayBot(jawaban.value)
    } else if(init === 2){
        console.log({umur: jawaban.value})
        delayBot(jawaban.value)
    } else if(init === 3){
        console.log({hobi: jawaban.value})
        delayBot(jawaban.value)
    } else if(init === 4){
        delayBot(jawaban.value)
    } else if(init === 5){
        finishing()
    } else {
        botEnd()
    }
})

function nameGenerator(){
    const name = ['Aurel', 'Budi', 'Cindy', 'Dani', 'Eka']
    for(let i = 0; i < name.length; i++){
        if(name[i] === jawaban.value){
            return name[i]
        }
    }
}


function delayBot(jawabanUser){    
    pertanyaan.innerHTML = 'Loading ...'
    setTimeout(() => {
    if(init === 1){
        pertanyaan.innerHTML = `Halo, ${jawabanUser} Umur kamu berapa?`
    }else if(init === 2){
        pertanyaan.innerHTML = `Oh, umurmu ${jawabanUser}. Hobi kamu apa?`
    } else if(init === 3){
        pertanyaan.innerHTML = `Wah, Aku juga suka ${jawabanUser}. By the way, Kamu punya pacar ga?`
    } else if(init === 4){
        if(jawabanUser == nameGenerator(jawaban.value)){        
            pertanyaan.innerHTML = `Oh, ${jawabanUser} pacar kamu? Wah, aku juga suka dia. Dia baik banget!`
        } else {
            pertanyaan.innerHTML = `Oh, ${jawabanUser}. Oke, kita udahan dulu ya?`
            setTimeout(finishing, 5000)
        }

    }}, 2000)
}


function finishing(){
    pertanyaan.innerHTML = 'Terimakasih sudah menjawab, sampai jumpa lain waktu!'
}

function botEnd(){
    console.log('bot end')
}
