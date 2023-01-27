import { expect, test } from "@playwright/test";
import * as data from "../testData.json";

//const param=JSON.parse('/testData.json')
let userID: string;

test("Get Current User's Playlists", async ({ request }) => {

    const _response = await request.get(`${data.listOfPlaylists}`)
    const respBody = await _response.json()

    //console.log(respBody)
    expect(_response.ok()).toBeTruthy()
    expect(respBody.items[0].name).toBe("Arjit Singh")
    expect(respBody.items[1].name).toBe("My Playlist #1")

})

test("Get User Profile ", async ({ request }) => {

    const _response = await request.get(`${data.userProfile}`)
    const respBody = await _response.json()
    userID = (respBody.id)
    expect(await _response.status()).toBe(200)
    expect(respBody.id).toBe("31as265tqv6tuzyieksboznthq7e")



})

test("Get Playlist Items", async ({ request }) => {

    const _response = await request.get(`${data.Playlist1_tracks}`)
    const respBody = await _response.json()

    expect(await _response.status()).toBe(200)
    //console.log(respBody)

})
test.only("Post- Add items to Playlist", async ({ request }) => {

    const _response = await request.post(`${data.addTracktoPlaylist}`,
        {
            data: {
                "uris": ["spotify:track:3gYrlGX6Q04crnkWW0ucsi", "spotify:track:1418IuVKQPTYqt7QNJ9RXN"]
            }
        })
    const respBody = await _response.json()

    expect(await _response.status()).toBe(201)
    //console.log(respBody)

})



