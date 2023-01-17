import { author_musics, n_playlist, like, res } from './data.js'

let arr_number = []
let lenght_songs = document.querySelector('.lenght_songs')
let form_add_playlist = document.forms.add_to_playlist
let random_music = document.querySelector('.random_music')
let recently_listened = document.querySelector('.recently_listened')
let liked_tracks = document.querySelector('.liked_tracks')
let div_timeline = document.querySelector('.div_timeline')
let create_playlist = document.querySelector('.create_playlist')
let won = document.querySelector('.won')
let liked_text = document.querySelector('.liked_text')
let close_img = document.querySelector('.close_img')
let add_to_playlist_modal_window = document.querySelector('.add_to_playlist_modal_window')
let div_for_blur_bg = document.querySelector('.div_for_blur_bg')
let opacity_block = document.querySelector('.opacity_block')
let name_of_author = document.querySelectorAll('.name_of_author')
let name_of_music = document.querySelectorAll('.name_of_music')
let third_block = document.querySelector('.third_block')
let new_playlists = document.querySelector('.new_playlists')
let fourth_block = document.querySelector('.fourth_block')
let name_of_playlists = document.querySelector('.name_of_playlist')
let new_playlist = document.createElement('p')
let progress_bar1 = document.querySelector('.progress_bar')
let scroll_block_in_aside = document.querySelector('.scroll_block_in_aside')
let audio = document.createElement('audio')
let source = document.createElement('source')
let music_name = document.querySelector('.music_name')
let author_name = document.querySelector('.author_name')
let button_next = document.querySelector('.buttonNext')
let button_prev = document.querySelector('.button_prev')
let play = document.querySelector(".play");
let start = document.querySelector('.start')
let end = document.querySelector('.end')
function timeLive() {
    setTimeout(() => {
        setInterval(() => {
            let duration = audio.duration
            let currentTime = audio.currentTime
            let min = Math.floor(duration / 60)
            let s = Math.floor(duration % 60)
            let min1 = Math.floor(currentTime / 60)
            let s1 = Math.floor(currentTime % 60)
            end.innerHTML = min + ":" + s
            start.innerHTML = min1 + ":" + s1


        }, 100)
    }, 100)
}
function init() {
    audio.setAttribute("src", "./Music/" + author_musics[counter].name + ".mp3")
    timeLive()
}
function pausePlay() {
    timeLive()
    if (audio.paused) {
        audio.play();
    } else if (audio.played) {
        audio.pause();
    }
}
function prevTrack() {
    counter--;
    timeLive()
    if (counter < 0) {
        counter = author_musics.length - 1;
    }
    console.log(counter)
}
let next = () => {
    counter++
    timeLive()
    if (counter == author_musics.length) {
        counter = 0
    }
    console.log(counter)
}
let listen_now = document.querySelectorAll('.listen_now')
let ranM = () => {
    author_musics.sort(function (a, b) {
        if (a.number_id > b.number_id) {
            return 1;
        }
        if (a.number_id < b.number_id) {
            return -1;
        }
        return 0;
    });
    for (let item of author_musics) {
        form_add_playlist.onsubmit = () => {
            let obj = {}
            obj.music = []
            event.preventDefault()
            let fm = new FormData(event.target)
            fm.forEach((value, key) => {
                obj[key] = value
            })
            obj.music.push(item)
            n_playlist.push(obj)
            console.log(item)
            let playlistsDiv = document.querySelector('.third_block')
            let pNew = document.createElement('p')
            pNew.classList.add('pNew')
            pNew.innerHTML = name_of_playlists.value
            let neww = document.querySelector('.neww')
            let newww = document.querySelector('.newww')
            newww.innerHTML = '0 songs'
            neww.innerHTML = name_of_playlists.value
            console.log(pNew);
            playlistsDiv.append(pNew)
        }
        let songs_in_aside = document.createElement('div')
        let p_name_of_songs = document.createElement('p')
        let p_timeLine = document.createElement('p')
        p_name_of_songs.innerHTML = item.songs_name
        p_timeLine.innerHTML = item.time_line
        songs_in_aside.classList.add('songs_in_aside')
        songs_in_aside.append(p_name_of_songs, p_timeLine)
        scroll_block_in_aside.append(songs_in_aside)
        new_playlist.setAttribute('class', 'new_playlist')
        third_block.append(new_playlist)
        let ten_block_in_main = document.createElement('div')
        let first_in_ten = document.createElement('div')
        let trackName = document.createElement('a')
        let artistkName = document.createElement('a')
        let image0 = document.createElement('img')
        let span1 = document.createElement('span')
        let p_in_span = document.createElement('p')
        let second_in_ten = document.createElement('div')
        let image1 = document.createElement('img')
        let span2 = document.createElement('span')
        let image3 = document.createElement('img')
        let span_number = document.createElement('span')
        span_number.style.width = '20px'
        span_number.innerHTML = item.line_number
        span1.innerText = item.author
        p_in_span.innerText = item.songs_name
        image0.setAttribute('src', './Icons/music icons.png')
        image0.style.margin = '0 10px'
        ten_block_in_main.classList.add('ten_block_in_main')
        first_in_ten.classList.add('first_in_ten')
        image0.classList.add('first_in_ten_image')
        second_in_ten.classList.add('second_in_ten')
        image1.setAttribute('src', './Icons/love.svg')
        span2.innerText = item.time_line
        image3.setAttribute('src', './Icons/more-horizontal.svg')
        image3.setAttribute('class', 'more')
        for (let name_auth of name_of_author) {
            name_auth.innerHTML = item.author
        }
        for (let name_mus of name_of_music) {
            name_mus.innerHTML = item.songs_name
        }
        author_name.innerHTML = item.author
        first_in_ten.append(span_number, image0, span1)
        span1.append(p_in_span, trackName, artistkName)
        second_in_ten.append(image1, span2, image3)
        ten_block_in_main.append(first_in_ten, second_in_ten)
        random_music.append(ten_block_in_main)
        let add_to_playlist = document.createElement('div')
        let add_like = document.createElement('div')
        let add_to_playlist_button = document.createElement('div')
        let listen_now = document.createElement('div')
        let p_like = document.createElement('p')
        let p_add = document.createElement('p')
        let p_listen = document.createElement('p')
        p_like.innerText = 'like'
        p_add.innerText = 'add to playlist'
        p_listen.innerText = 'listen now'
        add_to_playlist.classList.add('modal_window_div')
        add_like.classList.add('in_modal_window_three_block')
        listen_now.classList.add('in_modal_window_three_block')
        add_to_playlist_button.classList.add('in_modal_window_three_block')
        add_like.append(p_like)
        add_to_playlist_button.append(p_add)
        listen_now.append(p_listen)
        add_to_playlist.append(add_like, add_to_playlist_button, listen_now)
        second_in_ten.append(add_to_playlist)
        image1.onclick = () => {
            let i = 0
            let likedd = false
            let ten_block_in_main = document.createElement('div')
            let first_in_ten = document.createElement('div')
            let trackName = document.createElement('a')
            let artistkName = document.createElement('a')
            let image0 = document.createElement('img')
            let span1 = document.createElement('span')
            let p_in_span = document.createElement('p')
            let second_in_ten = document.createElement('div')
            let image1 = document.createElement('img')
            let span2 = document.createElement('span')
            let image3 = document.createElement('img')
            let span_number = document.createElement('span')

            span_number.style.width = '20px'
            span_number.innerHTML = item.line_number
            span1.innerText = item.author
            p_in_span.innerText = item.songs_name
            image0.setAttribute('src', './Icons/music icons.png')
            image0.style.margin = '0 10px'
            ten_block_in_main.classList.add('ten_block_in_main')
            ten_block_in_main.style.width = '400px'
            first_in_ten.classList.add('first_in_ten')
            image0.classList.add('first_in_ten_image')
            second_in_ten.classList.add('second_in_ten')
            image1.setAttribute('src', './Icons/love.svg')
            span2.innerText = item.time_line
            image3.setAttribute('src', './Icons/more-horizontal.svg')
            image3.setAttribute('class', 'more')
            for (let name_auth of name_of_author) {
                name_auth.innerHTML = item.author
            }
            for (let name_mus of name_of_music) {
                name_mus.innerHTML = item.songs_name
            }
            author_name.innerHTML = item.author
            music_name.innerHTML = item.songs_name

            first_in_ten.onclick = () => {
                counter++
                timeLive()
                for (let name_auth of name_of_author) {
                    name_auth.innerHTML = item.artist
                }
                for (let name_mus of name_of_music) {
                    name_mus.innerHTML = item.track
                }
                author_name.innerHTML = item.artist
                music_name.innerHTML = item.track
                audio.setAttribute("src", "./Music/" + item.name + ".mp3")
                source.setAttribute('type', 'audio/mpeg')
                audio.setAttribute('controls', 'controls')
                audio.setAttribute('autoplay', 'autoplay')
                res.unshift(item)
                RL()
                audio.onended = function () {
                    next()
                };
                pausePlay()
                play.onclick = () => {
                    pausePlay()
                }
                button_next.onclick = () => {
                    init()
                    next()
                    trackName.innerHTML = music[counter - 1].track
                    artistName.innerHTML = music[counter - 1].artist
                    name_of_author.innerHTML = music[counter - 1].artist
                    name_of_music.innerHTML = music[counter - 1].track
                }
                button_prev.onclick = () => {
                    init()
                    prevTrack()
                    trackName.innerHTML = music[counter + 1].track
                    artistName.innerHTML = music[counter + 1].artist
                }
            }
            if (i == 0 & likedd == false) {
                like.push(item)
                LS()
                likedd = true
                i++
            } else {
                p_like.innerHTML = 'Likedd'
            }
            liked_text.innerHTML = like.length + ' ' + 'songs'
            first_in_ten.append(span_number, image0, span1)
            span1.append(p_in_span, trackName, artistkName)
            second_in_ten.append(image1, span2, image3)
            ten_block_in_main.append(first_in_ten, second_in_ten)
            won.append(ten_block_in_main)
        }
        image3.onclick = () => {
            add_to_playlist.classList.toggle('active_modal_window')
        }
        p_like.onclick = () => {
            let i = 0
            let likedd = false
            let ten_block_in_main = document.createElement('div')
            let first_in_ten = document.createElement('div')
            let trackName = document.createElement('a')
            let artistkName = document.createElement('a')
            let image0 = document.createElement('img')
            let span1 = document.createElement('span')
            let p_in_span = document.createElement('p')
            let second_in_ten = document.createElement('div')
            let image1 = document.createElement('img')
            let span2 = document.createElement('span')
            let image3 = document.createElement('img')
            let span_number = document.createElement('span')
            span_number.style.width = '20px'
            span_number.innerHTML = item.line_number
            span1.innerText = item.author
            p_in_span.innerText = item.songs_name
            image0.setAttribute('src', './Icons/music icons.png')
            image0.style.margin = '0 10px'
            ten_block_in_main.classList.add('ten_block_in_main')
            ten_block_in_main.style.width = '400px'
            first_in_ten.classList.add('first_in_ten')
            image0.classList.add('first_in_ten_image')
            second_in_ten.classList.add('second_in_ten')
            image1.setAttribute('src', './Icons/love.svg')
            span2.innerText = item.time_line
            image3.setAttribute('src', './Icons/more-horizontal.svg')
            image3.setAttribute('class', 'more')
            for (let name_auth of name_of_author) {
                name_auth.innerHTML = item.author
            }
            for (let name_mus of name_of_music) {
                name_mus.innerHTML = item.songs_name
            }
            author_name.innerHTML = item.author
            music_name.innerHTML = item.songs_name
            first_in_ten.onclick = () => {
                counter++
                timeLive()
                for (let name_auth of name_of_author) {
                    name_auth.innerHTML = item.artist
                }
                for (let name_mus of name_of_music) {
                    name_mus.innerHTML = item.track
                }
                author_name.innerHTML = item.artist
                music_name.innerHTML = item.track
                audio.setAttribute("src", "./Music/" + item.name + ".mp3")
                source.setAttribute('type', 'audio/mpeg')
                audio.setAttribute('controls', 'controls')
                audio.setAttribute('autoplay', 'autoplay')
                res.unshift(item)
                RL()
                audio.onended = function () {
                    next()
                };
                pausePlay()
                play.onclick = () => {
                    pausePlay()
                }
                button_next.onclick = () => {
                    init()
                    next()
                    trackName.innerHTML = music[counter - 1].track
                    artistName.innerHTML = music[counter - 1].artist
                    name_of_author.innerHTML = music[counter - 1].artist
                    name_of_music.innerHTML = music[counter - 1].track
                }
                button_prev.onclick = () => {
                    init()
                    prevTrack()
                    trackName.innerHTML = music[counter + 1].track
                    artistName.innerHTML = music[counter + 1].artist
                }
            }
            if (i == 0 & likedd == false) {
                like.push(item)
                LS()
                likedd = true
                i++
            } else {
                p_like.innerHTML = 'Likedd'
            }
            liked_text.innerHTML = like.length + ' ' + 'songs'
            lenght_songs.innerHTML = like.length + ' ' + 'songs'
            first_in_ten.append(span_number, image0, span1)
            span1.append(p_in_span, trackName, artistkName)
            second_in_ten.append(image1, span2, image3)
            ten_block_in_main.append(first_in_ten, second_in_ten)
            won.append(ten_block_in_main)
        }
        listen_now.onclick = () => {
            counter++
            div_timeline.classList.add('.margin_top')
            let artistName = document.querySelector('.author_name')
            let trackName = document.querySelector('.music_name')
            for (let name_auth of name_of_author) {
                name_auth.innerHTML = item.artist
            }
            for (let name_mus of name_of_music) {
                name_mus.innerHTML = item.track
            }
            trackName.innerHTML = item.track
            artistName.innerHTML = item.author
            audio.setAttribute("src", "./Music/" + item.name + ".mp3")
            source.setAttribute('type', 'audio/mpeg')
            audio.setAttribute('controls', 'controls')
            audio.setAttribute('autoplay', 'autoplay')
            res.unshift(item)
            RL()
            audio.onended = function () {
                next()
            };
            pausePlay()
            play.onclick = () => {
                pausePlay()
            }
            button_next.onclick = () => {
                init()
                trackName.innerHTML = item[counter - 1].track
                artistName.innerHTML = item[counter - 1].author
                next()
            }
            button_prev.onclick = () => {
                init()
                for (let item2 of like) {
                    trackName.innerHTML = item[counter - 1].track
                    artistName.innerHTML = item[counter - 1].author
                }
                prevTrack()
            }
        }




        add_to_playlist_button.onclick = () => {
            add_to_playlist_modal_window.classList.add('add_to_playlist_modal_window_active')
            div_for_blur_bg.classList.add('blur_bg_active')
        }
        create_playlist.onclick = () => {
            add_to_playlist_modal_window.classList.toggle('add_to_playlist_modal_window_active1')
            opacity_block.classList.toggle('opacity_block_active')
        }
        close_img.onclick = () => {
            add_to_playlist_modal_window.classList.remove('add_to_playlist_modal_window_active')
            div_for_blur_bg.classList.remove('blur_bg_active')
            add_to_playlist_modal_window.style.height = '403px'
            opacity_block.classList.remove('opacity_block_active')
            add_to_playlist_modal_window.classList.remove('add_to_playlist_modal_window_active1')
        }
        div_for_blur_bg.onclick = () => {
            add_to_playlist_modal_window.classList.remove('add_to_playlist_modal_window_active')
            div_for_blur_bg.classList.remove('blur_bg_active')
            add_to_playlist_modal_window.style.height = '403px'
            opacity_block.classList.remove('opacity_block_active')
        }
        ten_block_in_main.onmouseenter = () => {
            image3.classList.add('filter_class')
        }
        image3.onmouseenter = () => {
            image3.classList.add('filter_class')
        }
    }
}
ranM()
let RL = () => {
    recently_listened.innerHTML = ''
    let p = document.createElement('p')
    p.innerHTML = '10 RESENTLY LISTENED'
    p.classList.add('category')
    p.style.color = 'gray'
    recently_listened.append(p)
    for (let item of res) {
        let ten_block_in_main = document.createElement('div')
        let first_in_ten = document.createElement('div')
        let trackName = document.createElement('a')
        let artistkName = document.createElement('a')
        let image0 = document.createElement('img')
        let span1 = document.createElement('span')
        let p_in_span = document.createElement('p')
        let second_in_ten = document.createElement('div')
        let image1 = document.createElement('img')
        let span2 = document.createElement('span')
        let image3 = document.createElement('img')
        let span_number = document.createElement('span')
        let trackName2 = document.createElement('a')
        let span_time2 = document.createElement('span')
        let itemDiv = document.createElement('div')
        let span = document.createElement('span')
        span.innerHTML = res.indexOf(item) + 1
        span.style.width = '20px'
        span1.innerText = item.artist
        p_in_span.innerText = item.track
        image0.setAttribute('src', './Icons/music icons.png')
        image0.style.margin = '0 10px'
        ten_block_in_main.classList.add('ten_block_in_main')
        first_in_ten.classList.add('first_in_ten')
        image0.classList.add('first_in_ten_image')
        second_in_ten.classList.add('second_in_ten')
        image1.setAttribute('src', './Icons/love.svg')
        span2.innerText = '3;20'
        image3.setAttribute('src', './Icons/more-horizontal.svg')
        image3.setAttribute('class', 'more')
        span_time2.innerText = '3;20'
        name_of_music.innerHTML = item.songs_name
        trackName2.innerText = item.songs_name
        name_of_author.innerHTML = item.author
        author_name.innerHTML = item.author
        span_number.innerHTML = item.line_number
        first_in_ten.append(span_number, image0, span1)
        span1.append(p_in_span, trackName, artistkName)
        second_in_ten.append(image1, span2, image3)
        ten_block_in_main.append(first_in_ten, second_in_ten)
        recently_listened.append(ten_block_in_main)
    }
}

