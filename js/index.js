
import { author_musics, like } from './data.js'
import { new_playlist, new_playlists } from './other.js'
let body = document.body
let header = document.querySelector('header')
let div_for_search = document.querySelector('.div_for_search')
let settings_text = document.querySelector('.settings_text')
let settings_block = document.querySelector('.settings_block')
let main = document.querySelector('main')
let home_page_text = document.querySelector('.home_page_text')
let playlist_text = document.querySelector('.playlist_text')
let pseudo_main = document.querySelector('.pseudo_main')
let checkbox = document.querySelector('.ios-toggle')
let free_user = document.querySelector('.free_user')
let form = document.forms.settings_name
let name_b = document.querySelector('.name_b')
let new_name = document.querySelector('.new_name')
let like_and_text = document.querySelector('.like_and_text')
let liked_songs_block = document.querySelector('.liked_songs_block')
let dancing_text = document.querySelector('.dancing_text')
let dancing_block = document.querySelector('.dancing_block')
let typing22 = document.querySelector('.typing22')
let typing = document.querySelector('.typing')
let input_in_header = document.querySelector('.input_in_header')
let flexx = document.querySelector('.flexx')
let aside = document.querySelector('aside')
let search_icon = document.querySelector('.search_icon')
let menu_active = document.querySelector('.menu_active')
let oneOne = document.querySelector('.oneOne')
let twoTwo = document.querySelector('.twoTwo')
let threeThree = document.querySelector('.threeThree')
let logo_in_header = document.querySelector('.logo_in_header')
let blue_block = document.querySelectorAll('.blue_block')
let search_button = document.querySelector('.search_button')
let footer = document.querySelector('.first_footer')
let player_list = document.querySelector('.player_list')
let go_back = document.querySelector('.go_back')
let premium_us = document.querySelector('.premium_us')
let footer_wrap = document.querySelector('footer')
let div_text_name = document.querySelector('.div_text_name')
for (let name_item of author_musics) {
    let idMusic = author_musics.indexOf(name_item)
    let author1 = document.querySelector('.author1')
    let music1 = document.querySelector('.music1')
    author1.innerHTML = name_item.author
    music1.innerHTML = name_item.songs_name
}
footer.onclick = () => {
    player_list.classList.add('player_list_active')
    main.classList.add('main_diactive')
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    home_page_text.style.color = '#00ECBE'
    settings_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    like_and_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    footer_wrap.classList.add('footer_opacity')
}
go_back.onclick = () => {
    player_list.classList.remove('player_list_active')
    main.classList.remove('main_diactive')
    footer_wrap.classList.remove('footer_opacity')
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    home_page_text.style.color = '#00ECBE'
    settings_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    like_and_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
}
search_icon.onclick = () => {
    header.classList.add('header_Zindex')
    name_b.classList.toggle('name_b1')
    free_user.classList.toggle('free_user1')
    input_in_header.classList.toggle('width_100')
    div_for_search.classList.remove('div_for_search_act')
    aside.classList.toggle('aside_active1')
    typing.classList.remove('input_active')
    typing22.classList.toggle('typing22_active')
    flex_block_in_header_2.style.opacity = '0'
}
search_button.onclick = () => {
    typing.classList.toggle('input_active')
    flex_block_in_header_2.style.opacity = '0'
}
menu_active.onclick = () => {
    div_text_name.classList.toggle('div_text_name_act')
    aside.classList.toggle('aside_active')
}
for (let blue_bg of blue_block) {
    blue_bg.onclick = () => {
        blue_bg.classList.toggle('blue_block_active')
    }
}
let flex_block_in_header_2 = document.querySelector('.flex_block_in_header_2')
input_in_header.onkeyup = () => {
    input_in_header.style.height = '208px'
    let text = event.target.value.toLowerCase()
    let find_elements = author_musics.filter(item => item.songs_name.toLowerCase().includes(text))
    reload_search(find_elements)
}
let reload_search = (arr) => {
    flex_block_in_header_2.innerHTML = ""
    for (let item of arr) {
        let p001 = document.createElement("p")
        let p002 = document.createElement("p")
        p001.innerText = item.songs_name + ' ' + '-' + ' ' + item.author + ' ' + item.time_line
        p001.style.color = 'white'
        p001.style.fontSize = '18px'
        p002.innerText = item.songs_name + ' ' + '-' + ' ' + item.author + ' ' + item.time_line
        p002.style.color = 'white'
        p002.style.fontSize = '18px'
        p001.onmouseenter = () => {
            p001.style.color = '#00ecbe'
            p001.style.textDecoration = 'underline'
        }
        p001.onmouseleave = () => {
            p001.style.color = 'white'
            p001.style.textDecoration = 'none'
        }
        p002.onmouseenter = () => {
            p002.style.color = '#00ecbe'
            p002.style.textDecoration = 'underline'
        }
        p002.onmouseleave = () => {
            p002.style.color = 'white'
            p002.style.textDecoration = 'none'
        }
        flex_block_in_header_2.append(p001)
        div_for_search.append(p002)
    }
}
typing22.onkeyup = () => {
    let text1 = event.target.value.toLowerCase()
    let find_elements1 = author_musics.filter(item => item.songs_name.toLowerCase().includes(text1))
    reload_search(find_elements1)
    div_for_search.classList.add('div_for_search_act')
}
body.onclick = () => {
    input_in_header.style.height = '50px'
}
form.onsubmit = () => {
    event.preventDefault()
    let obj = {}
    let fm = new FormData(event.target)
    fm.forEach((value, key) => {
        obj[key] = value
    })
    name_b.innerHTML = new_name.value
}
oneOne.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    main.classList.add('main_diactive')
    body.style.height = '100vh'
    player_list.classList.remove('player_list_active')
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    dancing_block.classList.remove('dancing_block_active')
    liked_songs_block.classList.add('liked_songs_block_active')
    settings_text.style.color = '#ffffff'
    home_page_text.style.color = '#ffffff'
    like_and_text.style.color = '#00ECBE'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    new_playlists.classList.remove('new_playlists_active')
}
threeThree.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    body.style.height = '100vh'
    player_list.classList.remove('player_list_active')
    main.classList.add('main_diactive')
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    dancing_block.classList.add('dancing_block_active')
    settings_text.style.color = '#ffffff'
    home_page_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#00ECBE'
    like_and_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    new_playlists.classList.remove('new_playlists_active')
}
logo_in_header.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    main.classList.remove('main_diactive')
    player_list.classList.remove('player_list_active')
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    home_page_text.style.color = '#00ECBE'
    settings_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    like_and_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
}
settings_text.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    player_list.classList.remove('player_list_active')
    main.classList.add('main_diactive')
    settings_block.classList.add('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    settings_text.style.color = '#00ECBE'
    home_page_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    like_and_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    new_playlists.classList.remove('new_playlists_active')
}
home_page_text.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    player_list.classList.remove('player_list_active')
    main.classList.remove('main_diactive')
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    home_page_text.style.color = '#00ECBE'
    settings_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    like_and_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    new_playlists.classList.remove('new_playlists_active')
}
playlist_text.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    player_list.classList.remove('player_list_active')
    body.style.height = '100vh'
    main.classList.add('main_diactive')
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.add('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    settings_text.style.color = '#ffffff'
    home_page_text.style.color = '#ffffff'
    playlist_text.style.color = '#00ECBE'
    dancing_text.style.color = '#ffffff'
    like_and_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    new_playlists.classList.remove('new_playlists_active')
}
checkbox.onclick = () => {
    body.classList.toggle('checkbox_on')
    body.style.transition = '300ms'
    free_user.classList.toggle('free_user_none')
    premium_us.classList.toggle('premium_us_block')
    free_user.style.color = 'white'
}
like_and_text.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    player_list.classList.remove('player_list_active')
    main.classList.add('main_diactive')
    body.style.height = '100vh'
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    dancing_block.classList.remove('dancing_block_active')
    liked_songs_block.classList.add('liked_songs_block_active')
    settings_text.style.color = '#ffffff'
    home_page_text.style.color = '#ffffff'
    like_and_text.style.color = '#00ECBE'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    new_playlists.classList.remove('new_playlists_active')
}
dancing_text.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    player_list.classList.remove('player_list_active')
    body.style.height = '100vh'
    main.classList.add('main_diactive')
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    dancing_block.classList.add('dancing_block_active')
    settings_text.style.color = '#ffffff'
    home_page_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#00ECBE'
    like_and_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
    new_playlists.classList.remove('new_playlists_active')
}
new_playlist.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    player_list.classList.remove('player_list_active')
    body.style.height = '100vh'
    main.classList.add('main_diactive')
    new_playlists.classList.add('new_playlists_active')
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    settings_text.style.color = '#ffffff'
    home_page_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    new_playlist.style.color = '#00ECBE'
    like_and_text.style.color = '#ffffff'
}
flexx.onclick = () => {
    footer_wrap.classList.remove('footer_opacity')
    player_list.classList.remove('player_list_active')
    main.classList.remove('main_diactive')
    settings_block.classList.remove('settings_active')
    pseudo_main.classList.remove('pseudo_main_active')
    liked_songs_block.classList.remove('liked_songs_block_active')
    dancing_block.classList.remove('dancing_block_active')
    home_page_text.style.color = '#00ECBE'
    settings_text.style.color = '#ffffff'
    playlist_text.style.color = '#ffffff'
    dancing_text.style.color = '#ffffff'
    like_and_text.style.color = '#ffffff'
    new_playlist.style.color = '#ffffff'
}



