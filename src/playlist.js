const songs = [
  {
    _id: "65c75510430869af952da49e",
    title: "Remembering Michael Jackson: Iconic Hits",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/michael-jackson-performs-in-concert-circa-1995-photo-by-kevin-mazur_wireimage.jpg",
    content:
      "Join us on a journey through the timeless hits of the King of Pop, Michael Jackson. From the electrifying 'Thriller' to the mesmerizing 'Billie Jean,' explore the magic of MJ's music that continues to captivate audiences worldwide.",
    description: "Relive the magic of Michael Jackson's iconic songs.",
    category: "Music",
    __v: 0,
    url: require('./songs/mj.mp3'),
  },

{
    "_id": "65c75734430869af952da4a0",
    "title": "Madonna's Greatest Hits",
    "image": "https://img.wynk.in/unsafe/200x200/filters:no_upscale():strip_exif():format(jpg)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/srch_believe_A10320WT030420865W.jpg",
    "content": "Discover Madonna's iconic hits that have defined pop music for decades. From 'Like a Virgin' to 'Vogue' and 'Material Girl', her songs continue to captivate audiences worldwide.",
    "description": "Explore the timeless classics by Madonna.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/Maddonna.mp3')
},

{
    "_id": "65c75801430869af952da4a2",
    "title": "Celine Dion's Greatest Hits",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ou5-GR_Ccbw-O5Uy44fM0yCKocxxuNnhLg&usqp=CAU",
    "content": "Experience the timeless voice of Celine Dion with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of Celine Dion's music with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/CelineDion.mp3')

},
{
    "_id": "65c75877430869af952da4a4",
    "title": "Justin Bieber Greatest Hits",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGbnY-PujCE5Elwf1AeUfCPvPDvonjZyBgXPGBk627mAjH1MFJ5MLoqZiOmEYTJFa4n4&usqp=CAU",
    "content": "Experience the timeless voice of JustinBeibers with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of Justins Beiber's music with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/JustinBieber.mp3')

},
{
    "_id": "65c75915430869af952da4a6",
    "title": "shania twain Greatest Hits",
    "image": "https://img.wynk.in/unsafe/320x180/top/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602455981998_20230623031906585/1687494028456/23UMGIM44846_T1_cvrart.jpg",
    "content": "Experience the timeless voice of Shania twain with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of Shania's music with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/steive.mp3')

},
{
    "_id": "65c759fe430869af952da4a8",
    "title": "stevie Wonder Greatest Hits",
    "image": "https://www.rollingstone.com/wp-content/uploads/2022/12/Steve-Perry-GettyImages-98032657.jpg?w=800",
    "content": "Experience the timeless voice of Steive with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of Steive music with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/steive.mp3')

},
{
    "_id": "65c75a79430869af952da4aa",
    "title": "Bob Marley Greatest Hits",
    "image": "https://www.rollingstone.com/wp-content/uploads/2022/12/Bob-Marley-GettyImages-90432759.jpg?w=800",
    "content": "Experience the timeless voice of Marley with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of Marleymusic with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/Bob-Marley.mp3')

},
{
    "_id": "65c75aed430869af952da4ac",
    "title": "ray CharlesGreatest Hits",
    "image": "https://www.rollingstone.com/wp-content/uploads/2022/12/Rod-Stewart-GettyImages-155364730.jpg?w=800",
    "content": "Experience the timeless voice of ray charles with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of Ray Charles music with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/rayCharles.mp3')

},
{
    "_id": "65c75b88430869af952da4ae",
    "title": "Aretha Fraklin Greatest Hits",
    "image": "https://www.rollingstone.com/wp-content/uploads/2022/12/Frank-Ocean-GettyImages-149853314.jpg?w=800",
    "content": "Experience the timeless voice of Fraklin with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of Fraklin music with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/ArethaFranklin.mp3')

},
{
    "_id": "65c75c34430869af952da4b0",
    "title": "AR Rehman Greatest Hits",
    "image": "data:image/jpeg;base64,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",
    "content": "Experience the timeless voice of REHMAN with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of Rehman music with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/ARRehman.mp3')

},{
    "_id": "65c75c98430869af952da4b2",
    "title": "ArgitSingh Greatest Hits",
    "image": "https://cdn.siasat.com/wp-content/uploads/2023/10/arijit-singh.jpg",
    "content": "Experience the timeless voice of Arjith with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of Arjith music with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/ArjithSingh.mp3')

},
{
    "_id": "65c75d7b430869af952da4b4",
    "title": "Neha Kakkar Greatest Hits",
    "image": "data:image/jpeg;base64,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",
    "content": "Experience the timeless voice of neha with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of Neha music with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/NehaKakkar.mp3')

},
{
    "_id": "65c75def430869af952da4b6",
    "title": "Diljit Dosanjh Greatest Hits",
    "image": "data:image/jpeg;base64,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",
    "content": "Experience the timeless voice of dilijit with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/DIljit.mp3')

},

{
    "_id": "65e160be403dca3527f864ef",
    "title": "SPB",
    "image": "https://static.toiimg.com/thumb/msid-78321075,width-400,resizemode-4/78321075.jpg",
    "content": "Experience the timeless voice of spb with this collection of her greatest hits. From power ballads to upbeat anthems, immerse yourself in the iconic melodies that have captivated audiences worldwide.",
    "description": "Relive the magic of spb music with her most beloved songs.",
    "category": "Music",
    "__v": 0,
    "url": require('./songs/SPB.mp3')

}


];
export default songs;
