// To add more song, just copy the following code and paste inside the array

//   {
//     name: "Here is the music name",
//     artist: "Here is the artist name",
//     img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
//     src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
//   }

//paste it inside the array as more as you want music then you don't need to do any other thing

let allMusic = [
  {
    name: "His Name is John",
    artist: "Harris Jayaraj, Paal Dabba",
    img: "https://c.saavncdn.com/265/Dhruva-Natchathiram-Original-Motion-Picture-Soundtrack-Tamil-2023-20231123124546-500x500.jpg",  // Use the actual URL for the image
    src: "https://masstamilan.download/t/2023/Dhruva-Natchathiram/320/His%20Name%20is%20John.mp3?h=1732100136-IvmO%2BOdo0CZLJkcL9s3TuoIFzmc0lzJ4Ls9juVno0ek%3D"  // Use the actual URL for the MP3
  },
  {
    name: "Naracha Mudi",
    artist: "Harris Jayaraj, Srilekha Parthasarathy",
    img: "https://c.saavncdn.com/265/Dhruva-Natchathiram-Original-Motion-Picture-Soundtrack-Tamil-2023-20231123124546-500x500.jpg",  // Image URL
    src: "https://masstamilan.download/t/2023/Dhruva-Natchathiram/320/Naracha%20Mudi.mp3?h=1732104604-Vmwmu7O2o1uDR%2FuWQv%2Bai1PNMnEMlnYjJ13VfpgTLok%3D"  // MP3 URL
  },
  {
    name: "Oru Manam",
    artist: "Vikram, Harris Jayaraj, Karthik, Shashaa",
    img: "https://c.saavncdn.com/265/Dhruva-Natchathiram-Original-Motion-Picture-Soundtrack-Tamil-2023-20231123124546-500x500.jpg",  // Image URL
    src: "https://masstamilan.download/t/2023/Dhruva-Natchathiram/320/Oru%20Manam.mp3?h=1732105468-9VMOJvLiaQWn8801TcgmzJAEub146affuhMTWDvQEhc%3D"  // MP3 URL
  },
  {
    name: "Hey Minnale",
    artist: "G. V. Prakash Kumar, Haricharan, Shweta Mohan",
    img: "https://c.saavncdn.com/332/Hey-Minnale-From-Amaran-Tamil-Tamil-2024-20241004094036-500x500.jpg",  // Image URL
    src: "https://masstamilan.download/t/2024/Amaran/320/Hey%20Minnale.mp3?h=1732108584-3N8p%2Bf0vKe4ZiFSbBSdJBOy54t29BkHOPx%2BvVabdn0M%3D"  // MP3 URL
  },
  {
    name: "Urugi Urugi",
    artist: "Anand Aravindakshan",
    img: "https://c.saavncdn.com/720/Joe-Tamil-2023-20240227114402-500x500.jpg",  // Image URL
    src: "https://masstamilan.download/t/2023/Joe/320/Urugi%20Urugi.mp3?h=1732109269-5vCQfr90ErIQZnPvNWppNYaQ5SSiy2KXGRTPMxMOhCA%3D"  // MP3 URL
  },
  {
    name: "Kangal Edho",
    artist: "Dhibu Ninan Thomas",
    img: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-prgas721ot8jkn1nd9jef3kdp1-20231123150141.Medi.jpeg",  // Image URL
    src: "https://dl.orutamilsong.com/files/Tamil%20Mp3%20Songs/Chithha/Kangal%20Edho.mp3"  // MP3 URL
  },
  {
    name: "Adiye",
    artist: "Dhibu Ninan Thomas, Kapil Kapilan",
    img: "https://i.scdn.co/image/ab67616d0000b27399e9e5a108d4a457de95e016",  // Image URL
    src: "https://masstamilan.download/t/2021/Bachelor/320/Adiye-MassTamilan.fm.mp3?h=1732110351-%2Bwa3qJxtFi9%2FXvClb4WfaEvinVY31M0trLjxeptpBI0%3D"  // MP3 URL
  },
  {
    name: "Maruvaarthai",
    artist: "Adheef, Nipin, Ram, Vishnu",
    img: "https://img.youtube.com/vi/gD8Zk4EqEUA/hqdefault.jpg",  // Image URL
    src: "https://w1.savevids.net/downloads/a18f0e48-70da-4401-9a98-7ddd3480abf2/MARUVAARTHAI%20Enai%20Noki%20Paayum%20Thota%20Cover%20by%20Adheef%20Nipin%20Ram%20Vishnu.mp3"  // MP3 URL
  },
  {
    name: "7UP Madras Gig - Orasaadha",
    artist: "Vivek - Mervin",
    img: "https://img.youtube.com/vi/93Y_eCwdR5k/hqdefault.jpg",  // Image URL
    src: "https://proxy.savevids.net/downloads/b5368f26-aaba-44cd-9497-ccb9f1580288/7UP%20Madras%20Gig%20Orasaadha%20Vivek%20Mervin.mp3"  // MP3 URL
  },
  {
    name: "Othaiyadi Pathayila",
    artist: "Anirudh Ravichander",
    img: "https://i.ytimg.com/vi/z2mDkSDiHuM/maxresdefault.jpg",  // Image URL
    src: "https://masstamilan.download/t/2018/Kanaa/320/Othaiyadi-Pathayila-MassTamilan.com.mp3?h=1732112019-yZG%2BXVfopgVymcu%2FIl7Nc%2FgkOdIXRXK2xNfEQ89kQ2Y%3D"  // MP3 URL
  },
];

  // like this paste it and remember to give comma after ending of this bracket }
  // {
  //   name: "Here is the music name",
  //   artist: "Here is the artist name",
  //   img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
  //   src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
  // }