let LS = () => {
    scroll_block_in_aside.innerHTML = ""
    fourth_block.innerHTML = ''
    like.splice(10)
    let p = document.createElement('p')
    let spanNav = document.createElement('span')
    spanNav.innerHTML = 'Liked songs'
    spanNav.style.color = 'gray'
    scroll_block_in_aside.append(p)
    fourth_block.append(spanNav)
    for (let item of like) {
        let ten_block_in_main = document.createElement('div')
        let first_in_ten = document.createElement('div')
        let trackName = document.createElement('a')
        let artistkName = document.createElement('a')
        let image0 = document.createElement('img')
        let span1 = document.createElement('span')
        let p_in_span = document.createElement('p')
        let second_in_ten = document.createElement('div')
        let image1 = document.createElement('img')
        let span2 = document.createElement('span')
        let image3 = document.createElement('img')
        let span_number = document.createElement('span')
        let trackName2 = document.createElement('a')
        let author_name2 = document.createElement('a')
        let span_time2 = document.createElement('span')
        let itemDiv = document.createElement('div')
        let span = document.createElement('span')
        span.innerHTML = like.indexOf(item) + 1
        span.style.width = '20px'
        itemDiv.classList.add('other')
        fourth_block.classList.add('scroll_mdaa')
        span1.innerText = item.artist
        p_in_span.innerText = item.track
        image0.setAttribute('src', './Icons/music icons.png')
        image0.style.margin = '0 10px'
        ten_block_in_main.classList.add('ten_block_in_main')
        first_in_ten.classList.add('first_in_ten')
        image0.classList.add('first_in_ten_image')
        second_in_ten.classList.add('second_in_ten')
        image1.setAttribute('src', './Icons/love.svg')
        span2.innerText = item.time_line
        image3.setAttribute('src', './Icons/more-horizontal.svg')
        image3.setAttribute('class', 'more')
        span_time2.innerText = item.time_line
        name_of_music.innerHTML = item.track
        trackName2.innerText = item.track
        author_name2.innerText = item.artist
        name_of_author.innerHTML = item.artist
        author_name.innerHTML = item.artist
        span_number.innerHTML = item.line_number
        author_name2.style.color = '#00ecbe'
        first_in_ten.append(span_number, image0, span1)
        span1.append(p_in_span, trackName, artistkName)
        second_in_ten.append(image1, span2, image3)
        ten_block_in_main.append(first_in_ten, second_in_ten)
        scroll_block_in_aside.append(ten_block_in_main)
        liked_tracks.append(scroll_block_in_aside)
        itemDiv.append(author_name2, trackName2, span_time2)
        fourth_block.append(itemDiv)
        first_in_ten.onclick = () => {
            counter++
            timeLive()
            for (let name_auth of name_of_author) {
                name_auth.innerHTML = item.artist
            }
            for (let name_mus of name_of_music) {
                name_mus.innerHTML = item.track
            }
            author_name.innerHTML = item.artist
            music_name.innerHTML = item.track
            audio.setAttribute("src", "./Music/" + item.name + ".mp3")
            source.setAttribute('type', 'audio/mpeg')
            audio.setAttribute('controls', 'controls')
            audio.setAttribute('autoplay', 'autoplay')
            res.unshift(item)
            RL()
            audio.onended = function () {
                next()
            };
            pausePlay()
            play.onclick = () => {
                pausePlay()
            }
            button_next.onclick = () => {
                init()
                next()
                trackName.innerHTML = music[counter - 1].track
                artistName.innerHTML = music[counter - 1].artist
                name_of_author.innerHTML = music[counter - 1].artist
                name_of_music.innerHTML = music[counter - 1].track
            }
            button_prev.onclick = () => {
                init()
                prevTrack()
                trackName.innerHTML = music[counter + 1].track
                artistName.innerHTML = music[counter + 1].artist

            }
        }
    }
}
LS()
export { new_playlist, new_playlists }
