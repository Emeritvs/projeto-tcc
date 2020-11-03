const video = document.getElementById("video");

export default function startVideo(){
    console.log('inicializando video...');

    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}
