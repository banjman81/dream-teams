async function loadDevTracK(){
    const rawData = await fetch('https://newworldfans.com/api/v1/dev_tracker?page=1&source=reddit')
    const data = await rawData.json()
    console.log(data.dev_posts)
}

loadDevTracK()